import { NodePlopAPI } from "plop";
import {
	biomeJson,
	gitIgnore,
	newProjectAction,
	packageJson,
	tsconfig,
	vsCode,
	vscodeMonorepoWorkspace,
} from "src/helpers/actions/add-actions";
import { generateMonorepoProject } from "src/helpers/generators/generate-monorepo-project";
import { nameInput } from "src/helpers/prompts/base-prompts";
import { setVsCodeSettingsPartial } from "src/templates/base/vscode-settings";
import { addPlopShell, runShell } from "./src/helpers/run-shell";

export default function (plop: NodePlopAPI) {
	addPlopShell(plop);

	// plop generator code
	plop.setGenerator("basic-bun-typescript-project", {
		description: "create basic bun typescript project",
		prompts: [nameInput],
		actions: [
			newProjectAction(packageJson),
			newProjectAction(tsconfig),
			newProjectAction(vsCode),
			newProjectAction(biomeJson),
			(answers) => {
				return runShell(
					`sh ${__dirname}/src/templates/base-typescript/bun-base-project-setup.sh ${answers.name}`,
				)
					.then(() => "success")
					.catch((e) => `failed ${e.message}`);
			},
		],
	});

	generateMonorepoProject(plop);

	plop.setGenerator("add-basic-setup", {
		description:
			"add core shared resources (e.g. eslint) plus config to project",
		prompts: [nameInput],
		actions: [
			packageJson,
			biomeJson,
			vsCode,
			tsconfig,
			() => {
				return runShell(
					`sh ${__dirname}/src/templates/base-typescript/bun-base-project-setup.sh ./`,
				)
					.then(() => "success")
					.catch((e) => `failed ${e.message}`);
			},
		],
	});

	plop.setGenerator("add-base-ts-gitignore", {
		description: "add ts gitignore to current project",
		prompts: [],
		actions: [gitIgnore],
	});

	plop.setGenerator("add-base-package-json", {
		description: "add vscode config to current project",
		prompts: [nameInput],
		actions: [packageJson],
	});

	setVsCodeSettingsPartial(plop);

	plop.setGenerator("add-base-vscode", {
		description: "add vscode config to current project",
		prompts: [],
		actions: [vsCode],
	});

	plop.setGenerator("add-vscode-monorepo-workspace", {
		description: "add vscode monorepo workspace to current project",
		prompts: [nameInput],
		actions: (data) => {
			return [vscodeMonorepoWorkspace(data?.name)];
		},
	});

	plop.setGenerator("add-base-biome", {
		description: "add biome config to current project",
		prompts: [],
		actions: [biomeJson],
	});

	plop.setGenerator("add-tsconfig", {
		description: "add ts config to current project",
		prompts: [],
		actions: [tsconfig],
	});
}
