import { NodePlopAPI } from "plop";
import { addPlopShell } from "./src/helpers/run-shell";

export default function (plop: NodePlopAPI) {
	addPlopShell(plop);
	// plop generator code
	plop.setGenerator("basic-typescript-project", {
		description:
			"add core shared resources (e.g. eslint) plus config to project",
		prompts: [
			{
				type: "input",
				name: "name",
				message: "Project name (lowercase, hyphens not spaces, e.g. beer-api)",
			},
		],
		actions: [
			{
				type: "add",
				path: "{{name}}/package.json",
				templateFile: "src/templates/base-typescript/base-package-json.hbs",
			},
			{
				type: "add",
				path: "{{name}}/biome.json",
				templateFile: "src/templates/base-typescript/base-biome-json.hbs",
			},
			{
				type: "add",
				path: "{{name}}/tsconfig.json",
				templateFile: "src/templates/base-typescript/base-tsconfig.hbs",
			},
			{
				type: "shell",
				// @ts-expect-error
				command: "sh ./templates/base-typescript/base-ts-install.sh",
			},
		],
	});

	plop.setGenerator("add-ts", {
		description:
			"add core shared resources (e.g. eslint) plus config to project",
		prompts: [
			{
				type: "input",
				name: "name",
				message: "Project name (lowercase, hyphens not spaces, e.g. beer-api)",
			},
		],
		actions: [
			{
				type: "add",
				path: "package.json",
				templateFile: "src/templates/base-typescript/base-package-json.hbs",
			},
			{
				type: "add",
				path: "biome.json",
				templateFile: "src/templates/base-typescript/base-biome-json.hbs",
			},
			{
				type: "add",
				path: "tsconfig.json",
				templateFile: "src/templates/base-typescript/base-tsconfig.hbs",
			},
		],
	});

	plop.setGenerator("add-base-vscode", {
		description: "add vscode config to current project",
		prompts: [],
		actions: [
			{
				type: "add",
				path: ".vscode/settings.json",
				templateFile: "src/templates/base/vscodesettings.hbs",
			},
		],
	});

	plop.setGenerator("add-base-tsconfig", {
		description: "add biome config to current project",
		prompts: [],
		actions: [
			{
				type: "add",
				path: "biome.json",
				templateFile: "src/templates/base-typescript/base-biome-json.hbs",
			},
		],
	});

	plop.setGenerator("add-tsconfig", {
		description: "add ts config to current project",
		prompts: [],
		actions: [
			{
				type: "add",
				path: "tsconfig.json",
				templateFile: "src/templates/base-typescript/base-tsconfig.hbs",
			},
		],
	});
}

// typescript
// tsconfig.json, package.json, eslint, prettier - anything else?
// hmmmm but is this that useful?
// in the case of shared infra - it's a pretty specific structure as it is
// it is nice when first scaffolding something, like building out a project, to have the basics in
// then all the other projects can sit on top of that
// and you can have the base and then use plop to modify by adding stuff in
