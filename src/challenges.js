// Desafio 1
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true) {
    return 'true';
  } else {
    return 'false';
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  let array = [];
  let word = '';
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === ' ') {
      array.push(word);
      word = '';
    } else {
      word += string[index];
    }    
  }
  array.push(word);
  return array;
}

// Desafio 4
function concatName(array) {
  return (array[array.length-1] + ', ' + array[0]);
}

// Desafio 5
function footballPoints(wins, ties) {
  return 3 * wins + ties;
}

// Desafio 6
function highestCount(array) {
  let maior = 0;
  let cont = 0;
  for (let index in array){
    if (array[index] > maior){
      maior = array[index];
    }
  }
  for (let index in array){
    if (array[index] === maior){
      cont +=1;
    }
  }
  return cont;
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
