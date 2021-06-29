// Desafio 1
function compareTrue(param1, param2) {
  // seu código aqui
  if (param1 === true && param2 === true ) {
    return true;
  } else if (param1 === false && param2 === false) {
    return false;
  }  else if (param1 === false && param2 === true) {
    return false;
  } else if (param1 === true && param2 === false) {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let triangleArea;
  triangleArea = (base * height) / 2;
  return triangleArea;
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let splitted = [];
  let splittedWord = "";
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === " ") {
      splitted.push(splittedWord)
      splittedWord = "";
    } else {
    splittedWord += string[i]
      }
  }
  splitted.push(splittedWord)
  return splitted
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  let concatenaded = array[array.length -1] + ", " + array[0]
  return concatenaded
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let points = (wins * 3) + ties;
  return points
}

// Desafio 6
function highestCount(array) {
  // seu código aqui
  let biggest = Math.max(...array)
  let repetitions = 0;

  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === biggest) {
      repetitions += 1
    }
  }
  return repetitions
}

console.log(highestCount([-2, -2, -1]))
















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
