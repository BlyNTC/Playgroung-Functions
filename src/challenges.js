// BLOCO 04 - DIA - 5 - JavaScript - Playground Functions
// 29/06/21

// Desafio 1
function compareTrue(var1, var2) {
  if (var1 && var2) {
    return true;
  } return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  let array = [];
  let word = '';
  for (let char of string) {
    if (char !== ' ') {
      word += char;
    } else if (word !== '') {
      array.push(word);
      word = '';
    }
  }
  if (word !== '') {
    array.push(word);
  }
  return array;
}

// Desafio 4
function concatName(array) {
  let string = '';
  if (array.length >= 2) {
    let firstName = array.shift().toString();
    let lastName = array.pop().toString();
    string = string.concat(lastName, ', ', firstName);
  }
  return string;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(array) {
  array = array.sort(function (a, b) { return a - b; });
  let biggerValue = array[array.length - 1];
  let count = 0;
  for (let number of array) {
    if (number === biggerValue) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = Math.abs(mouse - cat1);
  let distCat2 = Math.abs(mouse - cat2);
  let result;
  if (distCat1 < distCat2) {
    result = 'cat1';
  } else if (distCat2 < distCat1) {
    result = 'cat2';
  } else {
    result = 'os gatos trombam e o rato foge';
  }
  return result;
}

function toWord(element, index, array) {
  if (element % 15 === 0) {
    array[index] = 'fizzBuzz';
  } else if (element % 3 === 0) {
    array[index] = 'fizz';
  } else if (element % 5 === 0) {
    array[index] = 'buzz';
  } else {
    array[index] = 'bug!';
  }
}

// Desafio 8
function fizzBuzz(array) {
  array.forEach(toWord);
  return array;
}

// Desafio 9
function encode(string) {
  string = string.replace(/a/ig, '1');
  string = string.replace(/e/ig, '2');
  string = string.replace(/i/ig, '3');
  string = string.replace(/o/ig, '4');
  string = string.replace(/u/ig, '5');
  return string;
}

function decode(string) {
  string = string.replace(/1/ig, 'a');
  string = string.replace(/2/ig, 'e');
  string = string.replace(/3/ig, 'i');
  string = string.replace(/4/ig, 'o');
  string = string.replace(/5/ig, 'u');
  return string;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
