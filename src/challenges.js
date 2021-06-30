// Desafio 1
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  let array = string.split(' ');
  return array;
}

// Desafio 4
function concatName(arrayDeStrings) {
  let primeiro = arrayDeStrings[0];
  let ultimo = arrayDeStrings[arrayDeStrings.length -1];
  return ultimo + ',' + ' ' + primeiro;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontosCampeonato = (wins * 3) + ties;
  return pontosCampeonato;
}

// Desafio 6
function highestCount(arrayDeNumeros) {
  let resultado = 0;
  let maximo = Math.max[arrayDeNumeros];
  for(let i = 0; i <= arrayDeNumeros.length; i +1) {
    if(arrayDeNumeros[i] === Math.max[arrayDeNumeros])
    resultado +=1
  }
  return resultado
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
