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

- **Trust the registry, not the log.** `make release_all_clients` wraps each client in `|| echo "Already released …"`, so a _failed_ release is reported as "done". `make release` now ends with `release_verify` (tag on origin, non-empty GitHub release body, npm serves the version), and `make release_verify` can be re-run on its own — read its result, not the driver's summary.
- **`npm install failed after 5 attempts` in a release log is usually a red herring** — that text is the echo _inside_ the docker `RUN for i in 1..5; do npm install …` retry loop, not a real failure (`npm install` succeeds → `#10 DONE`). Look further down for the real error (a TTY error, an eslint failure, a `setup.py` error).
- **Codegen must run TTY-free.** The `docker run` that invokes the proto-compiler must not pass `-it` — non-interactively it fails with `cannot attach stdin to a TTY-enabled container because stdin is not a terminal`. Fix the script (drop `-it`), or run the whole release under a pseudo-TTY: `script -qc 'make …' /dev/null`.
- **Credentials travel by NAME only.** Recipes pass `-e NAME` to `docker run` and read `$${NAME}` in the shell; make never expands a token into a recipe line, and `tests/release-credentials.spec.ts` fails if one does. Build, tests and hooks run under `$(WITHOUT_CREDENTIALS)` (`env -u` both tokens), so no npm install script sees them.
- The driver (`ondewo-vtsi-api` `release_client`) rewrites `ONDEWO_PROTO_COMPILER_GIT_BRANCH` before it runs the release; `build_compiler` tags the image it builds with that version (`CODEGEN_IMAGE`).
- **npm package names are inconsistent** — e.g. the JS client publishes as `@ondewo/ondewo-nlu-client-js` (double `ondewo`), not `@ondewo/nlu-client-js`. Check `src/package.json`'s `name` before querying npm.
- **The release runs type-checked `eslint`; CI does not.** Angular CI runs only `jest`, so `eslint` (`plugin:@typescript-eslint/recommended-requiring-type-checking`) failures surface only at release time. The type-aware rules need `rxjs`/`@angular`/`@ngx-grpc` resolvable, so `install_dependencies` must do a real `npm install --include=dev` — the release runs under `NODE_ENV=production` (which otherwise drops devDeps) and the build minimizes root `package.json`, so `git checkout -- package.json package-lock.json` **before** installing. Hand-written code must satisfy the rules: explicit `public`/`private` on constructors, `typedef` on exported consts, no unnecessary type assertions.
- **`generate` must not use `docker run -it`** (see the TTY point above); keep `-it` only on interactive `--entrypoint /bin/bash` debug commands. It regressed once and was found again on 2026-08-14 — `tests/build-config.spec.ts` now fails on it instead of `make build` failing halfway.
- **`check_out_correct_submodule_versions` must not run `make -C src/ondewo-vtsi-api build`.** That target is an _ondewo-vtsi-api release step_: it re-copies the nlu/s2t/t2s/sip protos, then `git commit`s and `git push`es them. So generating client stubs mutated a shared repository as a side effect, and on any machine without an HTTPS credential helper the push aborted the whole build with `fatal: could not read Username for 'https://github.com'`. Use its read-only half, `init_submodules checkout_defined_submodule_versions`.
- **The version bump does not survive `make build` on its own.** `install_dependencies` restores the committed root manifest with `git checkout -- package.json package-lock.json` — deliberately, because ng-packagr's generated manifest carries no devDependencies and no test scripts — and that also reverts the version. `update_package` therefore stamps **both** `src/package.json` and the root `package.json`, and `install_dependencies` re-runs it _after_ the checkout and _before_ `npm install`, so the lockfile is regenerated on the same number. Re-stamping after the install leaves `package-lock.json` one version behind. Pinned by `tests/build-config.spec.ts` ("the version bump survives make build").
- **`make release` must stage only paths that exist.** It staged `public-api.d.ts` and `public-api.d.ts.map`, both of which the codegen container **deletes** (`rm -rf public-api.d.ts` in `compile-proto-2-angular.sh`); it emits `public-api.ts` and the flattened `index.d.ts` instead. `git add` on a missing path is fatal, and an unprefixed recipe line aborts the release _after_ `make build` has already run. It now stages `public-api.ts` and `index.d.ts` — the latter was never staged at all, so the typings entry point was published to npm without ever being committed.
- **`.husky/pre-commit` runs prettier in WRITE mode, so `.prettierignore` decides what the formatter is allowed to rewrite.** `index.d.ts` (3.8 MB of generated typings), `public-api.ts` (the generated barrel) and `coverage/` were missing from it: every commit reformatted the generated output away from what the codegen emits, and `make prettier` was red on any machine that had run the tests.
- **Hand-written library sources must never live under `src/lib/`.** `lib` is ng-packagr's `dest`, and ng-packagr deletes `dest` recursively (`rmdir(dest, { recursive: true })` in its `package.transform`) before it compiles anything. So `src/lib/auth` was present when the codegen's barrel generator wrote `export * from './lib/auth';` into `public-api.ts`, and gone by the time tsc compiled that entry point: `TS2307: Cannot find module './lib/auth'`, which is where the whole 8.4.0 release stopped. The auth surface lives in `src/auth` — the layout `ondewo-nlu-client-angular` uses, and the first one `generate-public-api.sh` looks for. Two things this also explains: the barrel line only appears from proto-compiler **5.13.0** on (`make release_client` in the api repo always pins the _newest_ compiler tag, so a client can acquire it without anyone editing the client), and every release up to and including 8.3.0 shipped **no** auth symbol at all — the sources were covered by jest and never bundled. Pinned by `tests/build-config.spec.ts` ("the hand-written auth surface survives the codegen").
- **`ONDEWO_PROTO_COMPILER_GIT_BRANCH` must name the tag the committed `ondewo-proto-compiler` submodule points at.** The "Update proto compiler dependency to X" commits move the _submodule pointer only_, so the Makefile variable silently lagged two releases behind (`tags/5.10.0` vs a 5.12.0 pointer) — and because that variable is hard-checked-out, `make build` moved the submodule **back** to 5.10.0 and generated with a compiler the repository does not ship (losing 5.12.0's duplicate-export fix, visible as the explicit `export { ReasoningEffort }` line in `public-api.ts`).

## Angular release eslint gate (CI runs jest, the release runs type-checked eslint)

- `install_dependencies` must `git checkout -- package.json package-lock.json` then `npm install --include=dev` — the release runs under `NODE_ENV=production` (drops devDeps) and the build minimises root `package.json`, so `rxjs`/`@angular`/`@ngx-grpc` must be force-resolved or the type-aware eslint fails only at release time.
- A type assertion that the **non-strict** release `tsconfig.json` calls "unnecessary" is **required** by the **strict** jest `tsconfig.spec.json` — keep the `eslint-disable` on it; removing it red-greens one toolchain while breaking the other.

## `optional` proto3 scalars: ngx-grpc FLATTENS presence, and that is a real difference

`AsteriskConfigs.asterisk_version` is the first field here declared `optional string` upstream. The python and jspb clients expose real presence (`HasField` / `hasAsteriskVersion()`); **ngx-grpc does not**. The generated class has a plain `asteriskVersion: string`, `refineValues` coerces `undefined` to `''` in the constructor, and `writeToBinary` emits the field only when it is truthy.

The consequence, asserted in `tests/asterisk-version.spec.ts` rather than assumed: an Angular caller can send a tag or send nothing, and **cannot send the empty string** — an empty value encodes identically to an absent one. That is harmless for this field, because the empty string is exactly the value the VTSI server rejects. It will not be harmless for the next `optional` field that needs the third state, so check this before assuming an Angular client can express one.

## The two commit-msg hooks must run in this order

`.pre-commit-config.yaml` lists `conventional-pre-commit` **before** `giticket`, and the order is the whole point. pre-commit runs hooks in file order, and `giticket` rewrites the subject to `[OND211-2418] <subject>`, which is not a valid Conventional Commit. With `giticket` first the validator is handed the prefix the other hook just added and rejects it, so **no conforming commit message exists at all** — one hook failing on the other hook's output. The only escapes were `--no-verify` or renaming the branch away from its ticket, and this repo's history shows the result: subjects that carry no ticket prefix at all.

This repo had the wrong order until the `asterisk_version` regeneration commit fixed it. Type the plain subject (`feat(vtsi): …`), let the validator see exactly that, and let `giticket` decorate it afterwards. Never write the `[TICKET]` prefix yourself — that yields `[OND211-2418] [OND211-2418] …`.

## Pre-commit (chained into husky) + the release gotchas

This repo now runs the pre-commit framework (markdownlint-cli2, pre-commit-hooks, giticket, conventional-commit) **alongside** husky's eslint/prettier. Hard-won rules:

- **`.husky/pre-commit` must skip `pre-commit run` when `.pre-commit-config.yaml` is unstaged.** The release's `make run_precommit_hooks` invokes `.husky/pre-commit` **directly** (not via a git commit), and the codegen leaves the config unstaged → `pre-commit run` aborts with _"Your pre-commit configuration is unstaged"_ → the entire release fails. The guard (present in `.husky/pre-commit`): `if command -v pre-commit && git diff --quiet -- .pre-commit-config.yaml; then pre-commit run; fi` — still enforced on normal dev commits (config clean there).
- **The release `git commit` uses `--no-verify`** so husky can't reformat the freshly-generated RELEASE.md / package.json mid-commit and break the release.
- **markdownlint MD053 is disabled** in `.markdownlint-cli2.yaml`. Its auto-fix DELETES the `[comment]: <> (START/END OF GITHUB README)` reference-definition markers that the release Makefile slices the published README with (`perl … /START OF GITHUB README/../END OF GITHUB README/`). **Never re-enable MD053 here** — it silently breaks the README slice.
- **RELEASE.md is the authoritative changelog and the release tag holds the complete history.** A markdownlint/`--all-files` pass (or a careless manual "dedup") can drop `## Release … X.Y.Z` headings; if that happens, restore `RELEASE.md` + `src/RELEASE.md` from the latest release tag.
- **The root `RELEASE.md` and `src/RELEASE.md` are one file in two places.** They had diverged (8.0.0–8.2.0 were in `src/RELEASE.md` only, and tag `8.2.0` carries the same gap, so a release tag cannot repair it); they are identical now, `make release` copies `src/RELEASE.md` over the root one, and `tests/release-notes.spec.ts` fails when they differ.

## Releasing: preflight and the traps that have actually bitten

Written after a release program across every ONDEWO client in one session. Each item below
cost real time or a broken artefact; every statement is derived from THIS repo's Makefile.

### Before you touch the version, check the released tag is in `master`

Releases here are cut from a `release/<version>` branch and are **not always merged back**, so
`master` can be missing work that is already published — and because a later version number
sorts above the unmerged one, a consumer upgrading silently loses it. The ondewo-nlu-client-python
7.1.0 release was exactly this: it shipped from a `master` that had never seen 7.0.5's
offline-token hand-off, so PyPI's newest release was a regression against its predecessor.

```bash
latest=$(git tag --sort=-v:refname | head -1)
git merge-base --is-ancestor "$latest" master && echo "in master" || echo "NOT in master -- merge first"
```

A fast-forward (`git merge --ff-only <tag>`) is the common case. A true merge needs care: resolve
metadata toward `master` and keep BOTH release-note sections, newest first — a reader upgrading
from the older line still needs the older entry.

### `git add` on a dirty submodule stages the WRONG commit

This repo has submodules (`ondewo-proto-compiler`, `src/ondewo-vtsi-api`). If a submodule's working
tree is dirty, `git add <submodule>` stages **its current HEAD**, not the pointer you resolved
during a merge — silently regressing it to an older commit. `git checkout master -- <submodule>`
fixes the index but the next `git add` re-breaks it. Move the working tree instead:

```bash
want=$(git ls-tree master <submodule> | awk '{print $3}')
git -C <submodule> checkout -q "$want" && git add <submodule>
```

### The release notes are sliced by an EXACTLY-CASED heading

`CURRENT_RELEASE_NOTES` slices `RELEASE.md` with a perl range. In THIS repo the opening
pattern is, verbatim:

```text
Release ONDEWO VTSI Angular Client ${ONDEWO_VTSI_VERSION}
```

So the heading of a new entry must read exactly `## Release ONDEWO VTSI Angular Client <version>`. **This wording is
not consistent across the ONDEWO repos** — some say `... <Name> Client`, some `... Client
<Name>` with the words reversed, the API repos say `... API` with no `Client` at all, and the
casing varies (`Js`, `Nodejs`, `Typescript`, `Survey`). Do not carry a heading over from a
sibling repo. Copy the PREVIOUS entry in this file and change only the version, or read the
pattern above out of the Makefile.

The match is anchored at both ends with the version dots escaped (`^#+ Release ONDEWO VTSI Angular Client \Q<v>\E$`),
so `19.1.0` or `9.1.0-rc1` never satisfy `9.1.0`. A heading that does not match yields an **empty slice**;
`release_preflight` and `build_gh_release` both refuse that instead of creating a release without notes.

### Where the release notes live

`src/RELEASE.md` is the file to edit (the driver inserts its boilerplate there too). `make release`
copies it over the root `RELEASE.md`, which the GitHub release body is sliced from.

### The release order, and how a partial failure is recovered

`make release` runs, and `tests/build-config.spec.ts` ("the release order") pins:
`release_preflight` → `build` → `check_build` → `release_tests` → pre-commit hooks → local commit →
`check_tag_matches_package` → `publish_npm_via_docker` → `check_npm_published` → `git push` →
`create_release_branch` → `create_release_tag` → `release_to_github_via_docker_image` → `release_verify`.

The preflight proves both tokens and the push access, so a bad credential now fails before anything
is committed. Past the publish, a failure leaves the package on npm: do **not** re-run `make ondewo_release`
(the preflight refuses a version npm already has, and npm refuses a re-publish). Re-run only the
steps that did not happen, from `git push` on, then `make release_verify`.

### Verify against the registry, with the REAL package name

This package publishes as **`@ondewo/vtsi-client-angular`**, which is not always the repository name — the JS client
publishes as `@ondewo/ondewo-nlu-client-js` (doubled `ondewo`), so a lookup by repo name returns
a 404 that reads like a failed release. Check the name in the manifest first, then:

```bash
npm view @ondewo/vtsi-client-angular versions --json
```

**An npm publish can be STAGED but not yet served.** Immediately after a publish the registry may
answer 404 for the new version while refusing a re-publish with
`409 Cannot publish over previously staged version`. That is not a failure and the version is
not burned — wait and re-check before bumping to a new number.

### Where the credentials are, and where they are not

`make ondewo_release` clones `ondewo-devops-accounts` into a `mktemp -d` directory OUTSIDE the
repository (or reads `DEVOPS_ACCOUNT_DIR` when the driver hands its one clone over), reads the two
`^NAME=` lines into the environment, deletes its clone before `$(MAKE) release` starts, and an EXIT
trap deletes it when the clone or the read fails. The tokens are never on an argv and never printed;
they reach only `docker run -e NAME` of the preflight, the npm publish and the GitHub release. The
codegen container mounts the repository root read-write, so `build` refuses to run while a
`./ondewo-devops-accounts` sits there (`refuse_devops_clone_in_tree`).

### Run the release from `master`, and check with `git branch --show-current`

A release ends by checking out `release/<version>`, and **nothing checks you out back**. Start the
next release from that leftover checkout and `git commit` + `git push` land on the OLD release
branch: the new `release/<version>` is cut from it, the tag points into it, and `master` never sees
the release at all. Measured on ondewo-csi-client-typescript 5.5.1 -- npm had it, the tag had it,
and `origin/master` was still at 5.5.0. Recovery was a fast-forward (`git merge --ff-only
release/5.5.1`), which worked only because nothing else had moved; a diverged `master` needs a real
merge.

```bash
git branch --show-current            # must print master BEFORE `make ondewo_release`
```

### The release `git add` list is an ALLOW-LIST, so anything outside it ships but is never committed

`make build` writes files the release target then stages from a fixed list of paths. Anything the
build touches that is not on that list reaches the registry and is **absent from the tag of that
same version** -- two different things under one name, with nothing anywhere reporting it.

Both directions have bitten: a hand-written directory the build copies into the package, and a
tracked file the build regenerates. Whatever `make build` writes, either stage it or prove the
release does not need it.

`check_tag_matches_package` now enforces this on every release, between the local commit and the
publish: every file `npm pack ./npm --dry-run` lists must be committed and byte-equal at HEAD, except
four the build rewrites on purpose (each documented at the target): `package.json` (same name and
version required), `README.md`, `LICENSE`, and `public-api.ts`, whose npm copy is the committed one
minus `export * from './src/auth';` (npm/ has no `src/`; the auth surface ships inside `fesm2022/` and
`index.d.ts`).

### `git commit` exits 1 on a clean tree -- so the release commits only when something is staged

If the release content was already committed by hand, `git commit` finds nothing to commit and
returns 1. The line used to be prefixed with `-`, which also swallowed a REAL commit failure, after
which `git push` pushed nothing and npm published anyway. It is now
`git diff --cached --quiet || git commit --no-verify …`: an empty index is fine, a failing commit
stops the release.

### Write the RELEASE.md section BEFORE releasing

`CURRENT_RELEASE_NOTES` slices RELEASE.md between the heading naming this exact version and the next
`*****` separator. No heading means an EMPTY slice, and `gh release create -n ""` would succeed with
no notes (ondewo-nlu-client-js and -typescript 7.1.1 shipped that way). Here `release_preflight`
refuses the release up front and `build_gh_release` refuses again before creating it.

### Verify the three artefacts separately -- they fail independently

GitHub's release API returned 500 twice in one session, leaving the registry and the tag correct and
**no release object at all** (nlu-client-js and -angular 7.1.1); `gh release create` after the fact
repairs it without touching the artefact.
And npm answering `409 Cannot publish over previously staged
version` is NOT a failure -- the publish SUCCEEDED and the registry has not served it yet, so a 404
from `npm view` in the same minute is the same fact from the other side. Do not burn a version
number over it; wait and re-check.

```bash
npm view <pkg> version ; git tag --list <version> ; gh release view <version> --json body --jq '.body|length'
```
