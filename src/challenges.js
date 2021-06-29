// Desafio 1
function compareTrue(a, b) {
  if (a && b === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let resultadoCalculoArea = (base * height) / 2;
  return resultadoCalculoArea;
}

// Desafio 3
function splitSentence(string) {
  let array = string.split(' ');
  return array;
}

// Desafio 4
function concatName(array) {
  let ultimoItem = array[array.length - 1];
  let primeiroItem = array[0];
  return ultimoItem.concat(', ', primeiroItem);
}

// Desafio 5
function footballPoints(wins, ties) {
  let vitoria = wins * 3;
  let totalDePontos = vitoria + ties;
  return totalDePontos;
}

// Desafio 6
function highestCount(array) {
  let numeroMaior = Math.max(...array); // ... para achar um valor maior em um array
  let quantidadeRepeticao = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (numeroMaior === array[i]) {
      quantidadeRepeticao += 1;
    }
  }
  return quantidadeRepeticao;
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
