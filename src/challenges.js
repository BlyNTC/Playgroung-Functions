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
  totalPoints = totalWins + ties;
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

// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
  // if (cat1 < cat2 && mouse <= cat2) {
  //   return 'cat1';
  // } else if (cat1 > cat2 && mouse >= cat1) {
  //   return 'cat2';
  // } else {
  //   return 'os gatos trombam e o rato foge';
  // }
}

// Desafio 8
function fizzBuzz(numbers) {
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
