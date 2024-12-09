import globals from "globals";
import pluginJs from "@eslint/js";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.js"],
    languageOptions: { sourceType: "module" }
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        axios: "readonly",
        jest: "readonly",
        describe: "readonly",
        it: "readonly",
        expect: "readonly",
        beforeEach: "readonly"
      }
    }
  },
  pluginJs.configs.recommended,
];