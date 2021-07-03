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

// Desafio 7
function catAndMouse(cat1, cat2) {
  if (cat1 > cat2) {
    return 'cat2';
  } if (cat1 < cat2) {
    return 'cat1';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(fbA) {
  for (let i = 0; i < fbA.length; i += 1) {
    if (fbA[i] % 3 === 0 && fbA[i] % 5 === 0) {
      fbA[i] = 'fizzBuzz';
    } else if (fbA[i] % 5 === 0) {
      fbA[i] = 'buzz';
    } else if (fbA[i] % 3 === 0) {
      fbA[i] = 'fizz';
    } else {
      fbA[i] = 'bug!';
    }
  }
  return fbA;
}

// Desafio 9
function encode(fraseE) {
  let letrasEncode = { 'a':'1', 'e':'2', 'i':'3', 'o':'4', 'u':'5'};
  fraseE = fraseE.replace(/[aeiou]/g, m => letrasEncode[m]);
  return fraseE;
}

function decode(fraseD) {
  let letrasDecode = { '1':'a', '2':'e', '3':'i', '4':'o', '5':'u' };
  fraseD = fraseD.replace(/[12345]/g, m => letrasDecode[m]);
  return fraseD;
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
