/**
 * Build-configuration and packaging-coherence specs.
 *
 * These are hermetic file-system assertions — no docker, no network, no git — that pin the
 * invariants an interrupted or mis-pinned `make build` silently breaks:
 *
 * 1. The version the client publishes must be the version of the `ondewo-vtsi-api` submodule the
 *    stubs in `api/` were generated from, and it must be the same number in all three places that
 *    carry it (`Makefile`, `src/package.json`, root `package.json`).
 * 2. `ONDEWO_PROTO_COMPILER_GIT_BRANCH` must name the tag the committed `ondewo-proto-compiler`
 *    submodule actually points at. When it lags behind, `make build` checks the submodule *back*
 *    to the older tag, generating with a compiler the repository does not ship and leaving a dirty
 *    submodule pointer behind.
 * 3. The codegen container must run TTY-free (documented in CLAUDE.md): `docker run -it` aborts
 *    with `the input device is not a TTY` in every non-interactive context (CI, `make release`).
 * 4. Every `ondewo/**\/*.proto` in the pinned API must have a generated stub, and `public-api.ts`
 *    must export exactly the stubs that exist — a partial regeneration leaves protos without
 *    stubs, and a stale barrel exports files that are gone.
 * 5. The published package must be self-consistent: `package.json` present, and every path it
 *    advertises (`module`, `typings`, `exports`) resolving to a file that exists. The interrupted
 *    regeneration this suite was written for deleted `package.json`, `fesm2022/` and
 *    `public-api.d.ts` and never rebuilt them.
 * 6. `make build` must not lose the version bump: `install_dependencies` restores the committed
 *    root manifest with `git checkout --`, which reverts it. The re-stamp has to happen after that
 *    checkout and before `npm install`, or the build ends with a manifest and a lockfile carrying
 *    the previous version.
 * 7. `make release` must stage only paths that exist: `git add <missing path>` is fatal, and a
 *    generated artifact the release forgets to stage is published but never committed.
 */
import * as fs from 'node:fs';
import * as path from 'node:path';

/** Absolute path of the repository root (this file lives in `<root>/tests`). */
const REPO_ROOT: string = path.resolve(__dirname, '..');

/** The client's own Makefile — the single source of truth for every build pin. */
const MAKEFILE: string = path.join(REPO_ROOT, 'Makefile');

/** The `ondewo-vtsi-api` submodule the stubs in `api/` are generated from. */
const API_SUBMODULE: string = path.join(REPO_ROOT, 'src', 'ondewo-vtsi-api');

/** The `ondewo-proto-compiler` submodule that provides the angular codegen image. */
const COMPILER_SUBMODULE: string = path.join(REPO_ROOT, 'ondewo-proto-compiler');

/** Directory holding the generated gRPC/protobuf stubs. */
const API_DIR: string = path.join(REPO_ROOT, 'api');

/** The generated barrel re-exporting every stub. */
const PUBLIC_API_TS: string = path.join(REPO_ROOT, 'public-api.ts');

/** The publish folder the codegen container writes — untracked, present only after a local build. */
const NPM_PUBLISH_DIR: string = path.join(REPO_ROOT, 'npm');

/**
 * Both submodules are optional in a bare checkout, and they are unavailable for different reasons:
 * the GitHub Actions job checks out with `submodules: false`, and `ondewo-proto-compiler` is an
 * SSH remote no CI runner can clone. A test whose subject is simply not on disk is reported as a
 * visible SKIPPED line rather than silently dropped or failed for an environmental reason.
 *
 * @param marker a file that exists exactly when the submodule is checked out
 * @returns jest's `it` when the submodule is present, `it.skip` otherwise
 */
function itWithSubmodule(marker: string): jest.It {
	return fs.existsSync(marker) ? it : it.skip;
}

/** Runs only when the `ondewo-vtsi-api` submodule is checked out. */
const itWithApi: jest.It = itWithSubmodule(path.join(API_SUBMODULE, 'Makefile'));

