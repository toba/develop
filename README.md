<img src='https://toba.github.io/about/images/logo-colored.svg' width="100" align="right"/>

[![npm package](https://img.shields.io/npm/v/@toba/develop.svg)](https://www.npmjs.org/package/@toba/develop)
[![Dependencies](https://img.shields.io/david/toba/develop.svg)](https://david-dm.org/toba/develop)

# Toba Develop

Shared configurations for the development environment, including linting,
code style and TypeScript compilation.

```sh
yarn add @toba/develop --dev
```

or

```sh
npm install @toba/develop --save-dev
```

## TypeScript Configurations

Create `tsconfig.json` with

```json
{
   "extends": "@toba/develop/tsconfig"
}
```

## Style and Linting

### eslint

Shared `eslint` configuration. To use, create `.eslintrc` with

```json
{
   "extends": ["@toba/develop/.eslintrc"]
}
```

### [stylelint](https://stylelint.io/)

For standard style linting, create `.stylelintrc` with

```json
{
   "plugins": ["@toba/develop/style"]
}
```

### [prettier](https://prettier.io/)

For standard code formatting, create `prettier.config.js` with

```js
module.exports = require('@toba/develop/prettier');
```

## License

Copyright &copy; 2019 Jason Abbott

This software is licensed under the MIT license. See the [LICENSE](./LICENSE) file
accompanying this software for terms of use.
