import { ActionConfig, NodePlopAPI } from "plop";
import {
	gitIgnore,
	newProjectAction,
	vscodeMonorepoWorkspace,
} from "../actions/add-actions";
import { addMonorepoGithubToNewProject } from "../actions/ci-cd-github";
import { addMonorepoAppActionsToNewProject } from "../actions/monorepo-application-code";
import {
	includeApi,
	includeDatabase,
	isApiPrivate,
	nameInput,
	nameOfInitialApplication,
} from "../prompts/base-prompts";

export const generateMonorepoProject = (plop: NodePlopAPI) => {
	plop.setGenerator("monorepo-project", {
		description: "create monorepo project",
		prompts: [
			nameInput,
			nameOfInitialApplication,
			includeDatabase,
			includeApi,
			isApiPrivate,
		],
		actions: (answers) => {
			const allActions: ActionConfig[] = [];

			if (!answers) return allActions;

			allActions.push(
				...addMonorepoGithubToNewProject(answers.serviceName, answers.name),
			);

			allActions.push(newProjectAction(vscodeMonorepoWorkspace(answers.name)));

			allActions.push(newProjectAction(gitIgnore));

			allActions.push(
				...addMonorepoAppActionsToNewProject(
					answers.serviceName,
					answers.addApi,
				),
			);

			return allActions;
		},
	});
};
