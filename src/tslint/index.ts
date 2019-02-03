/**
 * @deprecated
 * @see https://eslint.org/blog/2019/01/future-typescript-eslint
 */
export = {
   extends: ['tslint-config-prettier', 'tslint-consistent-codestyle'],
   rules: {
      'adjacent-overload-signatures': true,
      'arrow-return-shorthand': true,
      'class-name': true,
      curly: true,
      eofline: false,
      indent: [true, 'spaces'],
      'jsdoc-format': true,
      'label-position': true,
      'new-parens': true,
      'no-angle-bracket-type-assertion': true,
      'no-arg': true,
      'no-consecutive-blank-lines': [true, 2],
      'no-console': [true, 'debug'],
      'no-construct': true,
      'no-debugger': true,
      'no-duplicate-variable': true,
      'no-empty': true,
      'no-eval': true,
      'no-require-imports': true,
      'no-switch-case-fall-through': true,
      'no-trailing-whitespace': true,
      'no-unused-expression': true,
      'no-unused': [
         true,
         {
            'ignore-imports': true
         }
      ],
      'no-var-before-return': true,
      'no-var-keyword': true,
      'no-var-requires': true,
      'one-line': [
         true,
         'check-open-brace',
         'check-catch',
         'check-else',
         'check-whitespace'
      ],
      'one-variable-per-declaration': [true, 'ignore-for-loop'],
      'prefer-const': true,
      quotemark: [true, 'single'],
      semicolon: [true, 'always', 'ignore-bound-class-methods'],
      'trailing-comma': [
         true,
         {
            multiline: 'never',
            singleline: 'never'
         }
      ],
      'typedef-whitespace': [
         true,
         {
            'call-signature': 'nospace',
            'index-signature': 'nospace',
            parameter: 'nospace',
            'property-declaration': 'nospace',
            'variable-declaration': 'nospace'
         },
         {
            'call-signature': 'onespace',
            'index-signature': 'onespace',
            parameter: 'onespace',
            'property-declaration': 'onespace',
            'variable-declaration': 'onespace'
         }
      ],
      'variable-name': [true, 'allow-leading-underscore', 'allow-pascal-case'],
      whitespace: [true, 'check-branch', 'check-decl', 'check-separator']
   }
};
