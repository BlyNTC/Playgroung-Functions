// Desafio 1 - Gustavo Dias - Turma 14 - Tribo A
function compareTrue(firstValue, secondValue) {
  return firstValue && secondValue;
}

// console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// console.log(calcArea(10, 50));

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// console.log(splitSentence("go  Trybe"));

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}

// console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}

// console.log(footballPoints(14, 8));

// Desafio 6
function highestCount(array) {

  // Linha inspirada por: https://stackoverflow.com/questions/32647149/why-is-math-max-returning-nan-on-an-array-of-integers
  // Os três pontos passam o array como argumentos independentes da função max
  let maxNumber = Math.max(...array);

  // Linha inspirada por: https://stackoverflow.com/questions/6120931/how-to-count-certain-elements-in-array
  // A hof filter percorre o array e cria um novo array para cada número que satisfaz a condição da arrow function, aqui retorno o tamanho desse array gerado.
  return array.filter((number) => number === maxNumber).length;
}

// console.log(highestCount([9, 9, 9, 4, 9, 3, 9, 3, 3, 3, 3, 5, 4, 9]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distancia1 = Math.abs(mouse - cat1);
  let distancia2 = Math.abs(mouse - cat2);
  return distancia1 > distancia2 ? 'cat2' : 'cat1';
}

console.log(catAndMouse(0, 3, 2));

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
