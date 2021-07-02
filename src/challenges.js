// Desafio 1
function compareTrue(num1, num2) {

  if (num1 && num2)
    return true;
  else 
    return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = 2;
  return base * height / 2;
  
}

// Desafio 3
function splitSentence(string) {
  return string.split(" ");
  
}

// Desafio 4
function concatName(array) {
  let primeiroItem = array[0];
  let ultimoItem = array[array.length -1];
  return ultimoItem +','+ primeiroItem;
  concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']);
  console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
}

// Desafio 5
function footballPoints() {
  
}

// Desafio 6
function highestCount() {

  
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
