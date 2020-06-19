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
|[comma-dangle](https://eslint.org/docs/rules/comma-dangle)|`['error', 'never']`|`['warn', 'always-multiline']`|   Trailing commas allow for quicker additions to lists from cold starts.

Changes the dangling comma rule to be a warning instead of an error and expect them on the last element or property which is on a different line of comma separated values.

```
var obj = {
  message: 'hello', // ✓ ok now, previously an error
}
```


## Usage

[Shareable configs][shareable] are designed to work with the `extends` feature
of `.eslintrc.*` files, and this shareable config defines style rules intended
to override some of the StandardJS rules.

The following describes simple ways to to install, configure, and use
`eslint-config-aurora`. In the first case of each step, we use ESLint alone. In
the second case, we use [`standardx`][standardx].

1. Install the following development dependencies with `yarn add --dev` or `npm
   install --save-dev`:

   * ESLint

     ```
     eslint-config-aurora \
     eslint-config-standard \
     eslint-plugin-import \
     eslint-plugin-node \
     eslint-plugin-promise \
     eslint-plugin-standard
     ```

   * `standardx`

     ```
     eslint-config-aurora \
     standardx
     ```

2. [Configure ESLint][eslint-configuring] to use `eslint-config-aurora`. Here is
   an example `.eslintrc.json`:

   * ESLint

     ```
     {
       "extends": ["standard", "aurora"]
     }
     ```

     Note: `"aurora"` must come _after_ `"standard"` in order to override the
     rules of [`eslint-config-standard`][eslint-config-standard].

   * `standardx`

     ```
     {
       "extends": "aurora"
     }
     ```

     Note: `standardx` uses [`eslint-config-standard`][eslint-config-standard]
     as a base configuration, so this is automatically extending it.

3. Update your `package.json` run script for testing:

   * ESLint

     ```json
     "scripts": {
       "test": "eslint ."
     }
     ```

   * `standardx`

     ```json
     "scripts": {
       "test": "standardx"
     }
     ```

4. Test with `yarn test` or `npm test`.

## ESLint + Prettier

This ESLint config is designed to work alongside our shareable Prettier config: [@auroradigital/prettier-config](https://github.com/AuroraDigital/prettier-config).

[eslint-config-standard]: https://github.com/standard/eslint-config-standard
[eslint-configuring]: https://eslint.org/docs/user-guide/configuring
[shareable]: https://eslint.org/docs/developer-guide/shareable-configs
[standardx]: https://github.com/standard/standardx
