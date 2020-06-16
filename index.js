module.exports = {
  extends: 'standard',
  rules: {
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'comma-dangle': [
      'warn',
      'always-multiline',
    ],
  },
}
