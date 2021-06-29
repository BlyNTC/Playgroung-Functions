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
  let highestNumber = 0;

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
function catAndMouse(positionCat1, positionCat2) {
  let positionMouse = 10;
  if (Math.abs(positionCat1 - positionMouse) < Math.abs(positionCat2 - positionMouse)) {
    return 'cat1';
  } else if (Math.abs(positionCat2 - positionMouse) < Math.abs(positionCat1 - positionMouse)) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
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
