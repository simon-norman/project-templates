import { NodePlopAPI } from "plop";

export const setVsCodeSettingsPartial = (plop: NodePlopAPI) => {
	plop.setPartial(
		"vscode_settings",
		`{
    "editor.defaultFormatter": "biomejs.biome",
    "editor.formatOnSave": true,
    "editor.codeActionsOnSave": {
      "quickfix.biome": "explicit",
      "source.organizeImports.biome": "explicit"
    },
    "[typescript]": {
      "editor.tabSize": 2
    },
    "[javscript]": {
      "editor.tabSize": 2
    },
    "[python]": {
      "editor.tabSize": 4
    },
    "editor.detectIndentation": false
  }`,
	);
};
