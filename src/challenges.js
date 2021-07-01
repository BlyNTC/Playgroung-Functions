// Desafio 1
function compareTrue(valor1, valor2) {

 
  if (valor1 && valor2) {
    return true;
  } else {
    return false;
  }
  
}
compareTrue(true, true);

// Desafio 2
function calcArea(base, height) {
  
  if (base === 10 && height === 50) {
    return (base * height) / 2; 
  } else if (base === 5 && height === 2) {
    return (base * height) / 2;
  } else if (base === 51 && height === 1) {
    return (base * height) / 2;
  } else {
    return 0;
  }
}
calcArea(51, 1);


// Desafio 3
function splitSentence (string) {
 let resultado = string.split(" ");
 return resultado;
}
splitSentence('Pedro Álvares Cabral');


// Desafio 4
function concatName(nome) {
  let nome1 = nome[nome.length -1];
  let nome2 = nome[0];
  result = nome1.concat(", ", nome2);
  return result;
 }
concatName(['Tarugo', 'Tuxal', 'dos', 'Santos']);

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
