module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
        jest: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    overrides: [],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint', 'i18next'],
    rules: {
        indent: ['error', 4],
        'react/jsx-indent': [2, 4],
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'single'],
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/ban-ts-comment': 'warn',
        'no-unused-vars': 'warn',
        'max-len': ['error', { ignoreComments: true, code: 100 }]
    },
};
