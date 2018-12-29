'use strict';

module.exports = {
   /**
    * Stylelint configuration.
    * @see https://stylelint.io/
    */
   stylelint: require('./style/'),
   tslint: require('./ts/'),
   /**
    * Prettier options.
    * @see https://prettier.io/docs/en/options.html
    */
   prettier: require('./prettier/')
};
