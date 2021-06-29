// Desafio 1
function compareTrue(bool1, bool2) {
  if (bool1 === true && bool2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(receivedString) {
  let splitedSentence = receivedString.split(' ');
  return splitedSentence;
}

// Desafio 4
function concatName(arrayName) {
  return `${arrayName[arrayName.length - 1]}, ${arrayName[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(arrayNumeros) {
  let highestNumber = arrayNumeros[0];
  for (let i of arrayNumeros) {
    if (i > highestNumber) {
      highestNumber = i;
    }
  }
  let count = 0;
  for (let i of arrayNumeros) {
    if (i === highestNumber) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(positionMouse, positionCat1, positionCat2) {
  let winnerCat;
  if (Math.abs(positionCat1 - positionMouse) < Math.abs(positionCat2 - positionMouse)) {
    winnerCat = 'cat1';
  } else if (Math.abs(positionCat2 - positionMouse) < Math.abs(positionCat1 - positionMouse)) {
    winnerCat = 'cat2';
  } else {
    winnerCat = 'os gatos trombam e o rato foge';
  }
  return winnerCat;
}

// Desafio 8
function fizzBuzz(arrayNumeros) {
  let result = [];
  for (let i of arrayNumeros) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push('fizzBuzz');
    } else if (i % 3 === 0 && i % 5 !== 0) {
      result.push('fizz');
    } else if (i % 3 !== 0 && i % 5 === 0) {
      result.push('buzz');
    } else {
    result.push('bug!');
    }
  }
  return result;
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
