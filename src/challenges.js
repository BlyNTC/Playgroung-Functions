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

function highestNumber(numArray) {
  let highest = -Infinity;
  for (const number of numArray) {
    if (number > highest) {
      highest = number;
    }
  }
  return highest;
}

function countRepeats(arr) {
  let counts = {};
  for (const num of arr) {
    // if key is undefined, create it, else increase it
    counts[num] = counts[num] === undefined ? 1 : counts[num] + 1;
  }
  return counts;
}

// Desafio 6
function highestCount(numArray) {
  let highest = highestNumber(numArray);
  let counts = countRepeats(numArray);
  return counts[highest];
}
console.log(highestCount([1, 9, 2, 3, 9, 5, 7]));

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
function encode(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let code = '';
  for (const letter of str) {
    if (vowels.indexOf(letter) !== -1) {
      code += vowels.indexOf(letter) + 1;
    } else {
      code += letter;
    }
  }
  return code;
}
function decode(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let numbers = [1, 2, 3, 4, 5];
  let code = '';
  for (const letter of str) {
    if (numbers.indexOf(Number(letter)) !== -1) {
      code += vowels[Number(letter) - 1];
    } else {
      code += letter;
    }
  }
  return code;
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
