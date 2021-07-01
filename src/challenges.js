// Desafio 1
function compareTrue(param1, param2) {
  if (param1 && param2) return true;
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  let strArray;

  // https://stackoverflow.com/questions/20169809/pushing-each-word-to-an-array

  strArray = string.split(' ');

  return strArray;
}

// Desafio 4
function concatName(nameArray) {
  let name = `${nameArray[nameArray.length - 1]}, ${nameArray[0]}`;

  return name;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = wins * 3 + ties;

  return pontos;
}

// Desafio 6
// https://dmitripavlutin.com/javascript-array-sort-numbers/
function highestCount(numberArray) {
  let sortedArray = numberArray.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
  });
  let counter = 0;
  for (let i = 0; i < sortedArray.length; i++) {
    if (sortedArray[i] == sortedArray[sortedArray.length - 1]) {
      counter++;
    }
  }
  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) return 'cat2';
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) return 'cat1';
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(arr) {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0 && arr[i] % 5 === 0) answer[i] = 'fizzBuzz';
    else if (arr[i] % 3 === 0 && answer[i] !== 'fizzBuzz') answer[i] = 'fizz';
    else if (arr[i] % 5 === 0 && answer[i] !== 'fizzBuzz') answer[i] = 'buzz';
    else answer[i] = 'bug!';
  }
  return answer;
}

// Desafio 9
function encode(string) {
  let answer = '';
  for (i in string) {
    if (string[i] === 'a') answer += '1';
    else if (string[i] === 'e') answer += '2';
    else if (string[i] === 'i') answer += '3';
    else if (string[i] === 'o') answer += '4';
    else if (string[i] === 'u') answer += '5';
    else answer += string[i];
  }
  return answer;
}

function decode(string) {
  let answer = '';
  for (i in string) {
    if (string[i] === '1') answer += 'a';
    else if (string[i] === '2') answer += 'e';
    else if (string[i] === '3') answer += 'i';
    else if (string[i] === '4') answer += 'o';
    else if (string[i] === '5') answer += 'u';
    else answer += string[i];
  }
  return answer;
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
