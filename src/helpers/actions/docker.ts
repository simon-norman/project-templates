import { AddActionConfig } from "plop";

export const dockerInstallMonorepo: AddActionConfig = {
	type: "add",
	path: "Dockerfile.install",
	templateFile: "src/templates/ci-cd/docker/monorepo/docker-install.hbs",
};

export const dockerComposeMonorepo: AddActionConfig = {
	type: "add",
	path: "docker-compose.yml",
	templateFile: "src/templates/ci-cd/docker/monorepo/docker-compose.hbs",
};

export const dockerAppMonorepo = (serviceName: string): AddActionConfig => ({
	type: "add",
	path: `applications/${serviceName}/Dockerfile`,
	templateFile: "src/templates/ci-cd/docker/monorepo/docker-app.hbs",
});
