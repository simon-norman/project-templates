import { AddActionConfig } from "plop";

export const newProjectAction = (action: AddActionConfig) => {
	return {
		...action,
		path: `{{name}}/${action.path}`,
	};
};

export const vsCode: AddActionConfig = {
	type: "add",
	path: ".vscode/settings.json",
	templateFile: "src/templates/base/vscodesettings.hbs",
};

export const biomeJson: AddActionConfig = {
	type: "add",
	path: "biome.json",
	templateFile: "src/templates/base-typescript/base-biome-json.hbs",
};

export const tsconfig: AddActionConfig = {
	type: "add",
	path: "tsconfig.json",
	templateFile: "src/templates/base-typescript/base-tsconfig.hbs",
};

export const packageJson: AddActionConfig = {
	type: "add",
	path: "package.json",
	templateFile: "src/templates/base-typescript/base-package-json.hbs",
};

export const gitIgnore: AddActionConfig = {
	type: "add",
	path: ".gitignore",
	templateFile: "src/templates/base-typescript/base-gitignore.hbs",
};
