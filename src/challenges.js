// Desafio 1
function compareTrue(verdade1, verdade2) {
  // seu código aqui
  if (verdade1 && verdade2) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base*height)/2;
}

// Desafio 3
function splitSentence(str) {
  // seu código aqui
  return str.split(' ');
}

// Desafio 4
function concatName(arrStr) {
  // seu código aqui
  return arrStr[arrStr.length - 1] + ', ' + arrStr[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let winsPoints = wins*3;
  let tiesPoints = ties*1;
  return winsPoints + tiesPoints;
}

// Desafio 6
function highestCount(arrNumbers) {
  // seu código aqui
  let maiorNum = arrNumbers[0];
  let contador = 0;
  for (n1 in arrNumbers) {
    if (arrNumbers[n1] > maiorNum) {
      maiorNum = arrNumbers[n1];
    }
  }
  for (n2 in arrNumbers) {
    if (arrNumbers[n2] === maiorNum) {
      contador += 1;
    }
  }
  return contador;
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
