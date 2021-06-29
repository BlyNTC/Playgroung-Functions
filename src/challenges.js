// BLOCO 04 - DIA - 5 - JavaScript - Playground Functions
// 29/06/21

// Desafio 1
function compareTrue(var1, var2) {
  if (var1 && var2) {
    return true;    
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return base*height/2;
}

// Desafio 3
function splitSentence(string) {
  let array = [];
  let word = '';
  for (let char of string) {
    if (char != ' ') {
      word += char;
    } else if (word != '') {
      array.push(word);
      word = '';
    }
  }
  if (word != '') {
    array.push(word);
  }
  return array;
}

// Desafio 4
function concatName(array) {
  let string = '';
  if (array.length >= 2 ) {
    let firstName = array.shift();
    let lastName = array.pop();
    string = lastName + ', ' + firstName;
  }  
  return string;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins*3 + ties;
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
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
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

