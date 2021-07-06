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

  for (let index in arrayNumber) {
    if ((arrayNumber[index] % 3 === 0) && (arrayNumber[index] % 5 === 0)) {
      arrayString.push('fizzBuzz');
    } else if (arrayNumber[index] % 3 === 0) {
      arrayString.push('fizz');
    } else if (arrayNumber[index] % 5 === 0) {
      arrayString.push('buzz');
    } else {
      arrayString.push('bug!');
    }
  }
  return arrayString;
}

// Desafio 9
function encode(arrayString) {
  // seu código aqui
  arrayString = arrayString.replace(/a/gi, '1');
  arrayString = arrayString.replace(/e/gi, '2');
  arrayString = arrayString.replace(/i/gi, '3');
  arrayString = arrayString.replace(/o/gi, '4');
  arrayString = arrayString.replace(/u/g, '5');
  return arrayString;
}
function decode(stringNumber) {
  // seu código aqui
  stringNumber = stringNumber.replace(/1/gi, 'a');
  stringNumber = stringNumber.replace(/2/gi, 'e');
  stringNumber = stringNumber.replace(/3/gi, 'i');
  stringNumber = stringNumber.replace(/4/gi, 'o');
  stringNumber = stringNumber.replace(/5/g, 'u');
  return stringNumber;
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
