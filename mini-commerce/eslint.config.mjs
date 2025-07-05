import next from "@next/eslint-plugin-next";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import reactPlugin from "eslint-plugin-react";

export default [
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: "./tsconfig.json",
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    plugins: {
      "@typescript-eslint": tseslint,
      "@next/next": next,
      "react": reactPlugin
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
          "varsIgnorePattern": "^_"
        }
      ],
      
      // React rules
      ...reactPlugin.configs["recommended"].rules,
      "react/no-unknown-property": ["error", { "ignore": ["css"] }],
      
      // Custom rules
      "@typescript-eslint/no-empty-object-type": "off" // Disable if too strict
    }
  }
];