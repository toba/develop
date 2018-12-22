[![npm package](https://img.shields.io/npm/v/@toba/develop.svg)](https://www.npmjs.org/package/@toba/develop)
[![Dependencies](https://img.shields.io/david/toba/develop.svg)](https://david-dm.org/toba/develop)



<img src='https://toba.github.io/about/images/logo-colored.svg' width="100" align="right"/>

## Toba Develop

Shared `tslint` configuration with [tslint-config-prettier](https://github.com/alexjoverm/tslint-config-prettier) and [tslint-consistent-codestyle](https://github.com/ajafff/tslint-consistent-codestyle) for use in Toba projects.

```sh
yarn add @toba/develop --dev
```

or

```sh
npm install @toba/develop --save-dev
```

then create `tslint.json` with

```
{
   "extends": [
      "@toba/develop/ts"
   ]
}
```

and add a `stylelint` section to `package.json`

```
   "stylelint": {
      "plugins": [
         "@toba/develop/style"
      ]
   }
```

## License

Copyright &copy; 2018 Jason Abbott

This software is licensed under the MIT license. See the [LICENSE](./LICENSE) file
accompanying this software for terms of use.