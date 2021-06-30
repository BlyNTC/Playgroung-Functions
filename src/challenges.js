// Desafio 1
function compareTrue(num1, num2) {
  if (num1 > 0 && num2 > 0) {
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
  let array = string.split(' ');
  return array;
}

// Desafio 4
function concatName(array) {
  let string = '';
  let first = array[0];
  let last = array[array.length - 1];
  return string.concat(last + ', ' + first);
}

// Desafio 5
function footballPoints(wins, ties) {
  let totalWins = 0;
  for (let indexWins = 0; indexWins <= wins; indexWins += 1) {
    totalWins = wins * 3;
  }
  let totalPoints = totalWins + ties;
  return totalPoints;
}

// Desafio 6
function highestCount(numbers) {
  let highest = numbers[0];
  for (let index in numbers) {
    if (highest < numbers[index]) {
      highest = numbers[index];
    }
  }
  let count = 0;
  for (let index in numbers) {
    if (highest === numbers[index]) {
      count += 1;
    }
  }
  return count;
}
console.log(highestCount([0, 4, 4, 4, 9, 2, 1]))
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let mouseCat1Distance = Math.abs(mouse - cat1);
  let mouseCat2Distance = Math.abs(mouse - cat2);
  if (mouseCat1Distance == mouseCat2Distance) {
    return 'os gatos trombam e o rato foge';
  } else if (mouseCat1Distance < mouseCat2Distance) {
    return 'cat1';
  } else {
    return 'cat2';
  }
}

// Desafio 8
function fizzBuzz(numbers) {
  let result = [];
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 3 === 0 && numbers[index] % 5 === 0) {
      result.push('fizzBuzz');
    } else if (numbers[index] % 3 === 0) {
      result.push('fizz');
    } else if (numbers[index] % 5 === 0) {
      result.push('buzz');
    } else {
      result.push('bug!');
    }
  }
  return result;
}

// Desafio 9
function encode(string) {
  let vowels = {
    'a':'1',
    'e':'2',
    'i':'3',
    'o':'4',
    'u':'5'
  };
  newString = string.replace(/[aeiou]/g, m => vowels[m]);
  return newString;
}

function decode(string) {
  let numbers = {
    '1':'a',
    '2':'e',
    '3':'i',
    '4':'o',
    '5':'u'
  };
  newString = string.replace(/[12345]/g, m => numbers[m]);
  return newString;
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
