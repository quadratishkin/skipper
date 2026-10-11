import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import unusedImports from "eslint-plugin-unused-imports";
import importX from "eslint-plugin-import-x"; // ← замена
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
    },
    plugins: {
      "unused-imports": unusedImports,
      "import-x": importX, // ← замена
    },
    rules: {
      // ... неиспользуемые переменные и импорты (без изменений)
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": ["error", { /* ... */ }],
      "unused-imports/no-unused-imports": "error",

      // === Порядок импортов (теперь через import-x) ===
      "import-x/order": [ // ← замена
        "warn",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            ["parent", "sibling", "index"],
          ],
          "newlines-between": "always",
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],

      // === Запрет console.log ===
      "no-console": ["warn", { allow: ["warn", "error"] }],

      // === React ===
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    },
  },
]);