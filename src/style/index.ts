import { StyleConfig } from './types';

/**
 * @see https://github.com/stylelint/stylelint/blob/master/docs/developer-guide/plugins.md
 */
export = {
   plugins: ['stylelint-config-standard', 'stylelint-scss'],
   rules: {
      'color-no-invalid-hex': true,
      'at-rule-empty-line-before': null,
      'declaration-empty-line-before': null,
      'rule-empty-line-before': null,
      'declaration-block-single-line-max-declarations': 5,
      'selector-list-comma-newline-after': null,
      'no-missing-end-of-source-newline': null,
      indentation: 3
   },
   ruleName: '@toba/develop/style'
} as StyleConfig;
