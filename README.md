# eslint-config-aurora
[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

Standard JavaScript, but with opinionated changes.

## Changed rules

|   Rule   |    Old    |    New    |   Why   |
|----------|-----------|-----------|---------|
|[space-before-function-paren](https://eslint.org/docs/rules/space-before-function-paren)|`['error', 'always']`|`['error', {'anonymous': 'always', 'named': 'never', 'asyncArrow': 'always' }]`|  Spacing before named function parenthesis is just unusual.  |

Changes the function parenthesis spacing rule to disallow spaces for named functions but continue to require them for anonymous and asyncArrow functions.

```
function name(arg) { ... } // ✓ ok now, previously forced a space
```

---------

|   Rule   |    Old    |    New    |   Why   |
|----------|-----------|-----------|---------|
|[comma-dangle](https://eslint.org/docs/rules/comma-dangle)|`['error', 'never']`|`['warn', 'always-multiline']`|   Trailing commas allow for quicker additions to lists from cold starts.

Changes the dangling comma rule to be a warning instead of an error and expect them on the last element or property which is on a different line of comma separated values.

```
var obj = {
  message: 'hello', // ✓ ok now, previously an error
}
```


## Usage
### Simple
The easiest way to get started, built upon [`standardx`][standardx]

#### Install:
```
yarn add --dev eslint-config-aurora standardx
```
or
```
npm install --save-dev eslint-config-aurora standardx
```

#### Create or edit `eslintrc.json`:
```
{
  "extends": "aurora"
}
```
---
### Flexible
The more powerful way to get started, allows for [custom configurations][eslint-configuring].

#### Install:
```
yarn add --dev \
  eslint-config-aurora \
  eslint-config-standard \
  eslint-plugin-import \
  eslint-plugin-node \
  eslint-plugin-promise \
  eslint-plugin-standard
```
or
```
npm install --save-dev \
  eslint-config-aurora \
  eslint-config-standard \
  eslint-plugin-import \
  eslint-plugin-node \
  eslint-plugin-promise \
  eslint-plugin-standard
```

#### Create or edit `eslintrc.json`:
```
{
  "extends": ["standard", "aurora"]
}
```
Note: `"aurora"` must come _after_ `"standard"` in order to override the
rules of [`eslint-config-standard`][eslint-config-standard].
 

## ESLint + Prettier

This ESLint config is designed to work alongside our shareable Prettier config: [@auroradigital/prettier-config](https://github.com/AuroraDigital/prettier-config).

[eslint-config-standard]: https://github.com/standard/eslint-config-standard
[eslint-configuring]: https://eslint.org/docs/user-guide/configuring
[shareable]: https://eslint.org/docs/developer-guide/shareable-configs
[standardx]: https://github.com/standard/standardx
