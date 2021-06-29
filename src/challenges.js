// Desafio 1
function compareTrue(x, y) {
  // seu código aqui
  if (x && y === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = 0;
  area = (base * height) / 2;
  return (area);
}

// Desafio 3
function splitSentence(phrase) {
  // seu código aqui (Font: https://www.w3schools.com/jsref/jsref_split.asp)
  let result = phrase.split(' ');
  return (result);
}

// Desafio 4
function concatName(names) {
  // seu código aqui
  let lastName = names[names.length - 1];
  let firstName = names[0];
  let lastFirst = lastName + ', ' + firstName;
  return (lastFirst);
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let points = (wins * 3) + (ties * 1);
  return (points);
}

// Desafio 6
function highestCount(numbers) {
  // seu código aqui (Math.max Font: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max)
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
  if ((cat2 - mouse) === (mouse - cat1)) {
    return ('os gatos trombam e o rato foge');
  } else if ((cat1 - mouse) < (cat2 - mouse)) {
    return ('cat1');
  } else {
    return ('cat2');
  }
}

// Desafio 8
function fizzBuzz(fizzBuzzNum) {
  // seu código aqui
  let answerFizzBuzz = [];
  for (let n = 0; n < fizzBuzzNum.length; n += 1) {
    if (fizzBuzzNum[n] % 3 === 0 && fizzBuzzNum[n] % 5 === 0) {
      answerFizzBuzz.push('fizzBuzz');
    } else if (fizzBuzzNum[n]% 3 === 0) {
      answerFizzBuzz.push('fizz');
    } else if (fizzBuzzNum[n] % 5 === 0) {
      answerFizzBuzz.push('buzz');
    } else {
      answerFizzBuzz.push('bug!');
    }
  }
  return (answerFizzBuzz);
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
