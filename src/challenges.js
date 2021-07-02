// Desafio 1
function compareTrue(a, b) {
  return a && b === true;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(array) {
  return array.split(' ');
}

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3 + ties * 1);
}

// Desafio 6
// for (let i = 0; i < array.length; i += 1)
function highestCount(array) {
  let numeroRepete = 0;
  let maiorNumero = Math.max(...array);
  for (let i in array) {
    if (array[i] === maiorNumero) {
      numeroRepete += 1;
    }
  }
  return numeroRepete;
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
