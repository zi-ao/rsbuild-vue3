export default {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-recommended-vue',
    'stylelint-config-recess-order'
  ],
  rules: {
    'scss/at-rule-no-unknown': [true, { ignoreAtRules: [/^unocss/] }]
  },
}