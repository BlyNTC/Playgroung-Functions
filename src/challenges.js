// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 && valor2) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let areaTriangulo = (base*height)/2;
  return areaTriangulo;
}

// Desafio 3
function splitSentence(string) {
  let array = string.split(" ");
  return array;
}

// Desafio 4
function concatName(array) {
  let last = array.length -1;
  let string = array[last] + ", " + array[0];
  return string;
}

// Desafio 5
function footballPoints(wins,ties) {
  let points = wins*3 + ties;
  return points;
}

// Desafio 6
function highestCount(array) {
  let highest = array[0];
  for (let i of array) {
    i > highest ? highest = i : highest;
  }
  let highestCount = 0;
  for (let i of array) {
    i === highest ? highestCount +=1 : highestCount;
  }
  return highestCount;
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
