module.exports = {
  parser: 'vue-eslint-parser',
  extends: [
    './lib/eslint/base.js',
    'plugin:vue/recommended',
    '@vue/typescript/recommended'
  ],
  plugins: ['@typescript-eslint', 'vue'],
  rules: {
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      {
        registeredComponentsOnly: true,
        ignores: []
      }
    ]
  }
}
