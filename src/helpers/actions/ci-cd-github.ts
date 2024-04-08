import { AddActionConfig } from "plop";
import { newProjectActionWithName } from "./add-actions";

export const monorepoGithubInstallDeps: AddActionConfig = {
	type: "add",
	path: ".github/workflows/install-dependencies.yml",
	templateFile: "src/templates/ci-cd/github/github-install-dependencies.hbs",
};

export const monorepoGithubDeploy = (
	appName: string,
	environment: string,
): AddActionConfig => ({
	type: "add",
	path: `.github/workflows/deploy-${appName}.${environment}.yml`,
	templateFile: "src/templates/ci-cd/github/github-deploy-application.hbs",
	data: {
		projectEnv: environment,
	},
});

export const monorepoGithubProdDeploy = (appName: string): AddActionConfig => {
	return {
		type: "add",
		path: `.github/workflows/deploy-${appName}.production.yml`,
		data: {
			projectEnv: "production",
		},
		templateFile:
			"src/templates/ci-cd/github/github-deploy-application-production.hbs",
	};
};

export const addMonoRepoGithubActions = (appName: string) => {
	return [
		monorepoGithubDeploy(appName, "dev-1"),
		monorepoGithubInstallDeps,
		monorepoGithubDeploy(appName, "dev-2"),
		monorepoGithubDeploy(appName, "staging"),
		monorepoGithubProdDeploy(appName),
	];
};

export const addMonorepoGithubToNewProject = (
	appName: string,
	projectName: string,
) => {
	return addMonoRepoGithubActions(appName).map((action) =>
		newProjectActionWithName(action, projectName),
	);
};
