// Desafio 1
function compareTrue(param1, param2) {
  // seu código aqui
  if (param1 === true && param2 === true) {
    return true
  } else {
    return false
  }
}

// Desafio 2
function calcArea(base, altura) {
  // seu código aqui
  return base * altura / 2
}

// Desafio 3
function splitSentence(param) {
  // seu código aqui
  let separaFrase = param.split(' ')
  return separaFrase
}

// Fonte que usei para o desafio 3: https://www.devmedia.com.br/javascript-split-dividindo-separando-strings/39254

// Desafio 4
function concatName(param) {
  // seu código aqui
  let palavra1 = param[0];
  let palavra2 = param[param.length - 1];
  let palavras = palavra2 + ', ' + palavra1
  return palavras;

}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return wins * 3 + ties

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
