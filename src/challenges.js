// Desafio 1
function compareTrue(a, b) {
  if (a && b === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = 0;
  area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(str) {
  let splited = [];
  splited = str.split(" ");
  return splited;
}

// Desafio 4
function concatName(arr) {
  let result = [];
  let str = "";
  result.push(arr[arr.length - 1]);
  result.push(arr[0]);
  str = result.join(", ");
  return str;
}

// Desafio 5
function footballPoints(wins, ties) {
  let winPoints = 0;
  let totalPoints = 0;
  winPoints = wins * 3;
  totalPoints = winPoints + ties;
  return totalPoints;
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
