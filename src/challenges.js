// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true) {
    return true;
  } else {
    return false;
  }
}
// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}
// Desafio 3
function splitSentence(frase) {
  return frase.split(" ")
}
// Desafio 4
function concatName(newArray) {
  let firstPositionInArray = newArray[0]
  let lastPositionInArray = newArray[newArray.length - 1]
  return lastPositionInArray.concat(", ", firstPositionInArray);
}
// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}
// Desafio 6
function highestCount(otherArray) {
  let max = -10;
  let count = 0;
  for (let index = 0; index <= otherArray.length; index += 1) {
    if (otherArray[index] >= max) {
      max = otherArray[index]
    }
  } for (index = 0; index <= otherArray.length; index += 1) {
    if (otherArray[index] === max) {
      count += 1
    }
  }
  return count;
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
