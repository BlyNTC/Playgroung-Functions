// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 && valor2) {
    return true;
  } else(valor1 && valor2);
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return base * height / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(phrase) {
  return phrase[phrase.length - 1] + ', ' + phrase[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(numeros) {
  let numeroMaior = numeros[0];
  let repeticao = 0;
  for (let i = 0; i < numeros.length; i += 1) {
    if (numeros[i] > numeroMaior) {
      numeroMaior = numeros[i];
    }
  }
  for (i = 0; i < numeros.length; i += 1) {
    if (numeroMaior == numeros[i]) {
      repeticao += 1;
    }
  }
  return repeticao;
}


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs(mouse - cat1);
  let distanceCat2 = Math.abs(mouse - cat2);
  if (distanceCat1 > distanceCat2) {
    return 'cat2';
  } else if (distanceCat2 > distanceCat1) {
    return 'cat1';
  } else {
    return "os gatos trombam e o rato foge";
  }
}

// Desafio 8
function fizzBuzz() {

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
