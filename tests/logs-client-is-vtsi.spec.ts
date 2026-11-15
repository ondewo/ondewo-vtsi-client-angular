import { existsSync, readFileSync } from 'fs';
import { dirname, join } from 'path';

/**
 * `LogsClient` and `GRPC_LOGS_CLIENT_SETTINGS` of this library are the ondewo.vtsi.Logs service.
 *
 * ondewo-vtsi-api vendors ondewo-nlu-api, whose logs.proto declares a second `service Logs`. The
 * compiler's barrel binds a name declared by two stubs to the FIRST in sorted order, i.e. to
 * ondewo.nlu, which would replace this client's own LogsClient and leave it unexported. Nothing
 * here imports ondewo/nlu/logs.proto, so the Makefile leaves it out of the codegen
 * (CODEGEN_EXCLUDED_PROTOS); the NLU Logs client ships in @ondewo/nlu-client-angular.
 */

/**
 * @param start the directory to start from.
 * @returns the closest ancestor directory holding the Makefile (the repository root).
 */
function findRepoRoot(start: string): string {
	let dir: string = start;
	while (!existsSync(join(dir, 'Makefile'))) {
		dir = String(dirname(dir));
	}
	return dir;
}

const REPO_ROOT: string = findRepoRoot(String(__dirname));
const TYPINGS: string = String(
	readFileSync(
		join(
			REPO_ROOT,
			(JSON.parse(String(readFileSync(join(REPO_ROOT, 'package.json'), 'utf8'))) as { typings: string }).typings
		),
		'utf8'
	)
);
const PUBLIC_API: string = String(readFileSync(join(REPO_ROOT, 'public-api.ts'), 'utf8'));

describe('LogsClient is the ondewo.vtsi.Logs client', (): void => {
	it('declares exactly one LogsClient, and it serves ondewo.vtsi.Logs', (): void => {
		// ng-packagr >= 22 (proto compiler 5.16.0) declares it inline as `export declare class`.
		expect(TYPINGS.match(/declare class LogsClient\b/g)).toHaveLength(1);
		expect(TYPINGS).toMatch(
			/Service client implementation for ondewo\.vtsi\.Logs\s*\*\/\s*(?:export )?declare class LogsClient\b/
		);
		expect(TYPINGS).not.toContain('/ondewo.nlu.Logs/');
	});

	it('binds no Logs symbol to an nlu stub in the barrel', (): void => {
		expect(PUBLIC_API).not.toContain('./api/ondewo/nlu/logs.');
	});

	it('leaves ondewo/nlu/logs.proto out of the codegen in the Makefile', (): void => {
		const makefile: string = String(readFileSync(join(REPO_ROOT, 'Makefile'), 'utf8'));
		expect(makefile).toMatch(/^CODEGEN_EXCLUDED_PROTOS=.*\bondewo\/nlu\/logs\.proto\b/m);
	});
});
