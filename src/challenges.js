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
  let biggerValue = Number.NEGATIVE_INFINITY;
  for (let number of array) {
    if (number > biggerValue) {
      biggerValue = number;
    }
  }
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
  if (distCat1 === distCat2) {
    return 'os gatos trombam e o rato foge';
  } else if (distCat1 < distCat2) {
    return 'cat1';
  } else {
    return 'cat2';
  }
}

// Desafio 8
function fizzBuzz(array) {
  let result = [];
  for (let number of array) {
    if (number % 3 === 0 && number % 5 === 0) {
      result.push('fizzBuzz');
    } else if (number % 3 === 0) {
      result.push('fizz');
    } else if (number % 5 === 0) {
      result.push('buzz');
    } else {
      result.push('bug!');
    }
  }
  return result;
}

// Desafio 9
function encode(string) {
  let result = '';
  for (let char of string) {
    if (char === 'a') {
      result += '1';
    } else if (char === 'e') {
      result += '2';
    } else if (char === 'i') {
      result += '3';
    } else if (char === 'o') {
      result += '4';
    } else if (char === 'u') {
      result += '5';
    } else {
      result += char;
    }
  }
  return result;
}

function decode(string) {
  let result = '';
  for (let char of string) {
    if (char === '1') {
      result += 'a';
    } else if (char === '2') {
      result += 'e';
    } else if (char === '3') {
      result += 'i';
    } else if (char === '4') {
      result += 'o';
    } else if (char === '5') {
      result += 'u';
    } else {
      result += char;
    }
  }
  return result;
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