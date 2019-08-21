# eslint-config-aurora
[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

Standard JavaScript, but with opinionated changes.

## Changed rules

|   Rule   |    Old    |    New    |
|----------|-----------|-----------|
|[comma-dangle](https://eslint.org/docs/rules/comma-dangle)|`['error', 'never']`|`['warn', 'multiline']`|

Changes the dangling comma rule to be a warning instead of an error and expect them on the last element or property which is on a different line of comma separated values.

```
var obj = {
  message: 'hello', // ✓ ok now, previously signaled error
}
```

|   Rule   |    Old    |    New    |
|----------|-----------|-----------|
|[space-before-function-paren](https://eslint.org/docs/rules/space-before-function-paren)|`['error', 'always']`|`['error',{'anonymous': 'always', 'named': 'never', 'asyncArrow': 'always' }]`|

Changes the function parenthesis spacing rule to disallow spaces for named functions but continue to require them for anonymous and asyncArrow functions.

```
function name(arg) { ... } // ✓ ok now, previously forced space
```
