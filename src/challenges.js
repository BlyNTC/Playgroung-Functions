// Funções auxiliares
function maxNumber(array) {
  let max = array[0];
  for (let num of array) {
    if (num > max) { max = num; }
  }
  return max;
}

function fizzBuzzNumberCheck(number) {
  if (number % 3 === 0 && number % 5 === 0) { return 'fizzBuzz'; }
  if (number % 3 === 0) { return 'fizz'; }
  if (number % 5 === 0) { return 'buzz'; }
  return 'bug!';
}

// Desafio 1
function compareTrue(param1, param2) {
  // seu código aqui
  return param1 && param2;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let word = '';
  let splitedSentence = [];

  for (let str of string) {
    if (str !== ' ') {
      word += str;
    } else if (word.length > 0) {
      splitedSentence.push(word);
      word = '';
    }
  }
  if (word.length > 0) { splitedSentence.push(word); }
  return splitedSentence;
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
function highestCount(array) {
  // seu código aqui
  let numberCount = 0;
  let max = maxNumber(array);

  for (let num of array) {
    if (num === max) { numberCount += 1; }
  }
  return numberCount;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let ca1ToMouse = Math.abs(mouse - cat1);
  let cat2ToMouse = Math.abs(mouse - cat2);
  let result;

  if (ca1ToMouse === cat2ToMouse) {
    result = 'os gatos trombam e o rato foge';
  } else if (ca1ToMouse > cat2ToMouse) {
    result = 'cat2';
  } else {
    result = 'cat1';
  }
  return result;
}

// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  let fizzBuzzArray = [];

  for (let num of array) {
    fizzBuzzArray.push(fizzBuzzNumberCheck(num));
  }
  return fizzBuzzArray;
}

// Desafio 9
function encode(string) {
  // seu código aqui
  const vowelToNumber = {
    a: '1',
    e: '2',
    i: '3',
    o: '4',
    u: '5',
  };
  let encodedString = '';
  let aux;

  for (let str of string) {
    aux = str in vowelToNumber ? vowelToNumber[str] : str;
    encodedString += aux;
  }
  return encodedString;
}

function decode(string) {
  // seu código aqui
  const numberToVowel = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  let decodedString = '';
  let aux;

  for (let str of string) {
    aux = str in numberToVowel ? numberToVowel[str] : str;
    decodedString += aux;
  }
  return decodedString;
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
