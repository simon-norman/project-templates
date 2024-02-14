import path from "node:path";

import minimist from "minimist";
import { Plop, run } from "plop";
const args = process.argv.slice(2);
const argv = minimist(args);

Plop.prepare(
	{
		cwd: argv.cwd,
		configPath: path.join(__dirname, "plopfile.ts"),
		preload: argv.preload || [],
		completion: argv.completion,
	},
	(env) =>
		Plop.execute(env, (env) => {
			const options = {
				...env,
				dest: process.cwd(), // this will make the destination path to be based on the cwd when calling the wrapper
			};
			return run(options, undefined, true);
		}),
);
