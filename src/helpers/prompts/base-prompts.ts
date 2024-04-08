export const nameInput = {
	type: "input",
	name: "name",
	message: "Project name (lowercase, hyphens not spaces, e.g. beer-api)",
};

export const nameOfInitialApplication = {
	type: "input",
	name: "serviceName",
	message:
		"Name of the first application you want to add to the monorepo (e.g. location-api, order-listener etc.)",
};

export const includeDatabase = {
	type: "confirm",
	name: "includeDatabase",
	default: true,
	message: "Will this project include a database?",
};

export const includeApi = {
	type: "confirm",
	name: "includeApi",
	default: false,
	message: "Will this project include an api?",
};

export const isApiPrivate = {
	type: "confirm",
	name: "isApiPrivate",
	default: true,
	message: "Will the api be private (IE not exposed publically)?",
	// @ts-expect-error
	when: (answers) => answers.includeFeature,
};
