const { array } = require("yargs");

// Desafio 1
function compareTrue(boo1, boo2) {
  let resultado;
  if (boo1 === true && boo2 === true) {
    resultado = true
}
else {
  resultado = false;
}
  return resultado
}

// Desafio 2
function calcArea(base, height) {
  let triang = base * height / 2
  return triang}

// Desafio 3
function splitSentence(str) {
  let divisor = ' ';
  let splitArray = str.split(divisor);

  return splitArray;
}

// Desafio 4
function concatName(arraystr) {
  prim = arraystr[0]
  ultm = arraystr[arraystr.length -1]
  result = ultm + ', ' + prim

  return result
}

// Desafio 5
function footballPoints(wins, ties) {
  pont = wins * 3
  ponts = pont + ties;

  return ponts;
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
