import next from "@next/eslint-plugin-next";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import reactPlugin from "eslint-plugin-react";
import globals from "globals";

export default [
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: "./tsconfig.json",
        ecmaFeatures: { jsx: true },
        ecmaVersion: "latest",
        sourceType: "module"
      },
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    settings: {
      react: {
        version: "detect" // Automatically detect React version
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
      ...reactPlugin.configs["jsx-runtime"].rules,
      "react/react-in-jsx-scope": "off", // Disabled for React 17+
      "react/jsx-uses-react": "off", // Disabled for React 17+
      "react/no-unknown-property": ["error", { "ignore": ["css"] }]
    }
  }
];