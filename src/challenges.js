// Desafio 1
function compareTrue(x, y) {
  // seu código aqui
  if (x && y === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = 0;
  area = (base * height) / 2;
  return (area);
}

// Desafio 3
function splitSentence(phrase) {
  // seu código aqui (Font: https://www.w3schools.com/jsref/jsref_split.asp)
  let result = phrase.split(" ");
  return (result);
}

// Desafio 4
function concatName(names) {
  // seu código aqui
  let lastName = names[names.length - 1];
  let firstName = names[0];
  let lastFirst = lastName + ", " + firstName;
  return (lastFirst);
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let points = (wins * 3) + (ties * 1);
  return (points);
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
