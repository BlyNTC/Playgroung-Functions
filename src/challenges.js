// Desafio 1
function compareTrue(boolean1, boolean2) {
  if (boolean1 === true && boolean2 === true) {
    return true;
  }
  return false;
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
  return array[array.length - 1].concat(', ').concat(array[0]);
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(array) {
  let higher = array[0];
  let counter = 0;
  for (let number of array) {
    if (number > higher) {
      higher = number;
    }
  }
  for (let number of array) {
    if (number === higher) {
      counter += 1;
    }
  }
  return counter;
}

highestCount([1, 9, 2, 3, 9, 5, 7]);

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dist1 = Math.abs(mouse - cat1);
  let dist2 = Math.abs(mouse - cat2);
  if (dist1 === dist2) {
    return 'os gatos trombam e o rato foge';
  }
  if (dist1 > dist2) {
    return 'cat2';
  }
  return 'cat1';
}

// Desafio 8
function fizzBuzz(array) {
  return array.map(function (element) {
    if (element % 15 === 0) {
      return 'fizzBuzz';
    }
    if (element % 3 === 0) {
      return 'fizz';
    } if (element % 5 === 0) {
      return 'buzz';
    }
    return 'bug!';
  });
}

// Desafio 9
function encode(string) {
  return string.replace(/a/ig, '1').replace(/e/ig, '2').replace(/i/ig, '3').replace(/o/ig, '4')
    .replace(/u/ig, '5');
}

function decode(string) {
  return string.replace(/1/ig, 'a').replace(/2/ig, 'e').replace(/3/ig, 'i').replace(/4/ig, 'o')
    .replace(/5/ig, 'u');
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
