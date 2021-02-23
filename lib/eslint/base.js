module.exports = {
  extends: ['standard', 'eslint:recommended', 'plugin:prettierx/standardx'],
  plugins: ['prettierx'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      env: { browser: true, es6: true, node: true },
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:prettierx/@typescript-eslint'
      ],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint']
    }
  ]
}
