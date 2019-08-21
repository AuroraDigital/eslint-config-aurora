module.exports = {
  extends: 'standard',
  rules: {
    'comma-dangle': [
      'warn',
      'always-multiline'
    ],
    'space-before-function-paren': [
      'error',
      {
        'anonymous': 'always',
        'named': 'never',
        'asyncArrow': 'always'
      }
    ]
  }
}
