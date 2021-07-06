// Desafio 1
function compareTrue(parametro01, parametro02) {
  // seu código aqui
  if (parametro01 === true && parametro02 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(someSentence) {
  // seu código aqui
  return someSentence.split(' ');
}

// Desafio 4
function concatName(arrayList) {
  // seu código aqui
  return `${arrayList[arrayList.length - 1]}, ${arrayList.shift()}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return (wins * 3) + (ties * 1);
}

// Desafio 6
function highestCount(arrayNumber) {
  // seu código aqui
  let higherNumber = Math.max(...arrayNumber);
  let repeatNumber = 0;

  for (let index = 0; index < arrayNumber.length; index += 1) {
    if (arrayNumber[index] === higherNumber) {
      repeatNumber += 1;
    }
  }
  return repeatNumber;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distanceCat1 = Math.abs(mouse - cat1);
  let distanceCat2 = Math.abs(mouse - cat2);

  if (distanceCat1 === distanceCat2) {
    return 'os gatos trombam e o rato foge';
  }
  if (distanceCat2 > distanceCat1) {
    return 'cat1';
  }
  return 'cat2';
}

// Desafio 8
function fizzBuzz(arrayNumber) {
  // seu código aqui
  let arrayString = [];

  for (let index = 0; index < arrayNumber.length; index += 1) {
    if ((arrayNumber[index] % 3 === 0) && (arrayNumber[index] % 5 === 0)) {
      arrayString.push('fizzBuzz');
    } else if (arrayNumber[index] % 3 === 0) {
      arrayString.push('fizz');
    } else if (arrayNumber[index] % 5 === 0) {
      arrayString.push('buzz');
    } else if ((arrayNumber[index] % 3 !== 0) && (arrayNumber[index] % 5 !== 0)) {
      arrayString.push('bug!');
    }
  }
  return arrayString;
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
