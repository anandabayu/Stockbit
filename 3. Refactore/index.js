/*
 * File: index.js
 * Project: 3. Refactore
 * File Created: Thursday, 21st October 2021 1:36:14 pm
 * Author: Ananda Yudhistira (anandabayu12@gmail.com)
 * -----
 * Last Modified: Thursday, 21st October 2021 1:49:26 pm
 * Modified By: Ananda Yudhistira (anandabayu12@gmail.com>)
 * -----
 * Copyright 2021 Ananda Yudhistira, -
 */
function findFirstStringInBracket(str) {
  var matches = str.match(/\((.*?)\)/);

  if (matches) {
    return matches[1];
  }

  return '';
}

var res = findFirstStringInBracket('ini kalimat (dalam) bracket');

console.log(res);
