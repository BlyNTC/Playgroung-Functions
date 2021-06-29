// Desafio 1
function compareTrue(arg1, arg2) {
  if (arg1 && arg2) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return base*height/2; 
}

// Desafio 3
function splitSentence(string) {
  let separator = " ";
  let arrayOfStrings = string.split(separator);

  return arrayOfStrings;

}

// Desafio 4
function concatName(array) {
  let nameConcat = `${array[array.length - 1]}, ${array[0]}`;
  return nameConcat;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins*3 + ties);
}

// Desafio 6
function highestCount(array) {
  let count = 0;
  let highest = array[0]; 
  
  for (let i = 0; i < array.length; i+=1) {
    if (array[i] >= highest) {
      highest = array[i];
    };
  };
  for (let value of array) {
    if (value === highest) {
      count+=1;
    };
  };

  return count;
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
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
