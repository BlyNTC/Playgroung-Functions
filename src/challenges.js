// Desafio 1
function compareTrue(par1, par2) {
  if (par1 === true && par2 === true) {
    return true;
  }
    else {
      return false;
    }
}

// Desafio 2
function calcArea(base, height) {
  let result = 0;
  result = (base * height) / 2;
  return result;
}

// Desafio 3
function splitSentence(stringFrase) {
  let stringToArray = stringFrase.split(" ");
  return stringToArray;
}


// Desafio 4
function concatName(parArray) {
  let concatenamento = [parArray[parArray.length-1], parArray[0]]
  return concatenamento.join(', ');
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = 0;
  points = (wins * 3 + ties)
  return points;
}

// Desafio 6
function highestCount(numbersArray) {
  let maior = Math.max(numbersArray)
  let contador = 0;
  for (let index = 0; index < numbersArray.length; index += 1)
  contador += 1;
  return contador;
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
