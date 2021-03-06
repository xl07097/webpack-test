module.exports = {
    env: {
        browser: true,
        es6: true
    },
    extends: ["airbnb", "plugin:prettie/recommended"],
    // "eslint:recommended",
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly"
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module"
    },
    plugins: ["vue"],
    rules: {
        // "indent": ["error", 4],
        semi: [0, "always"],
        quotes: ["off", "double"],
        "no-unused-vars": 0,
        "no-console": ["off"],
        "no-undef": ["off"],
        indent: "off"
    }
};
