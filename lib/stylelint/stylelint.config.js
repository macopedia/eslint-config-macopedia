module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-scss',
    'stylelint-config-css-modules',
    'stylelint-config-rational-order'
  ],
  rules: {
    'selector-list-comma-newline-after': 'always',
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['value']
      }
    ]
  }
}
