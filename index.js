/*!
 * es6-template-regex <https://github.com/jonschlinkert/es6-template-regex>
 * Copyright (c) 2014-2015, Jon Schlinkert, 2014 Lo-Dash 2.4.1 <http://lodash.com/>
 * Licensed under the MIT License.
 *
 * Used to match ES template delimiters
 * See: http://ecma-international.org/ecma-262/6.0/#sec-template-literal-lexical-components
 */

module.exports = function es6regex() {
  return /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
};
