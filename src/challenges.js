// Desafio 1
function compareTrue(a, b) {
  // seu código aqui
  if (a === true && b === true) {
    return true;
  }
  else if (a === true && b === false) {
    return false;
  }
  else if (a === false && b === true) {
    return false;
  }
  else if (a === false && b === false) {
    return false;
  }
}
console.log(compareTrue(false,false));  
// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return ((base * height) / 2);
}
console.log(calcArea(10, 50));

// Desafio 3
function splitSentence(array) {
  // seu código aqui
  let separa = array.split(' ');
  return separa;
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  let primeiro = array[0];
  let ultimo = array[array.length - 1];
  return ultimo + ',' + ' ' + primeiro;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let empate = ties * 1;
  let vitoria = wins * 3;
  return empate + vitoria;
}

// Desafio 6
function highestCount(array) {
  // seu código aqui
  let vezes = 0;
  let maior = Math.max.apply(null, array);
  for (let i = 0; i < array.length; i += 1){
    if (array[i] == maior) {
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
