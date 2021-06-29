// Desafio 1
function compareTrue(p1, p2) {
  if (p1 && p2) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = 0;

  area = (base * height) / 2;

  return area;
}

// Desafio 3
function splitSentence(frase) {

  let arrayAuxiliar = frase.split('');
  let arrayFinal = [];
  let n = 0;
  let palavra = '';

  for (let index = 0; index <= arrayAuxiliar.length; index += 1) {

    if ((arrayAuxiliar[index] != ' ') && (index < arrayAuxiliar.length)) {
      palavra = palavra.concat(arrayAuxiliar[index]);
    } else {
      arrayFinal[n] = palavra;
      n += 1;
      palavra = '';
    }
  }
  return arrayFinal;
}

// Desafio 4
function concatName(arrayDeStrings) {
  return arrayDeStrings[(arrayDeStrings.length - 1)] + ', ' + arrayDeStrings[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins*3) + (ties)
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
