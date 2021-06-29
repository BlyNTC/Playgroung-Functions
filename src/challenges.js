// Desafio 1
function compareTrue(a, b) {
  // seu código aqui
  if(a == true && b == true){
    return true;
  }
  else if(a == true && b == false){
    return false;
  }
  else if (a == false && b == true){
    return false;
  }
  else if (a == false && b == false){
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height)/2)
  // seu código aqui
}

// Desafio 3
function splitSentence(frase) {
  let resultado = frase.split(' ');
  return resultado
  // seu código aqui
}

console.log(splitSentence('vamo que vamo'));

// Desafio 4
function concatName(array) {
  // seu código aqui
let primeiroItem = array [0];
let ultimoItem = array [array.lenght -1];
return primeiroItem + " " + ultimoItem
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
