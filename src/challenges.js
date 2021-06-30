// Desafio 1
function compareTrue(comp1, comp2) {
  if ((comp1 === true) && (comp2 === true)) {
    return true;
  } return false;
}

// Desafio 2
function calcArea(base, height) {
  let result = (base * height) / 2;
  return result;
}

// Desafio 3
function splitSentence(string) {
  let divisor = string.split(' ');
  return divisor;
}

// Desafio 4
function concatName(string) {
  let virgula = ', ';
  let primeira = string[0];
  let ultima = string[(string.length - 1)];
  let result = ultima + virgula + primeira;
  return result;
}

// Desafio 5
function footballPoints(wins, ties) {
  wins *= 3;
  ties *= 1;
  let result = (wins + ties);
  return result;
}


// Desafio 6
function highestCount(n) {
  let vezes = 0;
  let maior = n[0];
  for (let i of n) {
    if (i > maior) {
      maior = i;
    }
  }
  for (let i of n) {
    if (i === maior) {
      vezes += 1;
    }
  }
  return vezes;
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
