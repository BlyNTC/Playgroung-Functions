// Desafio 1
function compareTrue(boo1, boo2) {
  let resultado;
  if(boo1 === true && boo2 === true){
    resultado = true
} else if(boo1 === true && boo2 === false){
    resultado = false
} else {
    resultado = false
}
    return resultado
}

// Desafio 2
function calcArea(base, height) {
  let resultado = base * height / 2;
  return resultado;
}

// Desafio 3
function splitSentence(string) {
  let divisor = ' ';
  let divideArray = string.split(divisor);

  return divideArray;
}

// Desafio 4
function concatName() {
  // seu código aqui
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
