# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Working Principles

Behavioral guidelines to reduce common mistakes. They bias toward caution over speed; for trivial tasks, use judgment.

### Think before coding

Don't assume. Don't hide confusion. Surface tradeoffs.

Before implementing:

- State your assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them — don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

### Simplicity first

Minimum code that solves the problem. Nothing speculative.

- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.

Ask yourself: "Would a senior engineer say this is overcomplicated?" If yes, simplify.

### Surgical changes

Touch only what you must. Clean up only your own mess.

When editing existing code:

- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- If you notice unrelated dead code, mention it — don't delete it.

When your changes create orphans:

- Remove imports/variables/functions that _your_ changes made unused.
- Don't remove pre-existing dead code unless asked.

The test: every changed line should trace directly to the user's request.

### Goal-driven execution

Define success criteria. Loop until verified.

Transform tasks into verifiable goals:

- "Add validation" → "Write tests for invalid inputs, then make them pass"
- "Fix the bug" → "Write a test that reproduces it, then make it pass"
- "Refactor X" → "Ensure tests pass before and after"

For multi-step tasks, state a brief plan:

```text
1. [Step] → verify: [check]
2. [Step] → verify: [check]
3. [Step] → verify: [check]
```

Strong success criteria let you loop independently. Weak criteria ("make it work") require constant clarification.

These guidelines are working if: fewer unnecessary changes in diffs, fewer rewrites due to overcomplication, and
clarifying questions come before implementation rather than after mistakes.

## Git Commits

- **Never include Claude as author or co-author** in commit messages, PR descriptions, or any other text. Do not add
  `Co-Authored-By: Claude…` trailers, "Generated with Claude Code" footers, or any similar attribution.
- The user's own git author identity (already configured in git) is the only identity that should appear on commits.
- This rule overrides the default Claude Code commit-template guidance.
- **Never prepend the JIRA ticket ID** (e.g. `[OND211-2386]`) to the commit subject yourself. The `giticket` pre-commit
  hook reads the ticket from the branch name (`(feature|bugfix|support|hotfix)/<TICKET>-…`) and prepends `[<ticket>]`
  (with a trailing space) automatically. Writing the prefix manually produces a duplicate like
  `[OND211-2386] [OND211-2386] feat: …`. Write the subject as plain Conventional Commits (`feat: …`, `fix(scope): …`,
  `docs(types): …`) and let the hook add the prefix on commit.

## General Principles

- Follow existing patterns before introducing new abstractions.
- Keep changes minimal and consistent with surrounding code.
- Validate inputs early with descriptive, context-rich error messages.
- Use context managers for files, sockets, and thread pools.
- Prefer region comments for grouping methods in files that already use them.
- End edited Markdown and YAML files with a trailing newline.

## Release gotchas (hard-won this session)

These bit us during the 6.14.0 release. Keep them in mind when releasing.

