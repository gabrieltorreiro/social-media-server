module.exports = {
    env: {
        commonjs: true,
        es2021: true,
        node: true
    },
    extends: [
        "standard",
        "plugin:react/recommended"
    ],
    plugins: [
        "react"
    ],
    parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: {
            jsx: true
        }
    },
    rules: {
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        indent: ["error", 4],
        semi: ["error", "always"],
        quotes: ["error", "double"]
    },
    settings: {
        react: {
            version: "detect"
        }
    }
};
