// Desafio 1
function compareTrue(sum1, sum2) {
  if (sum1 === true && sum2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let calculo = (base * height) / 2;
  return calculo;
}

// Desafio 3
function splitSentence(frase) {
  let texto = frase.split(' ');
  return texto;
}

// Desafio 4
function concatName(ultimaPrimeira) {
  let string = ultimaPrimeira[ultimaPrimeira.length - 1] + ', ' + ultimaPrimeira[0];
  return string;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (wins * 3) + ties;
  return pontos;
}

// Desafio 6
function highestCount(array) {
  let maiorNumero = Math.max.apply(null, array);
  let result = 0;

  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === maiorNumero) {
      result += 1;
    }
  }
  return result;
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
