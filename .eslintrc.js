module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true
  },
  plugins: ['react', 'prettier'],
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:prettier/recommended', 'plugin:storybook/recommended'],
  rules: {
    'prettier/prettier': ['warn']
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  }
};