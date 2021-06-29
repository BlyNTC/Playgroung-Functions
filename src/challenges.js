// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2===true){
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base*height)/2;
}

// Desafio 3
function splitSentence(string) {
  let array = string.split(" ");
  return array;
}

// Desafio 4
function concatName(array) {
  let array1 = array[0];
  let array2 = array[array.length-1];
  let arrayAuxiliar = array2.concat(", ", array1);
  let string = arrayAuxiliar.toString();
  return string;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = wins*3 + ties;
  return pontos;
}

console.log(footballPoints(0,0));

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
