// Desafio 1
function compareTrue(a, b) {
if(a === true && b === true){
  return true;
}else{
  return false;
}
compareTrue();

}

// Desafio 2
function calcArea(base, height) {

let area = (base * height) / 2;
return area;
}
calcArea();



// Desafio 3
function splitSentence(frase) {
let resultado = frase.split(" ");
return resultado;
}
splitSentence('para meu');


// Desafio 4

function concatName(array) {
  let resultado1 = array[0];
  let resultado2 = array[array.length - 1];
  let resultado3 = resultado2 + ',' + resultado1;
  return resultado3;
  }
  concatName();


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
function fizzBuzz(wins,ties) {
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
