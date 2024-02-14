module.exports =  {
    "env": {
        "browser": true,
        "es2021": true,
        "jest": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended"
    ],
    ignorePatterns: [
        'build', ".eslintrc.js"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "parser": '@typescript-eslint/parser',
        "ecmaVersion": "latest",
        "sourceType": "module",
        "tsconfigRootDir": __dirname
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "@typescript-eslint/quotes": ["warn", "double", { "avoidEscape": true }],
        "react/react-in-jsx-scope": "off",
        "@typescript-eslint/semi": [2, "always"],
        "@typescript-eslint/prefer-nullish-coalescing": [0],
        "@typescript-eslint/strict-boolean-expressions": [0],
        "@typescript-eslint/no-floating-promises": [1],
        "@typescript-eslint/indent": [1, 4],
        "indent": [1, 4],
        "@typescript-eslint/no-unused-vars": "warn",
        "@typescript-eslint/naming-convention": [0],
        "eol-last": [0],
        "no-trailing-spaces": [1],
        "react/jsx-filename-extension": [2, { "extensions": [".js", ".jsx", ".ts", ".tsx"] }],
        "import/prefer-default-export": "off",
        "react/require-default-props": "off",
        "no-shadow": "off",
        "@typescript-eslint/explicit-function-return-type": "warn",
        "@typescript-eslint/promise-function-async": "warn",
        "@typescript-eslint/no-misused-promises": "warn",
        "@typescript-eslint/no-non-null-assertion": "off",
        "import/extensions": "off"
    }
}


