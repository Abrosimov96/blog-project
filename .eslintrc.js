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
    'plugin:@typescript-eslint/recommended',
    'plugin:i18next/recommended'
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'i18next'],
  rules: {
    indent: ['error', 2],
    'react/jsx-indent': [2, 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/ban-ts-comment': 'warn',
    'no-unused-vars': 'warn',
    'i18next/no-literal-string': ['warn', { markupOnly: true }],
    'max-len': ['error', { ignoreComments: true, code: 100 }]
  },
};
