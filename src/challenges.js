// Desafio 1
function compareTrue(a, b) {
  // seu código aqui
  if (a && b) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  // seu código aqui
  return sentence.split(' ');
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(numbers) {
  // seu código aqui
  let maxNumber = Math.max(...numbers);
  let timesRepeat = 0;
  for (let index of numbers) {
    if (maxNumber === index) {
      timesRepeat += 1;
    }
  }
  return (timesRepeat);
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  const positionCat1 = Math.abs(cat1 - mouse);
  const positionCat2 = Math.abs(cat2 - mouse);
  if (positionCat1 === positionCat2) return 'os gatos trombam e o rato foge';
  if (positionCat1 > positionCat2) return 'cat2';
  return 'cat1';
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
