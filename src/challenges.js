const { TestWatcher } = require("jest");

// Desafio 1
function compareTrue(a,b) {
    return a && b;
}

// Desafio 2
function calcArea(base,height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  // Usei a referência a seguir: https://www.w3schools.com/jsref/jsref_split.asp#:~:text=The%20split()%20method%20is,not%20change%20the%20original%20string.
  return sentence.split(" ");
}

// Desafio 4
function concatName(name) {
  return name[name.length - 1] + ", " + name[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties);
}

// Desafio 6
function highestCount(numbers) {
  let highest = numbers[0];
  for (let index = 0; index < numbers.length; index ++) {
    if (numbers[index] > highest) {
      highest = numbers[index];
    }
  }
  let counter = 0;
  for (let index = 0; index < numbers.length; index ++) {
    if (highest == numbers[index]) {
      counter++;
    }
  }
  return counter  
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