- **Trust the registry, not the log.** `make release_all_clients` wraps each client in `|| echo "Already released …"`, so a _failed_ release is reported as "done". After any release, verify the GitHub release **and** the published package (PyPI / npm) directly.
- **`npm install failed after 5 attempts` in a release log is usually a red herring** — that text is the echo _inside_ the docker `RUN for i in 1..5; do npm install …` retry loop, not a real failure (`npm install` succeeds → `#10 DONE`). Look further down for the real error (a TTY error, an eslint failure, a `setup.py` error).
- **Codegen must run TTY-free.** The `docker run` that invokes the proto-compiler must not pass `-it` — non-interactively it fails with `cannot attach stdin to a TTY-enabled container because stdin is not a terminal`. Fix the script (drop `-it`), or run the whole release under a pseudo-TTY: `script -qc 'make …' /dev/null`.
- **Release Makefiles print secrets.** Some `docker run … -e <TOKEN>=…` recipe lines lack a leading `@`, so `make` echoes the expanded token. Rotate any token printed during a release; fix by prefixing the recipe line with `@`.
- The release auto-pulls the **latest** `ondewo-proto-compiler` tag.
- **npm package names are inconsistent** — e.g. the JS client publishes as `@ondewo/ondewo-nlu-client-js` (double `ondewo`), not `@ondewo/nlu-client-js`. Check `src/package.json`'s `name` before querying npm.
- **The release runs type-checked `eslint`; CI does not.** Angular CI runs only `jest`, so `eslint` (`plugin:@typescript-eslint/recommended-requiring-type-checking`) failures surface only at release time. The type-aware rules need `rxjs`/`@angular`/`@ngx-grpc` resolvable, so `install_dependencies` must do a real `npm install --include=dev` — the release runs under `NODE_ENV=production` (which otherwise drops devDeps) and the build minimizes root `package.json`, so `git checkout -- package.json package-lock.json` **before** installing. Hand-written code must satisfy the rules: explicit `public`/`private` on constructors, `typedef` on exported consts, no unnecessary type assertions.
- **`generate` must not use `docker run -it`** (see the TTY point above); keep `-it` only on interactive `--entrypoint /bin/bash` debug commands. It regressed once and was found again on 2026-08-14 — `tests/build-config.spec.ts` now fails on it instead of `make build` failing halfway.
- **`check_out_correct_submodule_versions` must not run `make -C src/ondewo-vtsi-api build`.** That target is an _ondewo-vtsi-api release step_: it re-copies the nlu/s2t/t2s/sip protos, then `git commit`s and `git push`es them. So generating client stubs mutated a shared repository as a side effect, and on any machine without an HTTPS credential helper the push aborted the whole build with `fatal: could not read Username for 'https://github.com'`. Use its read-only half, `init_submodules checkout_defined_submodule_versions`.
- **The version bump does not survive `make build` on its own.** `install_dependencies` restores the committed root manifest with `git checkout -- package.json package-lock.json` — deliberately, because ng-packagr's generated manifest carries no devDependencies and no test scripts — and that also reverts the version. `update_package` therefore stamps **both** `src/package.json` and the root `package.json`, and `install_dependencies` re-runs it _after_ the checkout and _before_ `npm install`, so the lockfile is regenerated on the same number. Re-stamping after the install leaves `package-lock.json` one version behind. Pinned by `tests/build-config.spec.ts` ("the version bump survives make build").
- **`make release` must stage only paths that exist.** It staged `public-api.d.ts` and `public-api.d.ts.map`, both of which the codegen container **deletes** (`rm -rf public-api.d.ts` in `compile-proto-2-angular.sh`); it emits `public-api.ts` and the flattened `index.d.ts` instead. `git add` on a missing path is fatal, and an unprefixed recipe line aborts the release _after_ `make build` has already run. It now stages `public-api.ts` and `index.d.ts` — the latter was never staged at all, so the typings entry point was published to npm without ever being committed.
- **`.husky/pre-commit` runs prettier in WRITE mode, so `.prettierignore` decides what the formatter is allowed to rewrite.** `index.d.ts` (3.8 MB of generated typings), `public-api.ts` (the generated barrel) and `coverage/` were missing from it: every commit reformatted the generated output away from what the codegen emits, and `make prettier` was red on any machine that had run the tests.
- **`ONDEWO_PROTO_COMPILER_GIT_BRANCH` must name the tag the committed `ondewo-proto-compiler` submodule points at.** The "Update proto compiler dependency to X" commits move the _submodule pointer only_, so the Makefile variable silently lagged two releases behind (`tags/5.10.0` vs a 5.12.0 pointer) — and because that variable is hard-checked-out, `make build` moved the submodule **back** to 5.10.0 and generated with a compiler the repository does not ship (losing 5.12.0's duplicate-export fix, visible as the explicit `export { ReasoningEffort }` line in `public-api.ts`).

## Angular release eslint gate (CI runs jest, the release runs type-checked eslint)

- `install_dependencies` must `git checkout -- package.json package-lock.json` then `npm install --include=dev` — the release runs under `NODE_ENV=production` (drops devDeps) and the build minimises root `package.json`, so `rxjs`/`@angular`/`@ngx-grpc` must be force-resolved or the type-aware eslint fails only at release time.
- A type assertion that the **non-strict** release `tsconfig.json` calls "unnecessary" is **required** by the **strict** jest `tsconfig.spec.json` — keep the `eslint-disable` on it; removing it red-greens one toolchain while breaking the other.

## Pre-commit (chained into husky) + the release gotchas

This repo now runs the pre-commit framework (markdownlint-cli2, pre-commit-hooks, giticket, conventional-commit) **alongside** husky's eslint/prettier. Hard-won rules:

- **`.husky/pre-commit` must skip `pre-commit run` when `.pre-commit-config.yaml` is unstaged.** The release's `make run_precommit_hooks` invokes `.husky/pre-commit` **directly** (not via a git commit), and the codegen leaves the config unstaged → `pre-commit run` aborts with _"Your pre-commit configuration is unstaged"_ → the entire release fails. The guard (present in `.husky/pre-commit`): `if command -v pre-commit && git diff --quiet -- .pre-commit-config.yaml; then pre-commit run; fi` — still enforced on normal dev commits (config clean there).
- **The release `git commit` uses `--no-verify`** so husky can't reformat the freshly-generated RELEASE.md / package.json mid-commit and break the release.
- **markdownlint MD053 is disabled** in `.markdownlint-cli2.yaml`. Its auto-fix DELETES the `[comment]: <> (START/END OF GITHUB README)` reference-definition markers that the release Makefile slices the published README with (`perl … /START OF GITHUB README/../END OF GITHUB README/`). **Never re-enable MD053 here** — it silently breaks the README slice.
- **RELEASE.md is the authoritative changelog and the release tag holds the complete history.** A markdownlint/`--all-files` pass (or a careless manual "dedup") can drop `## Release … X.Y.Z` headings; if that happens, restore `RELEASE.md` + `src/RELEASE.md` from the latest release tag.
- **The root `RELEASE.md` and `src/RELEASE.md` have diverged, and the release tag cannot repair it.** The root file jumped from `7.0.1` straight to the new entry: `8.0.0`, `8.1.0` and `8.2.0` are in `src/RELEASE.md` only, and tag `8.2.0` carries the _same_ gap, so "restore from the latest release tag" does not recover them. Separately, the root file carried six sections duplicated verbatim (`6.8.0`, and `6.6.0`–`6.2.0` a second time), which markdownlint MD024 blocks on — those were removed on 2026-08-14 after checking that the version **set** was unchanged (21 unique before and after). Syncing the two files is still open.
