/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable complexity */
/* eslint-disable max-lines-per-function */
/* eslint-disable eqeqeq */
/* eslint-disable no-plusplus */
/* eslint-disable no-mixed-operators */
// Desafio 1
function compareTrue(n1, n2) {
  if (n1 && n2) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height / 2);
  return area;
}

// Desafio 3
function splitSentence(string) {
  let stringarray = string.split(' ');
  return stringarray;
}

// Desafio 4
function concatName(array) {
  let string = `${array[array.length - 1]}, ${array[0]}`;
  return string;
}

// Desafio 5
function footballPoints(wins, ties) {
  let winpoints = wins * 3;
  let tiepoints = ties;
  return winpoints + tiepoints;
}

// Desafio 6
function highestCount(array) {
  let max = Math.max(...array);
  let count = 0;
  for (let i = 0; i < array.length; ++i) {
    if (array[i] == max) {
      count++;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1d = cat1 - mouse;
  let cat2d = cat2 - mouse;
  let result = '';
  if (cat1d < 0) {
    cat1d *= -1;
  }
  if (cat2d < 0) {
    cat2d *= -1;
  }
  if (cat1d > cat2d) {
    result = 'cat2';
  } else if (cat1d < cat2d) {
    result = 'cat1';
  } else {
    result = 'os gatos trombam e o rato foge';
  }
  return result;
}

// Desafio 8
function fizzBuzz(array) {
  let result = [];
  let final = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 3 == 0) {
      let a = 'fizz';
    } else {
      let a = 'null';
    }
    if (array[i] % 5 == 0) {
      let b = 'buzz';
    } else {
      b = 'null';}
    let c = a + b;
    result.push(c);
  }
  for (let i = 0; i < result.length; i++) {
    if (result[i] == 'nullnull') {
      final.push('bug!');
    } else if (result[i] == 'fizzbuzz') {
      final.push('fizzBuzz');
    } else if (result[i] == 'fizznull') {
      final.push('fizz');
    } else if (result[i] == 'nullbuzz') {
      final.push('buzz');
    }
  }
  return final;
}

// Desafio 9
function encode(string) {
  let array = string.split('');
  let final = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] == 'a') {
      final.push('1');
    } else if (array[i] == 'e') {
      final.push('2');
    } else if (array[i] == 'i') {
      final.push('3');
    } else if (array[i] == 'o') {
      final.push('4');
    } else if (array[i] == 'u') {
      final.push('5');
    } else {
      final.push(array[i]);
    }
  }
  let result = final.join('');
  return result;
}
function decode(string) {
  let array = string.split('');
  let final = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] == '1') {
      final.push('a');
    } else if (array[i] == '2') {
      final.push('e');
    } else if (array[i] == '3') {
      final.push('i');
    } else if (array[i] == '4') {
      final.push('o');
    } else if (array[i] == '5') {
      final.push('u');
    } else {
      final.push(array[i]);
    }
  }
  let result = final.join('');
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