/** Runs only when the `ondewo-proto-compiler` submodule is checked out. */
const itWithCompiler: jest.It = itWithSubmodule(path.join(COMPILER_SUBMODULE, 'angular', 'image-data', 'package.json'));

/** Runs only where the untracked codegen output of a local `make build` is on disk. */
const itWithBuildOutput: jest.It = itWithSubmodule(path.join(NPM_PUBLISH_DIR, 'package.json'));

/** Message stub protoc-gen-ng emits for every compiled `.proto` file. */
const MESSAGE_STUB_SUFFIX: string = '.pb.ts';

/** Extra stubs protoc-gen-ng emits only for a `.proto` that declares at least one `service`. */
const SERVICE_STUB_SUFFIXES: string[] = ['.pbconf.ts', '.pbsc.ts'];

/**
 * Read a `NAME=value` (or `NAME = value`) assignment out of a Makefile.
 *
 * @param makefilePath absolute path of the Makefile to read
 * @param name the variable name to look up
 * @returns the assigned value with surrounding whitespace removed
 */
function readMakefileVariable(makefilePath: string, name: string): string {
	const source: string = fs.readFileSync(makefilePath, 'utf8');
	const pattern: RegExp = new RegExp(`^${name}[ \\t]*=[ \\t]*(.*)$`, 'm');
	const matched: RegExpExecArray | null = pattern.exec(source);
	if (matched === null) {
		throw new Error(`${name} is not assigned in ${makefilePath}`);
	}
	return matched[1].trim();
}

/**
 * Extract the recipe of a Makefile target: every line from the target header up to (excluding)
 * the next line that starts in column 0.
 *
 * @param makefilePath absolute path of the Makefile to read
 * @param target the target name to extract
 * @returns the recipe text, header line included
 */
function readMakefileRecipe(makefilePath: string, target: string): string {
	const lines: string[] = fs.readFileSync(makefilePath, 'utf8').split('\n');
	const start: number = lines.findIndex((line: string): boolean => line.startsWith(`${target}:`));
	if (start === -1) {
		throw new Error(`target ${target} is not defined in ${makefilePath}`);
	}
	const recipe: string[] = [lines[start]];
	for (const line of lines.slice(start + 1)) {
		if (line !== '' && !/^[ \t]/.test(line)) {
			break;
		}
		recipe.push(line);
	}
	return recipe.join('\n');
}

/**
 * Parse a JSON file into a plain record.
 *
 * @param jsonPath absolute path of the JSON file
 * @returns the parsed object
 */
function readJson(jsonPath: string): Record<string, unknown> {
	return JSON.parse(fs.readFileSync(jsonPath, 'utf8')) as Record<string, unknown>;
}

/**
 * Collect every file under a directory whose name ends with one of the given suffixes.
 *
 * @param root directory to walk (may not exist — an absent directory yields no entries)
 * @param suffixes accepted file-name suffixes
 * @returns paths relative to `root`, sorted
 */
function findFiles(root: string, suffixes: string[]): string[] {
	if (!fs.existsSync(root)) {
		return [];
	}
	const found: string[] = [];
	const walk: (directory: string) => void = (directory: string): void => {
		for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
			const absolute: string = path.join(directory, entry.name);
			if (entry.isDirectory()) {
				walk(absolute);
			} else if (suffixes.some((suffix: string): boolean => entry.name.endsWith(suffix))) {
				found.push(path.relative(root, absolute));
			}
		}
	};
	walk(root);
	return found.sort();
}

/**
 * Map a proto path to the stub base path protoc-gen-ng emits for it: the `.proto` extension is
 * dropped and `snake_case` file names become `kebab-case` (`ccai_project.proto` →
 * `ccai-project.pb.ts`).
 *
 * @param protoRelativePath proto path relative to the API submodule root
 * @returns the stub path (without suffix) relative to `api/`
 */
