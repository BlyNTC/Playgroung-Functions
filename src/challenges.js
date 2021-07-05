// Desafio 1

function compareTrue(booleano1, booleano2) {
  return booleano1 && booleano2;
}
//console.log(compareTrue(false,false));

// Desafio 2

function calcArea(base, heigth) {
  let base1 = base;
  let altura = heigth;

  let calculaArea = (base1 * altura) / 2;

  return calculaArea;
}

// Desafio 3
function splitSentence(string) {
  let array = string.split(' ');
  return array;
}
//console.log(splitSentence("Go trybe"));

// Desafio 4
function concatName(array) {
  let primeiraPosicao = array[0];
  let index = array.length - 1;
  let ultimaPosicao = array[index];
  return ultimaPosicao + ', ' + primeiraPosicao;
}
//console.log(concatName(["foguete", "não", "tem","re"]))

// Desafio 5
function footballPoints() {
  // seu código aqui
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
