// Desafio 1
function compareTrue(fristValue, secondValue) {
  // seu código aqui
    if (fristValue === true && secondValue === true){
      return true
    } else {return false};
  }

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) /2;
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
    let array = string.split(" ")
  return array;
}

// Desafio 4
function concatName(array1) {
  // seu código aqui
  let ultimoItem = array1[array1.length - 1];
  let primeiroItem = array1[0];
  return ultimoItem.concat(', ', primeiroItem);
}

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