function stubBaseForProto(protoRelativePath: string): string {
	const withoutExtension: string = protoRelativePath.replace(/\.proto$/, '');
	return withoutExtension.replace(/_/g, '-');
}

/**
 * List every `ondewo/**` proto of the checked-out API submodule — the exact set the codegen
 * container compiles (`npm run generate` passes `ondewo` as its selected sub-directory).
 *
 * @returns proto paths relative to the API submodule root, sorted
 */
function pinnedOndewoProtos(): string[] {
	const protos: string[] = findFiles(path.join(API_SUBMODULE, 'ondewo'), ['.proto']).map((relative: string): string =>
		path.join('ondewo', relative)
	);
	if (protos.length === 0) {
		throw new Error(`no .proto files under ${path.join(API_SUBMODULE, 'ondewo')} — is the submodule checked out?`);
	}
	return protos;
}

describe('Makefile version pins', (): void => {
	/**
	 * The client tracks the API one-to-one; the api/ stubs on disk were generated from the
	 * submodule that is checked out, so shipping a different number mislabels them.
	 */
	itWithApi('pins the client version to the version of the ondewo-vtsi-api submodule it generates from', (): void => {
		const clientVersion: string = readMakefileVariable(MAKEFILE, 'ONDEWO_VTSI_VERSION');
		const apiVersion: string = readMakefileVariable(path.join(API_SUBMODULE, 'Makefile'), 'ONDEWO_VTSI_API_VERSION');
		expect(clientVersion).toBe(apiVersion);
	});

	/** `make update_package` writes this file from the Makefile variable; they must agree. */
	it('keeps src/package.json (the npm manifest source) on the Makefile version', (): void => {
		const clientVersion: string = readMakefileVariable(MAKEFILE, 'ONDEWO_VTSI_VERSION');
		expect(readJson(path.join(REPO_ROOT, 'src', 'package.json')).version).toBe(clientVersion);
	});

	/**
	 * `make install_dependencies` restores the root manifest with `git checkout --`, so the
	 * committed root `package.json` — not the one ng-packagr generates — is what consumers see.
	 */
	it('keeps the committed root package.json on the Makefile version', (): void => {
		const clientVersion: string = readMakefileVariable(MAKEFILE, 'ONDEWO_VTSI_VERSION');
		expect(readJson(path.join(REPO_ROOT, 'package.json')).version).toBe(clientVersion);
	});

	/** The API submodule must be pinned to a ref, not left empty (which checks out nothing). */
	it('names a non-empty ondewo-vtsi-api ref to check out', (): void => {
		expect(readMakefileVariable(MAKEFILE, 'VTSI_API_GIT_BRANCH')).not.toBe('');
	});
});

/**
 * Drop the comment lines of a recipe, keeping only the lines make actually executes.
 *
 * Ordering assertions have to be made about commands: a comment explaining why `npm install` must
 * come last mentions `npm install` too, and a naive index of the recipe text finds the comment.
 *
 * @param recipe the recipe text
 * @returns the recipe with every `#`-prefixed line removed
 */
