// Desafio 1
function compareTrue(bool1, bool2) {
  if (bool1 === true && bool2 === true) {
    return true
  } else {
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = base * height / 2;
  return area
}

// Desafio 3
function splitSentence(frase) {
  let fraseSeparada = frase.split(" ")
  return fraseSeparada
}

// Desafio 4
function concatName(array) {
  let palavras = array[array.length - 1] + ", " + array[0];
  return palavras
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = wins * 3 + ties;
  return pontos;
}

// Desafio 6
function highestCount(arrayDeNumeros) {
  let maiorNumero = arrayDeNumeros[0];
  let qtdRepeticoes = 0;

  for (let primeiroNumero = 0; primeiroNumero < arrayDeNumeros.length; primeiroNumero += 1) {
    for (let segundoNumero = 0; segundoNumero < arrayDeNumeros.length; segundoNumero += 1) {
      if (arrayDeNumeros[segundoNumero] >= arrayDeNumeros[primeiroNumero] && arrayDeNumeros[segundoNumero] >= maiorNumero) {
        maiorNumero = arrayDeNumeros[segundoNumero]; 
      } else if (arrayDeNumeros[primeiroNumero] >= arrayDeNumeros[segundoNumero] && arrayDeNumeros[primeiroNumero] >= maiorNumero) {
        maiorNumero = arrayDeNumeros[primeiroNumero];
      }
    }
  }

  for (let index = 0; index < arrayDeNumeros.length; index += 1) {
    if (arrayDeNumeros[index] === maiorNumero) {
      qtdRepeticoes += 1;
    }
  }
  return qtdRepeticoes;
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
