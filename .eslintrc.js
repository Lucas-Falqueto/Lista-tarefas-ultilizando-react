module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': 0,
    'react/state-in-constructor': 0,
    // 'no-unused-vars': 0,
    'react/forbid-prop-types': 0,
    // 'import/no-duplicates': 0,
    'react/no-unused-prop-types': 0,
    'react/prop-types': 0,
  },
};
