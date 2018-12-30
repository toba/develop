<img src='https://toba.github.io/about/images/logo-colored.svg' width="100" align="right"/>

[![npm package](https://img.shields.io/npm/v/@toba/develop.svg)](https://www.npmjs.org/package/@toba/develop)
[![Dependencies](https://img.shields.io/david/toba/develop.svg)](https://david-dm.org/toba/develop)

# Toba Develop

Common development configurations.

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
   "extends": "./node_modules/@toba/develop/ts/tsconfig"
}
```

In addition to `tsconfig` there are `tsconfig.lib` and `tsconfig.pkg` at the same path.

## Style and Linting

### [tslint](https://palantir.github.io/tslint/)

Shared `tslint` configuration with [tslint-config-prettier](https://github.com/alexjoverm/tslint-config-prettier) and [tslint-consistent-codestyle](https://github.com/ajafff/tslint-consistent-codestyle). To use, create `tslint.json` with

```json
{
   "extends": ["@toba/develop/ts"]
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

Copyright &copy; 2018 Jason Abbott

This software is licensed under the MIT license. See the [LICENSE](./LICENSE) file
accompanying this software for terms of use.
