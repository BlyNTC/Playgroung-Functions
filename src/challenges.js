
// Desafio 1
function compareTrue(bool1, bool2) {
  
  //vai retornar falso
  if(bool1 === true && bool2 === true){return true }
  else{return false;}
  //vai retornar verdadeiro
 
} 

// Desafio 2
function calcArea(base, height) {
 let area;
  //formula
  area = (base * height) / 2;
  return area; 
}

// Desafio 3
function splitSentence(stringRef) {
  let str = stringRef.split(' ');
  return str;
}

// Desafio 4
function concatName() {
  // ao receber uma array de strings, retorna uma string com o fomato "ultimo item, primeiro item", independente do tamanho da array
  
}console.log(concatName());

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
