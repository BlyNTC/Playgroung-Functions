// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true) {
    return true;
  }else{
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height)/2;
  // seu código aqui
}

// Desafio 3
function splitSentence(string) {
  let array = string.split(' ');
  return array;
}
//console.log(splitSentence('vamos que vamos'));

// Desafio 4
function concatName(array) {
  let ultimoItem = array[array.length-1];
  let primeiroItem = array [0];
  
  return ultimoItem + ', ' + primeiroItem;
  
  // seu código aqui
}
//console.log(concatName(['lucas', 'cassio', 'jose']));

// Desafio 5
function footballPoints(wins, ties) {
  
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
