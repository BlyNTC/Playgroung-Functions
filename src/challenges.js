// Desafio 1
function compareTrue(v1,v2){
  if (v1 === true && v2 === true){
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base,height) {
  return (base*height/2);
}

// Desafio 3
function splitSentence(string) {
  const array = string.slice().split(" ");
  return array;
}

// Desafio 4
function concatName(array){
  return array[array.length - 1] + ', ' + array[0];
}

// Desafio 5
function footballPoints(wins,ties){
  let totalPoints = 0;
  totalPoints = wins*3 + ties;
  return totalPoints
}

// Desafio 6
function highestCount(array) {
  let contagemRepeticao = 0;
  let maiorNumero = Math.max.apply(null, array);
    for (let i in array) {
      if (maiorNumero === array[i]) {
        contagemRepeticao += 1;
      }
    }
  return contagemRepeticao;
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz(array) {
  for(let i in array) {
    if (array[i] % 3 === 0 && array[i] % 5 === 0) {
      array[i] = 'fizzBuzz';
    } else if (array[i] % 5 === 0 && array[i] % 3 !== 0){
      array[i] = 'buzz';
    } else if (array[i] % 3 === 0 && array[i] % 5 !== 0){
      array[i] = 'fizz';
    } else {
      array[i] = 'bug!';
    }
  }
  return array;
}

// Desafio 9
let stringTemp = 'hi there!';
let nova = stringTemp.replace("i", 3);
console.log(nova);
function encode(string) {
  for (i = 0; i > string.length; i += 1){
    if (string[i] = "i") {
    string[i] = 3;
    }
  }
  
  // for(let i of string) {
  //   if (string[i] = "i") {
  //     string[i] = 3;
  //   }
  // }
  return string;
}

console.log(encode(stringTemp));

function decode(string) {
  // seu código aqui
  return string;
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
