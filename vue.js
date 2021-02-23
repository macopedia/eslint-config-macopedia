module.exports = {
  parser: 'vue-eslint-parser',
  extends: ['./lib/eslint/base.js'],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx', '**/*.vue'],
      extends: [
        'plugin:vue/recommended',
        '@vue/typescript/recommended',
        'plugin:prettierx/vue'
      ],
      parserOptions: {
        parser: '@typescript-eslint/parser'
      },
      plugins: ['vue'],
      rules: {
        "space-before-function-paren": "error",
        'vue/component-name-in-template-casing': [
          'error',
          'PascalCase',
          {
            registeredComponentsOnly: true
          }
        ]
      }
    }
  ]
}
