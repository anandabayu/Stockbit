/*
 * File: logic.js
 * Project: Logic
 * File Created: Thursday, 21st October 2021 9:52:28 am
 * Author: Ananda Yudhistira (anandabayu12@gmail.com)
 * -----
 * Last Modified: Thursday, 21st October 2021 11:43:55 am
 * Modified By: Ananda Yudhistira (anandabayu12@gmail.com>)
 * -----
 * Copyright 2021 Ananda Yudhistira
 */

let words = ['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua'];

var result = [];

for (var i = 0; i < words.length; i++) {
  let word = words[i];
  let w = word.split('').sort().join('');

  if (result[w]) {
    result[w].push(word);
  } else {
    result[w] = [word];
  }
}

Object.keys(result).forEach(function (key) {
  console.log(result[key]);
});
