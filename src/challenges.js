// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true) {
    return true;
  } else if (valor1 === true && valor2 === false) {
    return false;
  } else if (valor1 === false && valor2 === false) {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base*height) / 2;
}

// Desafio 3
function splitSentence(a) {
  return a.split(" ");
}

// Desafio 4
function concatName(array) {
  let array= [0] + array[array.lenght-1];


// percorrer os itens de um array 
//identificar e pegar o primeiro e o último elemento
// inserir em uma string

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
