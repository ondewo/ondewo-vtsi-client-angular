import { existsSync, readFileSync } from 'fs';
import { dirname, join } from 'path';

/**
 * The 9.5.0 surface of ondewo-vtsi-api (the IvrMenus service and the warm transfer intro) and the
 * nlu-api it vendors (PrepareWarmTransferIntro) must reach the published typings. A regeneration
 * against a stale api checkout builds and passes every other spec, so this one names the symbols.
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
const TYPINGS: string = String(readFileSync(join(REPO_ROOT, 'index.d.ts'), 'utf8'));

/** The twelve RPCs of the IvrMenus service, as ngx-grpc names its client methods. */
const IVR_MENUS_METHODS: string[] = [
	'createIvrMenu',
	'getIvrMenu',
	'updateIvrMenu',
	'deleteIvrMenu',
	'listIvrMenus',
	'validateIvrMenu',
	'publishIvrMenu',
	'cloneIvrMenu',
	'listIvrMenuRevisions',
	'testIvrMenu',
	'getIvrMenuTest',
	'getIvrMenuDialplan'
];

/** Messages and enums added by ondewo-vtsi-api 9.5.0 and the nlu-api it vendors. */
const NEW_DECLARATIONS: string[] = [
	'class IvrMenusClient',
	'class IvrMenuTest',
	'enum IvrMenuTestState',
	'class WarmTransferConfig',
	'class WarmIntroRecord',
	'enum WarmIntroDecision',
	'class VtsiProjectFeatureAvailability',
	'class TransferTargetDirectoryItem',
	'class PrepareWarmTransferIntroRequest'
];

describe('ondewo-vtsi-api 9.5.0 in the public API (index.d.ts)', (): void => {
	it.each(NEW_DECLARATIONS)('declares %s', (declaration: string): void => {
		expect(TYPINGS).toMatch(new RegExp(`declare ${declaration}\\b`));
	});

	it.each(IVR_MENUS_METHODS)('IvrMenusClient has %s', (method: string): void => {
		const start: number = TYPINGS.indexOf('declare class IvrMenusClient');
		expect(start).toBeGreaterThanOrEqual(0);
		const end: number = TYPINGS.indexOf('\ndeclare ', start + 1);
		expect(TYPINGS.slice(start, end)).toMatch(new RegExp(`\\b${method}\\s*\\(`));
	});

	it('IvrNodeType has GOTO_MENU', (): void => {
		expect(TYPINGS).toMatch(/GOTO_MENU\s*=\s*6/);
	});
});
