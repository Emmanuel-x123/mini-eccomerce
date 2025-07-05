import next from "@next/eslint-plugin-next";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

export default [
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
      "@next/next": next,
    },
    rules: {
      // Next.js rules
      ...next.configs.recommended.rules,
      ...next.configs["core-web-vitals"].rules,
      
      // TypeScript rules
      ...tseslint.configs.recommended.rules,
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { 
          "argsIgnorePattern": "^_",
          "varsIgnorePattern": "^_",
          "caughtErrorsIgnorePattern": "^_"
        }
      ],
      "@typescript-eslint/no-empty-object-type": "off",
      
      // Custom rules
      "react/no-unknown-property": ["error", { "ignore": ["css"] }],
    },
  },
];