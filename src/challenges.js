// Desafio 1
function compareTrue(a, b) {
  // seu código aqui
  if (a === true && b === true) {
    return true; }
  else if (a === true && b === false) {
    return false; }
  else if (a === false && b === true) {
    return false; }
  else if (a === false && b === false) {
    return false; }
}  
// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return ((base * height) / 2);
}
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
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === maior) {
      vezes += 1;
    }
  }
  return vezes;
}
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return "cat1";
  } else if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) {
    return "cat2";
  } else if (Math.abs(cat1 - mouse) === Math.abs(cat2 - mouse)) {
    return "os gatos trombam e o rato foge";
  }
}
// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  let frases = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 3 === 0 && array[i] % 5 === 0) {
      frases.push('fizzBuzz');
    } else if (array[i] % 5 === 0) {
      frases.push('buzz');
    } else if (array[i] % 3 === 0) {
      frases.push('fizz'); 
    } else {
      frases.push('bug!');
    }
  }
  return frases;
}
// Desafio 9
function encode(string) {
  // seu código aqui
  string = string.replace(/a/g, '1');
  string = string.replace(/e/g, '2');
  string = string.replace(/i/g, '3');
  string = string.replace(/o/g, '4');
  return string.replace(/u/g, '5');
}
function decode(string2) {
  // seu código aqui
  string2 = string2.replace(/1/g, 'a');
  string2 = string2.replace(/2/g, 'e');
  string2 = string2.replace(/3/g, 'i');
  string2 = string2.replace(/4/g, 'o');
  return string2.replace(/5/g, 'u');
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
