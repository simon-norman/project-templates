import { exec } from "child_process";
import { NodePlopAPI } from "plop";

export const addPlopShell = (plop: NodePlopAPI) => {
	plop.setActionType("shell", (_, config) => {
		return runShell(config.command)
			.then(() => "success")
			.catch((e) => `failed ${e.message}`);
	});
};

export const runShell = async (command: string) => {
	return new Promise((resolve, reject) => {
		exec(command, (error, stdout, stderr) => {
			if (error) reject(error);
			resolve(stdout ? stdout : stderr);
		});
	});
};
