// Desafio 1
function compareTrue(a,b) {
  if( a === true && b === true){
    return true
  } else {
    return false
  }
}

// Desafio 2
function calcArea(b, h) {
  area = (b*h)/2
  return area
}

// Desafio 3
function splitSentence(s) {
  return s.split(" ")
}

// Desafio 4
function concatName(arr) {
  return arr[arr.length -1] + ", " + arr[0]
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins*3 + ties*1
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
