// Desafio 1
function compareTrue(a, b) {
  return a && b === true;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(array) {
  return array.split(' ');
}

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3 + ties * 1);
}

// Desafio 6
function highestCount(array) {
  let numeroRepete = 0;
  for (let i in array) {
    if (array[i] === Math.max(...array)) {
      numeroRepete += 1;
    }
  }
  return numeroRepete;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
    return 'cat1';
  } if (Math.abs(mouse - cat1) > Math.abs(mouse - cat2)) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(array) {
  let retorno = [];
  for (let i in array) {
    if ((array[i] % 3 === 0) && (array[i] % 5 !== 0)) {
      retorno.push('fizz');
    } if ((array[i] % 5 === 0) && (array[i] % 3 !== 0)) {
      retorno.push('buzz');
    } if ((array[i] % 3 === 0) && (array[i] % 5 === 0)) {
      retorno.push('fizzBuzz');
    } if ((array[i] % 3 !== 0) && (array[i] % 5 !== 0)) {
      retorno.push('bug!');
    }
  }
  return retorno;
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