function recipeCommands(recipe: string): string {
	return recipe
		.split('\n')
		.filter((line: string): boolean => !/^[ \t]*#/.test(line))
		.join('\n');
}

/**
 * The file operand of every `perl -i` line of a Makefile recipe — the manifests the recipe stamps.
 *
 * @param recipe the recipe text
 * @returns the stamped file paths, sorted
 */
function inPlaceEditedFiles(recipe: string): string[] {
	return recipe
		.split('\n')
		.filter((line: string): boolean => /perl\s+-i/.test(line))
		.map((line: string): string => {
			const operands: string[] = line.trim().split(/\s+/);
			return operands[operands.length - 1];
		})
		.sort();
}

describe('the version bump survives make build', (): void => {
	/**
	 * The revert is deliberate — ng-packagr's generated manifest drops the dev/test tooling the
	 * committed one carries — but it also throws away the version bump, which is why the re-stamp
	 * below has to exist. This assertion documents the cause; if it ever fails, the re-stamp is no
	 * longer needed for this reason.
	 */
	it('restores the committed root manifest during install_dependencies', (): void => {
		expect(recipeCommands(readMakefileRecipe(MAKEFILE, 'install_dependencies'))).toMatch(
			/git checkout -- package\.json/
		);
	});

	/** `update_package` is the one place that writes the Makefile version into a manifest. */
	it('stamps the Makefile version into both manifests, not only the library source one', (): void => {
		expect(inPlaceEditedFiles(recipeCommands(readMakefileRecipe(MAKEFILE, 'update_package')))).toEqual([
			'package.json',
			'src/package.json'
		]);
	});

	/**
	 * Ordering is the whole property: after the checkout (or the bump is reverted) and before
	 * `npm install` (or `package-lock.json` is regenerated on the previous version, leaving the
	 * lockfile and the manifest disagreeing).
	 */
	it('re-stamps after the checkout reverts it and before the lockfile is regenerated', (): void => {
		const recipe: string = recipeCommands(readMakefileRecipe(MAKEFILE, 'install_dependencies'));
		const reverted: number = recipe.indexOf('git checkout -- package.json');
		const restamped: number = recipe.indexOf('make update_package');
		const installed: number = recipe.indexOf('npm install');
		expect(reverted).toBeGreaterThanOrEqual(0);
		expect(restamped).toBeGreaterThan(reverted);
		expect(installed).toBeGreaterThan(restamped);
	});
});

describe('building the client does not mutate the api repository', (): void => {
	/**
	 * The reason the delegation below is banned: `ondewo-vtsi-api`'s own `build` target is a
	 * release step — it commits the assembled protos and pushes them. If this assertion ever
	 * fails, upstream changed that target and the ban can be revisited.
	 */
	itWithApi('is guarded because the api build target commits and pushes', (): void => {
		const apiBuild: string = readMakefileRecipe(path.join(API_SUBMODULE, 'Makefile'), 'build');
		expect(apiBuild).toContain('git commit');
		expect(apiBuild).toContain('git push');
	});

	/**
	 * Delegating to it from a client build pushes to a shared repository as a side effect of
	 * generating stubs, and fails the whole build outright wherever that push cannot authenticate
	 * (`fatal: could not read Username for 'https://github.com'`) — which is every machine without
	 * an HTTPS credential helper, CI included.
	 */
	it('does not delegate to the api build target', (): void => {
		const clientMakefile: string = fs.readFileSync(MAKEFILE, 'utf8');
		expect(clientMakefile).not.toMatch(/make\s+-C\s+\$\{VTSI_APIS_DIR\}\s+build\s*$/m);
	});

	/** It needs only the two read-only targets that check out and assemble the protos. */
	it('assembles the api protos with the non-mutating submodule targets', (): void => {
		const checkout: string = readMakefileRecipe(MAKEFILE, 'check_out_correct_submodule_versions');
		expect(checkout).toContain('make -C ${VTSI_APIS_DIR} init_submodules checkout_defined_submodule_versions');
	});
});

describe('proto-compiler pin', (): void => {
	/**
	 * `check_out_correct_submodule_versions` hard-checks-out this ref. If it lags behind the
	 * committed submodule pointer the build silently downgrades the compiler and dirties the
	 * pointer; if it runs ahead, the repository ships a pointer nobody generated with.
	 */
	itWithCompiler('pins the tag the committed ondewo-proto-compiler submodule points at', (): void => {
		const compilerPackage: Record<string, unknown> = readJson(
			path.join(COMPILER_SUBMODULE, 'angular', 'image-data', 'package.json')
		);
		expect(readMakefileVariable(MAKEFILE, 'ONDEWO_PROTO_COMPILER_GIT_BRANCH')).toBe(
			`tags/${compilerPackage.version as string}`
		);
	});
});

/**
 * Read the npm scripts of the library source manifest (`src/package.json`).
 *
 * @returns the `scripts` block, script name to command line
 */
function librarySourceScripts(): Record<string, string> {
	return readJson(path.join(REPO_ROOT, 'src', 'package.json')).scripts as Record<string, string>;
}

describe('codegen runs without a TTY', (): void => {
	/**
	 * `docker run -it` aborts with "the input device is not a TTY" whenever stdin is not a
	 * terminal — every CI job, every backgrounded `make build`, every `make release`.
	 */
	it('does not pass an interactive TTY flag to the codegen container', (): void => {
		expect(librarySourceScripts().generate).not.toMatch(/(?:^|\s)-{1,2}(?:it|ti|t|tty)(?=\s|$)/);
	});

	/** The flag stays legitimate on the interactive shell entrypoint, which is never automated. */
	it('keeps the interactive flags on the debug shell only', (): void => {
		expect(librarySourceScripts().debug).toContain('--entrypoint /bin/bash');
	});

	/** Both scripts must still remove the container they start. */
	it('removes the codegen container after the run', (): void => {
		expect(librarySourceScripts().generate).toContain('--rm');
	});
});

describe('generated api surface', (): void => {
	/**
	 * A regeneration that misses a proto is invisible: the client simply has no client for that
	 * service. `ondewo/vtsi/logs.proto` (API 8.3.0) is the reason this spec exists.
	 */
	itWithApi('generates a message stub for every ondewo proto of the pinned api', (): void => {
		const missing: string[] = pinnedOndewoProtos()
			.map((proto: string): string => `api/${stubBaseForProto(proto)}${MESSAGE_STUB_SUFFIX}`)
			.filter((stub: string): boolean => !fs.existsSync(path.join(REPO_ROOT, stub)));
		expect(missing).toEqual([]);
	});

	/**
	 * `.pbconf.ts` / `.pbsc.ts` are emitted only for a proto that declares a `service`; those are
	 * the injectable gRPC clients, so a missing one means the service cannot be called at all.
	 */
	itWithApi('generates service clients for every ondewo proto that declares a service', (): void => {
		const missing: string[] = [];
		for (const proto of pinnedOndewoProtos()) {
			const source: string = fs.readFileSync(path.join(API_SUBMODULE, proto), 'utf8');
			if (!/^service\s/m.test(source)) {
				continue;
			}
			for (const suffix of SERVICE_STUB_SUFFIXES) {
				const stub: string = `api/${stubBaseForProto(proto)}${suffix}`;
				if (!fs.existsSync(path.join(REPO_ROOT, stub))) {
					missing.push(stub);
				}
			}
		}
		expect(missing).toEqual([]);
	});

	/** The barrel is what consumers import through; a stub it forgets is unreachable. */
	it('exports every generated stub from public-api.ts', (): void => {
		const barrel: string = fs.readFileSync(PUBLIC_API_TS, 'utf8');
		const exported: Set<string> = new Set<string>();
		const pattern: RegExp = /from\s+'\.\/(.+?)';/g;
		let matched: RegExpExecArray | null = pattern.exec(barrel);
		while (matched !== null) {
			exported.add(matched[1]);
			matched = pattern.exec(barrel);
		}
		const missing: string[] = findFiles(API_DIR, ['.ts'])
			.map((relative: string): string => `api/${relative.replace(/\.ts$/, '')}`)
			.filter((module: string): boolean => !exported.has(module));
		expect(missing).toEqual([]);
	});

	/**
	 * The reverse direction: a barrel left over from a previous API exports files that are gone.
	 *
	 * A barrel entry is either a single module (`./api/....pb`) or a directory with an
	 * `index.ts` (`./src/auth`, the hand-written surface) — both spellings must resolve.
	 */
	it('exports no stub that does not exist on disk', (): void => {
		const barrel: string = fs.readFileSync(PUBLIC_API_TS, 'utf8');
		const dangling: string[] = [];
		const pattern: RegExp = /from\s+'\.\/(.+?)';/g;
		let matched: RegExpExecArray | null = pattern.exec(barrel);
		while (matched !== null) {
			const barrelEntry: string = matched[1];
			const resolves: boolean =
				fs.existsSync(path.join(REPO_ROOT, `${barrelEntry}.ts`)) ||
				fs.existsSync(path.join(REPO_ROOT, barrelEntry, 'index.ts'));
			if (!resolves) {
				dangling.push(barrelEntry);
			}
			matched = pattern.exec(barrel);
		}
		expect(dangling).toEqual([]);
	});
});

describe('the hand-written auth surface survives the codegen', (): void => {
	/**
	 * The defect this pins, which cost the whole 8.4.0 angular release: the auth sources used to
	 * live in `src/lib/auth`. `lib` is ng-packagr's `dest`, and ng-packagr deletes `dest`
	 * recursively before it compiles anything (`package.transform.js`: `rmdir(dest, { recursive:
	 * true })`). Inside the codegen container the barrel generator saw `lib/auth/index.ts` and
	 * emitted `export * from './lib/auth';`, then ng-packagr deleted the directory and tsc failed
	 * the entry point with `TS2307: Cannot find module './lib/auth'`. Nothing here survives on a
	 * developer machine either — the mount is copied into the image first — so a local build
	 * cannot disagree with a release build about this.
	 *
	 * `dest` is read from the compiler's own default `ng-package.json` (this repo ships no
	 * `src/ng-package.json`, so that default is what the container uses) rather than hard-coded,
	 * so the assertion follows the compiler if it ever moves the output directory.
	 */
	itWithCompiler('keeps the auth barrel out of the directory ng-packagr deletes', (): void => {
		const ngPackage: Record<string, unknown> = readJson(
			path.join(COMPILER_SUBMODULE, 'angular', 'image-data', 'default-lib-files', 'ng-package.json')
		);
		const destroyed: string = path.join(REPO_ROOT, 'src', ngPackage.dest as string);
		const barrel: string = path.join(REPO_ROOT, 'src', 'auth', 'index.ts');
		expect(fs.existsSync(barrel)).toBe(true);
		expect(path.relative(destroyed, barrel).startsWith('..')).toBe(true);
	});

	/**
	 * The property the move exists to protect: the auth API is part of the published package.
	 * Asserted against the packaging output rather than the sources, because being compiled is
	 * exactly what was missing — ng-packagr rolls the entry point's transitive closure into
	 * `index.d.ts`, so a symbol absent from there is unimportable by a consumer however complete
	 * the sources are. `npm/` exists only after a local `make build`.
	 */
	itWithBuildOutput('ships the auth surface in the packaged typings', (): void => {
		const typings: string = fs.readFileSync(path.join(NPM_PUBLISH_DIR, 'index.d.ts'), 'utf8');
		const missing: string[] = [
			'provideOndewoVtsiAuth',
			'AuthGrpcInterceptor',
			'authHttpInterceptor',
			'KeycloakTokenProvider',
			'TOKEN_PROVIDER'
		].filter((symbol: string): boolean => !typings.includes(symbol));
		expect(missing).toEqual([]);
	});
});

/**
 * Every path an npm manifest advertises — `module`, `typings`, and each condition of each
 * `exports` entry — that does not resolve to a file inside the package.
 *
 * A condition pointing at a missing file is invisible to a bundler that never selects it: the
 * 8.1.0 release of this package declared `esm2022` and `esm` conditions targeting an `esm2022/`
 * directory it did not ship, and resolution survived only because every consumer fell through to
 * `default`. A resolver that does select `esm` cannot load the package at all.
 *
 * @param manifest a parsed package.json
 * @param packageRoot directory the manifest's relative paths are resolved against
 * @returns the unresolvable targets, in declaration order (duplicated if declared twice)
 */
function unresolvedManifestTargets(manifest: Record<string, unknown>, packageRoot: string): string[] {
	const advertised: string[] = [manifest.module as string, manifest.typings as string];
	const exportsMap: Record<string, Record<string, string>> = manifest.exports as Record<string, Record<string, string>>;
	for (const entry of Object.values(exportsMap)) {
		advertised.push(...Object.values(entry));
	}
	return advertised.filter((target: string): boolean => !fs.existsSync(path.join(packageRoot, target)));
}

describe('published package layout', (): void => {
	/**
	 * The interrupted regeneration deleted the manifest and never wrote it back; committing that
	 * state would publish a package with no manifest at all.
	 */
	it('ships a root package.json naming the library', (): void => {
		const manifest: Record<string, unknown> = readJson(path.join(REPO_ROOT, 'package.json'));
		expect(manifest.name).toBe('@ondewo/vtsi-client-angular');
	});

	/** `module`, `typings` and every `exports` target must resolve to a file that exists. */
	it('resolves every path the manifest advertises', (): void => {
		expect(unresolvedManifestTargets(readJson(path.join(REPO_ROOT, 'package.json')), REPO_ROOT)).toEqual([]);
	});

	/**
	 * The regression this pins: the exports map released in 8.1.0. It is reproduced literally
	 * rather than read from git, so the check is proven to catch the defect without the suite
	 * needing a repository.
	 */
	it('flags the 8.1.0 exports map, which advertised an esm2022 directory the package never shipped', (): void => {
		const released810: Record<string, unknown> = {
			module: 'fesm2022/ondewo-vtsi-client-angular.mjs',
			typings: 'index.d.ts',
			exports: {
				'./package.json': { default: './package.json' },
				'.': {
					types: './index.d.ts',
					esm2022: './esm2022/ondewo-vtsi-client-angular.mjs',
					esm: './esm2022/ondewo-vtsi-client-angular.mjs',
					default: './fesm2022/ondewo-vtsi-client-angular.mjs'
				}
			}
		};
		expect(unresolvedManifestTargets(released810, REPO_ROOT)).toEqual([
			'./esm2022/ondewo-vtsi-client-angular.mjs',
			'./esm2022/ondewo-vtsi-client-angular.mjs'
		]);
	});

	/**
	 * The manifest a consumer installs is generated by the packaging step, not hand-written, so
	 * the export map has to be correct where it is produced. `npm/` is the publish folder the
	 * codegen container writes and is not tracked, so this runs only after a local build.
	 */
	itWithBuildOutput('generates a publishable manifest whose every advertised path resolves', (): void => {
		expect(unresolvedManifestTargets(readJson(path.join(NPM_PUBLISH_DIR, 'package.json')), NPM_PUBLISH_DIR)).toEqual(
			[]
		);
	});

	/** The generated manifest and the committed one must agree on what the package exports. */
	itWithBuildOutput('generates the same export map the committed manifest ships', (): void => {
		expect(readJson(path.join(NPM_PUBLISH_DIR, 'package.json')).exports).toEqual(
			readJson(path.join(REPO_ROOT, 'package.json')).exports
		);
	});

	/**
	 * A `.d.ts.map` whose `.d.ts` is gone is a leftover of an older packaging step. It is dead
	 * weight in the tarball, and `make release` staging it by name is what turns it into a build
	 * failure once the file it maps really disappears.
	 */
	it('ships no declaration map without its declaration file', (): void => {
		const dangling: string[] = fs
			.readdirSync(REPO_ROOT)
			.filter((entry: string): boolean => entry.endsWith('.d.ts.map'))
			.filter((entry: string): boolean => !fs.existsSync(path.join(REPO_ROOT, entry.replace(/\.map$/, ''))));
		expect(dangling).toEqual([]);
	});

	/** ng-packagr's flat ESM bundle and its source map are both part of the published package. */
	it('ships the fesm2022 bundle and its source map', (): void => {
		expect(findFiles(path.join(REPO_ROOT, 'fesm2022'), ['.mjs', '.mjs.map'])).toEqual([
			'ondewo-vtsi-client-angular.mjs',
			'ondewo-vtsi-client-angular.mjs.map'
		]);
	});
});

/**
 * The paths a Makefile recipe stages with `git add`, split by whether make tolerates the command
 * failing. A recipe line prefixed with `-` is allowed to fail; an unprefixed one aborts the whole
 * target, so the path it names must exist.
 *
 * `${VAR}` operands are expanded from the same Makefile.
 *
 * @param makefilePath absolute path of the Makefile to read
 * @param target the target whose recipe is inspected
 * @returns the staged paths, separated into required and optional
 */
function stagedPaths(makefilePath: string, target: string): { required: string[]; optional: string[] } {
	const required: string[] = [];
	const optional: string[] = [];
	for (const line of readMakefileRecipe(makefilePath, target).split('\n')) {
		const matched: RegExpExecArray | null = /^\t(-?)git add (.+)$/.exec(line);
		if (matched === null) {
			continue;
		}
		const operand: string = matched[2]
			.trim()
			.replace(/\$\{([A-Z_]+)\}/g, (_whole: string, name: string): string => readMakefileVariable(makefilePath, name));
		if (matched[1] === '-') {
			optional.push(operand);
		} else {
			required.push(operand);
		}
	}
	return { required, optional };
}

describe('the release target stages what it publishes', (): void => {
	/**
	 * `git add` on a path that does not exist fails with `pathspec ... did not match any files`,
	 * and an unprefixed recipe line aborts `make release` on the spot — after `make build` has
	 * already run. `public-api.d.ts` is the concrete case: the codegen container deletes it
	 * (`rm -rf public-api.d.ts` in compile-proto-2-angular.sh) and emits `public-api.ts` instead.
	 */
	it('stages no path that does not exist', (): void => {
		const missing: string[] = stagedPaths(MAKEFILE, 'release').required.filter(
			(staged: string): boolean => !fs.existsSync(path.join(REPO_ROOT, staged))
		);
		expect(missing).toEqual([]);
	});

	/**
	 * The mirror image: a generated artifact the release forgets to stage is published to npm but
	 * never committed, so the git tag and the tarball disagree. Everything the manifest advertises
	 * has to be staged, either directly or through a directory that contains it.
	 */
	it('stages every packaging artifact the manifest advertises', (): void => {
		const manifest: Record<string, unknown> = readJson(path.join(REPO_ROOT, 'package.json'));
		const staged: string[] = stagedPaths(MAKEFILE, 'release').required;
		const advertised: string[] = [manifest.module as string, manifest.typings as string, 'public-api.ts'];
		const unstaged: string[] = advertised.filter(
			(artifact: string): boolean =>
				!staged.some((stagedPath: string): boolean => artifact === stagedPath || artifact.startsWith(`${stagedPath}/`))
		);
		expect(unstaged).toEqual([]);
	});
});

describe('the formatter leaves generated output alone', (): void => {
	/**
	 * `.husky/pre-commit` runs `make prettier PRETTIER_WRITE=-w`, i.e. the formatter writes on
	 * every commit. Anything it is not told to ignore is rewritten — including `index.d.ts`, the
	 * 3.8 MB rollup of typings ng-packagr emits. Reformatting it detaches the committed artifact
	 * from what the codegen produces, so the next regeneration comes back as a whole-file diff,
	 * and `make prettier` (the check-mode gate) is red on any machine that has run the tests.
	 */
	it('ignores every artifact the codegen and the test run produce', (): void => {
		const entries: Set<string> = new Set<string>(
			fs
				.readFileSync(path.join(REPO_ROOT, '.prettierignore'), 'utf8')
				.split('\n')
				.map((line: string): string => line.trim().replace(/\/$/, ''))
				.filter((line: string): boolean => line !== '' && !line.startsWith('#'))
		);
		const generated: string[] = ['api', 'fesm2022', 'npm', 'index.d.ts', 'public-api.ts', 'coverage'];
		expect(generated.filter((artifact: string): boolean => !entries.has(artifact))).toEqual([]);
	});
});
