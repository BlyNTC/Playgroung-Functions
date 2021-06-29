// Desafio 1
function compareTrue(firstValue, secondValue) {
  return (firstValue && secondValue);
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(frase) {
  return (frase.split(' '));
}

// Desafio 4
function concatName(lista) {
  let answer = (`${lista[lista.length - 1]}, ${lista[0]}`);
  return answer;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties);
}

// Desafio 6
function highestCount(myArray) {
  let maxNumber = Math.max.apply(null, myArray);
  let maxNumberCount = 0;
  for (let index = 0; index < myArray.length; index += 1) {
    if (myArray[index] === maxNumber) {
      maxNumberCount += 1;
    }
  }
  return maxNumberCount;
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
