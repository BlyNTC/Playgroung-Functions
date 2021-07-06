// Atenção: Lembrar de tirar os CONSOLE.LOG!!!

// Desafio 1
// 1 - Crie uma função usando o operador &&
function compareTrue(boleano_A, boleano_B) {
  return boleano_A && boleano_B;

}

// Desafio 2
// 2 - Crie uma função que calcule a área de um triângulo
// Base= base  |  Altura=height
function calcArea(base, height) {
  return (base * height) / 2;

}

// Desafio 3
// 3 - Crie uma função que divida a frase
function splitSentence(myString) {

  return myString.split(" ");
  
}

// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split
// const myString = 'testestestes'
// const splits = myString.split('')

// console.log(splits);

// Desafio 4
// 4 - Crie uma função que use concatenação de strings
function concatName(myStringConca) {
return myStringConca[myStringConca.length - 1] + ", " + myStringConca[0];
}
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/length

// Desafio 5
// 5 - Crie uma função que calcule a quantidade de pontos no futebol
// // Vitórias= wins  |  Empates= ties
function footballPoints(wins, ties) {

  
  return (wins=(wins*3) + (ties));

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

// Atenção: Lembrar de tirar os CONSOLE.LOG!!!

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
