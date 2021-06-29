// Desafio 1
let boraPraia;
function compareTrue(fimDeSemana, temSol) {
  // seu código aqui

  if (fimDeSemana === true && temSol === true) {
    boraPraia = true;

  } else {
    boraPraia = false;

  }
  return boraPraia;

}

compareTrue(true, true);

// Desafio 2
function calcArea(a, b) {
  // seu código aqui
  let area = (a * b)/2;
  return area;
}

// Desafio 3
let quebrada;
function splitSentence(frase) {
  // seu código aqui
  quebrada = frase.split(" ");
  return quebrada;
  
}
splitSentence("Vamo que vamo");

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
