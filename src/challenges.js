// Desafio 1
function compareTrue(a, b) {
  return a && b;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(arrayDeStrings) {
  return `${arrayDeStrings[arrayDeStrings.length - 1]}, ${arrayDeStrings[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(numArray) {
  let highest = -Infinity;
  let counts = {};
  for (const number of numArray) {
    if (number > highest) {
      highest = number;
    }
    if (counts[number]) {
      counts[number] += 1;
    } else {
      counts[number] = 1;
    }
  }
  return counts[highest];
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let msg = 'os gatos trombam e o rato foge';
  let distCat1 = Math.abs(mouse - cat1);
  let distCat2 = Math.abs(mouse - cat2);
  if (distCat1 < distCat2) {
    msg = 'cat1';
  } else if (distCat1 > distCat2) {
    msg = 'cat2';
  }
  return msg;
}

// Desafio 8
function fizzBuzz(numArray) {
  let msgArray = [];
  for (const number of numArray) {
    if (number % 3 === 0 && number % 5 === 0) {
      msgArray.push('fizzBuzz');
    } else if (number % 3 === 0) {
      msgArray.push('fizz');
    } else if (number % 5 === 0) {
      msgArray.push('buzz');
    } else {
      msgArray.push('bug!');
    }
  }
  return msgArray;
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
