// Desafio 1
function compareTrue(param1, param2) {
  return param1 && param2;
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
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(array) {
  let highest;
  let result = 0;
  for (let num of array) {
    if (num === highest) result += 1;
    else if (!highest || highest < num) {
      highest = num;
      result = 1;
    }
  }
  return result;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(mouse - cat1) > Math.abs(mouse - cat2)) return 'cat2';
  if (Math.abs(mouse - cat1) === Math.abs(mouse - cat2)) {
    return 'os gatos trombam e o rato foge';
  }
  return 'cat1';
}

// Desafio 8
function fizzBuzz(array) {
  let arrayReturn = [];
  for (let num of array) {
    let count = 0;
    let result;
    if (num % 3 === 0) {
      count += 1;
      result = 'fizz';
    }
    if (num % 5 === 0) {
      count += 1;
      result = 'buzz';
    }
    if (count === 2) result = 'fizzBuzz';
    if (count === 0) result = 'bug!';
    arrayReturn.push(result);
  }
  return arrayReturn;
}

// Desafio 9
function encode(string) {
  const encoder = {
    a: '1',
    e: '2',
    i: '3',
    o: '4',
    u: '5',
  };
  let result = '';
  for (let character of string) {
    if (character in encoder) result += encoder[character];
    else result += character;
  }
  return result;
}

function decode(string) {
  const decoder = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  let result = '';
  for (let character of string) {
    if (character in decoder) result += decoder[character];
    else result += character;
  }
  return result;
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
