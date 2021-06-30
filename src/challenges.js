// Desafio 1

function compareTrue(a1, a2) {
  if (a1 === true && a2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(b, h) {
  return (b * h) / 2;
}

// Desafio 3
function splitSentence(arraySentence) {
  return arraySentence.split(' ');
}

// Desafio 4
function concatName(arSentence) {
  let lastItem = arSentence[arSentence.length - 1];
  let firstItem = arSentence[0];
  let concat = lastItem + ', ' + firstItem;
  return concat;
}

// Desafio 5
function footballPoints(wins, ties) {
  let win = wins * 3;
  return win + ties;
}

// Desafio 6
function highestCount() {
  // seu código aqui
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
