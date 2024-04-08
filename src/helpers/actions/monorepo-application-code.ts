import { AddActionConfig } from "plop";
import {
	biomeJson,
	newProjectAction,
	packageJson,
	tsconfig,
} from "./add-actions";
import {
	dockerAppMonorepo,
	dockerComposeMonorepo,
	dockerInstallMonorepo,
} from "./docker";
import {
	helpers,
	index,
	routeValidation,
	routes,
	services,
} from "./service-actions";

export const addMonorepoPath = (action: AddActionConfig) => {
	return {
		...action,
		path: `monorepo/${action.path}`,
	};
};

export const addMonorepoApplicationsPath = (
	action: AddActionConfig,
	appName: string,
) => {
	return {
		...action,
		path: `monorepo/applications/${appName}/${action.path}`,
	};
};

export const addMonorepoLibsPath = (
	action: AddActionConfig,
	appName: string,
) => {
	return {
		...action,
		path: `monorepo/libs/${appName}/${action.path}`,
	};
};

export const addMonoRepoAppCodeActions = (
	appName: string,
	includesApi?: boolean,
) => {
	const appPackageJson = {
		...packageJson,
		path: `applications/${appName}/${packageJson.path}`,
	};

	const actions = [
		addMonorepoPath(biomeJson),
		addMonorepoPath(tsconfig),
		addMonorepoPath(packageJson),
		addMonorepoPath(appPackageJson),
		addMonorepoPath(dockerAppMonorepo(appName)),
		addMonorepoPath(dockerComposeMonorepo),
		addMonorepoPath(dockerInstallMonorepo),
		addMonorepoApplicationsPath(index, appName),
		addMonorepoApplicationsPath(helpers, appName),
		addMonorepoApplicationsPath(services, appName),
		addMonorepoLibsPath(index, "features"),
		addMonorepoLibsPath(helpers, "features"),
		addMonorepoLibsPath(services, "features"),
	];

	if (includesApi) {
		actions.push(addMonorepoApplicationsPath(routes, appName));
		actions.push(addMonorepoApplicationsPath(routeValidation, appName));
	}

	return actions;
};

export const addMonorepoAppActionsToNewProject = (
	appName: string,
	includesApi?: boolean,
) => {
	return addMonoRepoAppCodeActions(appName, includesApi).map(newProjectAction);
};
