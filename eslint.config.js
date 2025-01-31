import eslintPluginAstro from "eslint-plugin-astro";
import astroEslintParser from "astro-eslint-parser";
import format from "eslint-plugin-format";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import typescriptParser from "@typescript-eslint/parser";

export default [
  // add more generic rule sets here, such as:
  js.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      // override/add rules settings here, such as:
      // "astro/no-set-html-directive": "error"
      "@typescript-eslint/no-require-imports": [
        "error",
        {
          allow: ["^daisyui*"],
        },
      ],
    },
  },
  {
    files: ["**/*.astro"],
    languageOptions: {
      parser: astroEslintParser,
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
    },
  },
  {
    files: ["**/*.{js,jsx,astro}"],
    rules: {
      "no-mixed-spaces-and-tabs": ["error", "smart-tabs"],
    },
  },
  {
    // Define the configuration for `<script>` tag.
    // Script in `<script>` is assigned a virtual file name with the `.js` extension.
    files: ["**/*.{ts,tsx}", "**/*.astro/*.js"],
    languageOptions: {
      parser: typescriptParser,
    },
    rules: {
      // Note: you must disable the base rule as it can report incorrect errors
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/no-non-null-assertion": "off",
    },
  },
  // use Prettier to format CSS
  {
    files: ["**/*.css"],
    languageOptions: {
      parser: format.parserPlain,
    },
    plugins: {
      format,
    },
    rules: {
      "format/prettier": ["error", { parser: "css", tabWidth: 2 }],
    },
  },

  // use dprint to format TOML
  {
    files: ["**/*.toml"],
    languageOptions: {
      parser: format.parserPlain,
    },
    plugins: {
      format,
    },
    rules: {
      "format/dprint": [
        "error",
        { language: "toml", languageOptions: { indentWidth: 2 } },
      ],
    },
  },
  // ignores
  {
    ignores: [
      "dist",
      "node_modules",
      ".github",
      "types.generated.d.ts",
      ".astro",
      ".vercel",
      "/paraglide",
      "src/utils/transformers.js",
      "src/pages/rss.xml.ts",
    ],
  },
];
