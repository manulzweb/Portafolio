import js from "@eslint/js";
import globals from "globals";

export default [
    { ignores: ["src/js/vendor/**", "node_modules/**", "dist/**"] },
    js.configs.recommended,
    {
        files: ["src/js/**/*.js", "*.config.js"],
        languageOptions: {
            ecmaVersion: 2023,
            sourceType: "module",
            globals: globals.browser,
        },
        rules: {
            "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
        },
    },
];
