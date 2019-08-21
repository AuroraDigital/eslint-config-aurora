# eslint-config-aurora
[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

Standard JavaScript, but with opinionated changes.

## Changed rules

|   Rule   |    Old    |    New    |   Why   |
|----------|-----------|-----------|---------|
|[space-before-function-paren](https://eslint.org/docs/rules/space-before-function-paren)|`['error', 'always']`|`['error',{'anonymous': 'always', 'named': 'never', 'asyncArrow': 'always' }]`|  Spacing before named function parenthesis is just unusual.  |

Changes the function parenthesis spacing rule to disallow spaces for named functions but continue to require them for anonymous and asyncArrow functions.

```
function name(arg) { ... } // ✓ ok now, previously forced a space
```

---------

|   Rule   |    Old    |    New    |   Why   |
|----------|-----------|-----------|---------|
|[comma-dangle](https://eslint.org/docs/rules/comma-dangle)|`['error', 'never']`|`['warn', 'multiline']`|   Trailing commas allow for quicker additions to lists from cold starts.

Changes the dangling comma rule to be a warning instead of an error and expect them on the last element or property which is on a different line of comma separated values.

```
var obj = {
  message: 'hello', // ✓ ok now, previously an error
}
```


## ESLint + Prettier

This rules of this ESLint config is designed to play nice with our shareable Prettier config: [@auroradigital/prettier-config](https://github.com/AuroraDigital/prettier-config).
