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
function encode(toEncodeString) {
  let encodedString = toEncodeString;
  encodedString = encodedString.replace(/a/g, '1');
  encodedString = encodedString.replace(/e/g, '2');
  encodedString = encodedString.replace(/i/g, '3');
  encodedString = encodedString.replace(/o/g, '4');
  encodedString = encodedString.replace(/u/g, '5');
  return encodedString;
}
function decode(toDecodeString) {
  let decodedString = toDecodeString;
  decodedString = decodedString.replace(/1/g, 'a');
  decodedString = decodedString.replace(/2/g, 'e');
  decodedString = decodedString.replace(/3/g, 'i');
  decodedString = decodedString.replace(/4/g, 'o');
  decodedString = decodedString.replace(/5/g, 'u');
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
