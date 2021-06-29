// Desafio 1
function compareTrue(num1, num2) {
  if (num1 > 0 && num2 > 0) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
}
// Desafio 4
function concatName(array) {
  // seu código aqui
}

// Desafio 5
function footballPoints(wins, ties) {
  let totalWins = 0;
  for (let indexWins = 0; indexWins <= wins; indexWins += 1) {
    totalWins = wins * 3;
  }
  totalPoints = totalWins + ties;
  return totalPoints;
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
