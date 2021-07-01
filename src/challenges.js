// Desafio 1
function compareTrue(num1, num2) {

if(num1 === true && num2 === true){
  return true;
 }
  else {  
  return false;
}
 }


// Desafio 2
let parametroBase = 0
function calcArea(base, heigth) {
  parametroBase = (base*heigth)/2;
  

  console.log(parametroBase) 
  return parametroBase;
}

calcArea (5,2)

// Desafio 3
function splitSentence(frase) {
 let str = frase.split(' ');
 return str;
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
