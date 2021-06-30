// Desafio 1
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, heigth) {
  let multiArea = base * heigth;
  let divArea = multiArea / 2;
  return divArea;
}

// Desafio 3
function splitSentence(string) {
  // string.split([separado quando conter : ' '])
  return string.split([' ']);
}

// Desafio 4
function concatName(array) {
  //Array.of para criar array com elementos estabelecidos.
  array = Array.of(array[array.length - 1], array[0]);
  //join() junta os elementos do array para uma string
  return array.join(', ');
}


// Desafio 5
function footballPoints(win, tie) {
  let vitoria = win * 3;
  let empate = tie;
  let sum = vitoria + empate;
  return sum;
}

// Desafio 6
//let bigNumber = array[0];
function highestCount(array) {
  let bigNumber = array[0];
  let quant = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > bigNumber) {
       bigNumber = array[index];
    }
  }for (let i = 0; i < array.length; i += 1) {
    if (array[i] === bigNumber) {
      quant += 1;
    }
  }
  return quant;
}

let testeArr = [9, 1, 2, 3, 9, 5, 7];
console.log(highestCount(testeArr));

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
