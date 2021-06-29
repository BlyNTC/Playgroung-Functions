// Desafio 1
function compareTrue(bool1,bool2) {
  if (bool1 === true && bool2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let triangleArea = (base * height) / 2;
  return triangleArea;
}

// Desafio 3
function splitSentence(sentence) {
  splittedSentence = sentence.split(' ')
  return splittedSentence;
}

// Desafio 4
function concatName(array) {
  let string = array[array.length - 1] +', ' + array[0];
  return string;
}

// Desafio 5
function footballPoints(wins, ties) {
  pointsWin = 3;
  pointsTie = 1;
  totalPoints = (wins * pointsWin) + (ties * pointsTie);
  return totalPoints;
}

// Desafio 6
function highestCount(numbers) {
  let addNumber = 0;
  let highestNumber = numbers[0];
  for (index in numbers) {
    for (index2 in numbers) {
      if (highestNumber < numbers[index2]) {
        highestNumber = numbers[index2];
      }
    }
  }
  for (index in numbers) {
    if (highestNumber === numbers[index]) {
      addNumber += 1;
    }
  }
  return addNumber;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  positionCat1 = Math.abs(mouse - cat1);
  positionCat2 = Math.abs(mouse - cat2);
  if (positionCat2 < positionCat1) {
    return 'cat2';
  } else if(positionCat1 < positionCat2) {
    return 'cat1';
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
