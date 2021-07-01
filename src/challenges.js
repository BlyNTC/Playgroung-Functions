// Desafio 1

function compareTrue(a1, a2) {
  if (a1 === true && a2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(b, h) {
  return (b * h) / 2;
}

// Desafio 3
function splitSentence(arraySentence) {
  return arraySentence.split(' ');
}

// Desafio 4
function concatName(arSentence) {
  let lastItem = arSentence[arSentence.length - 1];
  let firstItem = arSentence[0];
  let concat = lastItem + ', ' + firstItem;
  return concat;
}

// Desafio 5
function footballPoints(wins, ties) {
  let win = wins * 3;
  return win + ties;
}

// Desafio 6
function highestCount(ar) {
  let highestValue = ar[0];
  let count = 0;  
  for (let i = 0; i < ar.length; i += 1) {
    if (ar[i] >= highestValue) {
      if (ar[i] !== highestValue) {
        highestValue = ar[i];
        count = 0;
      }
      count += 1;
    }  
  }
  return count;
}
console.log(highestCount([0, 4, 9, 9, 9, 2, 1]));

// Desafio 7
function catAndMouse(cat1, cat2) {
  if (cat1 > cat2) {
    // return 'cat2';
    console.log('cat2');
  } else if (cat1 < cat2) {
    // return 'cat1';
    console.log('cat1');
  } else {
    // return 'os gatos trombam e o rato foge';
    console.log('os gatos trombam e o rato foge');
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
