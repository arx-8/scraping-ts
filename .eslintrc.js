// @ts-check
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

/**
 * @type {import("eslint").Linter.Config}
 */
const config = {
  env: {
    node: true,
  },
  extends: [
    "standard",
    "eslint:recommended",
    "plugin:promise/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:typescript-sort-keys/recommended",
    "prettier",
  ],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "@typescript-eslint/explicit-function-return-type": [
          2,
          {
            allowExpressions: true,
          },
        ],
        "@typescript-eslint/explicit-module-boundary-types": 2,
      },
    },
    {
      extends: ["plugin:jest/all"],
      files: ["*.test.ts", "*.test.tsx"],
    },
  ],
  parserOptions: {
    project: "./tsconfig.json",
  },
  plugins: ["sort-destructure-keys", "sort-keys-fix", "typescript-sort-keys"],
  rules: {
    "@typescript-eslint/consistent-type-definitions": [2, "type"],
    "@typescript-eslint/naming-convention": [
      2,
      {
        // "type" naming should be PascalCase
        custom: {
          match: false,
          regex: "send|start|find",
        },
        format: ["PascalCase"],
        selector: "typeAlias",
      },
    ],
    "@typescript-eslint/no-explicit-any": 2,
    "@typescript-eslint/no-misused-promises": 2,
    "@typescript-eslint/no-useless-constructor": 2,
    "@typescript-eslint/prefer-readonly": 2,
    "@typescript-eslint/require-await": 2,
    "@typescript-eslint/strict-boolean-expressions": [
      2,
      {
        allowAny: false,
        allowNullableBoolean: false,
        allowNullableNumber: false,
        allowNullableObject: false,
        allowNullableString: false,
        allowNumber: false,
        allowString: false,
      },
    ],
    camelcase: 0,
    "dot-notation": 0,
    "import/no-default-export": 2,
    "no-console": 0,
    "no-restricted-syntax": [
      2,
      {
        message:
          "Do not use `enum`. Use `Plain Object` or `Literal Types` instead.",
        selector: "TSEnumDeclaration",
      },
    ],
    // no-useless-constructor: note you must disable the base rule as it can report incorrect errors
    "no-useless-constructor": 0,
    "prefer-template": 2,
    "require-await": 0,
    "sort-destructure-keys/sort-destructure-keys": 2,
    "sort-keys-fix/sort-keys-fix": 2,
    yoda: [2, "never", { onlyEquality: true }],
  },
}

module.exports = config
