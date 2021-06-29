// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  let array = string.split(' ')
  return array;
}

// Desafio 4
function concatName(array) {
  let concatenacao = array[array.length - 1] + ', ' + array[0];
  return concatenacao;
}

// Desafio 5
function footballPoints(wins, ties) {
  if (wins > 0 || ties > 0) {let totalPoints = (wins * 3) + ties;
  return  totalPoints;
  } else {
    return 0;
  }
}

// Desafio 6
function highestCount(somaMaior) {
  for (let index = 0; index < somaMaior.length; index += 1) {
    if (somaMaior[index] > max)  {
      max += 1;
    }
    return max;
  }
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
    return 'cat1';
  } else if (Math.abs(mouse - cat1) > Math.abs(mouse - cat2)) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
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
