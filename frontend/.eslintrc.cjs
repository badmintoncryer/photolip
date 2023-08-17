module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'standard-with-typescript',
    'plugin:storybook/recommended',
    'prettier'
  ],
  overrides: [{ files: '*.stories.@(ts|tsx|js)', extends: 'plugin:storybook/recommended' }],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: ['react'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/consistent-type-definitions': 'off',
    'react/prop-types': 'off'
  }
}
