import { AddActionConfig } from "plop";

export const index: AddActionConfig = {
	type: "add",
	path: "src/index.ts",
	templateFile: "src/templates/app/api/folders/index.hbs",
};

export const helpers: AddActionConfig = {
	type: "add",
	path: "src/helpers/helper-name.ts",
	templateFile: "src/templates/app/api/folders/helpers/helper.hbs",
};

export const services: AddActionConfig = {
	type: "add",
	path: "src/services/service-name.ts",
	templateFile: "src/templates/app/api/folders/services/service-name.hbs",
};

export const routes: AddActionConfig = {
	type: "add",
	path: "src/routes/route-name.ts",
	templateFile: "src/templates/app/api/folders/routes/route-name/route.hbs",
};

export const routeValidation: AddActionConfig = {
	type: "add",
	path: "src/routes/validation.ts",
	templateFile:
		"src/templates/app/api/folders/routes/route-name/validation.hbs",
};
