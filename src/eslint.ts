import eslint from 'eslint';

/**
 * @see http://artsy.github.io/blog/2019/01/29/from-tslint-to-eslint/
 * @see https://github.com/typescript-eslint/typescript-eslint
 */
export = {
   parser: '@typescript-eslint/parser',
   plugins: ['@typescript-eslint'],
   extends: [
      'plugin:@typescript-eslint/recommended',
      'prettier',
      'prettier/@typescript-eslint'
   ],
   parserOptions: {
      // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser
      ecmaFeatures: {
         jsx: true
      },
      ecmaVersion: 6,
      project: './tsconfig.json',
      sourceType: 'module'
   },
   rules: {
      '@typescript-eslint/no-object-literal-type-assertion': 'off'
   }
} as eslint.Linter.Config;
