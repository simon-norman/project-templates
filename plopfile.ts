import { NodePlopAPI } from "plop";
import {
	biomeJson,
	newProjectAction,
	packageJson,
	tsconfig,
	vsCode,
} from "src/helpers/actions/add-actions";
import { nameInput } from "src/helpers/prompts/base-prompts";
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

	plop.setGenerator("basic-pnpm-typescript-project", {
		description: "create basic pnpm typescript project",
		prompts: [nameInput],
		actions: [
			newProjectAction(packageJson),
			newProjectAction(tsconfig),
			newProjectAction(vsCode),
			newProjectAction(biomeJson),
			(answers) => {
				return runShell(
					`sh ${__dirname}/src/templates/base-typescript/pnpm-base-project-setup.sh ${answers.name}`,
				)
					.then(() => "success")
					.catch((e) => `failed ${e.message}`);
			},
		],
	});

	plop.setGenerator("add-ts", {
		description:
			"add core shared resources (e.g. eslint) plus config to project",
		prompts: [nameInput],
		actions: [packageJson, biomeJson, tsconfig],
	});

	plop.setGenerator("add-base-vscode", {
		description: "add vscode config to current project",
		prompts: [],
		actions: [vsCode],
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
