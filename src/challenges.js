// Desafio 1
function compareTrue(n1,n2) {
 return n1 && n2;
}

// Desafio 2
function calcArea(base,height) {
  return (base * height) / 2
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  return array[array.length-1] +', '+ array[0];
}

// Desafio 5
function footballPoints(wins,ties) {
  return wins*3+ties
}

// Desafio 6
function highestCount(arrayNumeros) {
let numeroMaior = Math.max(...arrayNumeros);
let repeticao = 0;
  for (let i = 0 ; i < arrayNumeros.length; i += 1) {
    if(numeroMaior === arrayNumeros[i]){
      repeticao += 1;
    }
  }
  return repeticao;
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

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
