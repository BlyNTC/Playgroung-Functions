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
function catAndMouse(mouse, cat1, cat2) {

}

// Desafio 8
function fizzBuzz(arrayFrase) {
  resultado = [];
  for (let index = 0; index < arrayFrase.length; index += 1) {
    if (arrayFrase[index] % 3 === 0 && arrayFrase[index] % 5 === 0) {
      resultado.push("fizzBuzz")
    } else if (arrayFrase[index] % 5 === 0) {
      resultado.push("buzz")
    } else if (arrayFrase[index] % 3 === 0) {
      resultado.push("fizz")
    } else {
      resultado.push("bug!")
    }
  }
  return resultado;
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
