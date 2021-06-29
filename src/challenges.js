// Desafio 1
function compareTrue(valor1, valor2) {
  // seu código aqui
  if((valor1 && valor2) === true){
    return true;
  }else{
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let sentence = [];
  sentence = string;
  return sentence.split(' ');
}

// Desafio 4
function concatName(strings = []) {
  // seu código aqui
  let resultado1 = [];
  let resultado2 = [];
  let resultado = [];
  resultado1 = strings[strings.length - 1];
  resultado2 = strings[0];
  resultado = resultado1 + ', ' + resultado2;
  return resultado;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return ((wins * 3) + ties);
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
