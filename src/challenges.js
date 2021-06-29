const { techList } = require("./challenges2");

// Desafio 1
function compareTrue(param1, param2) {
  if (param1 && param2 === true){
    return true;
  } else {
    return false;
  }
}

compareTrue(true, true);
compareTrue(true, false);
compareTrue(false, true);
compareTrue(false, false);

// Desafio 2
function calcArea(base, height) {
  return base * height / 2;
}

calcArea(10, 50);
calcArea(5, 2);
calcArea(51, 1);




// Desafio 3

function splitSentence(string) {
  let arrayDeStrings = [];
  arrayDeStrings = string.split(' ');
  return arrayDeStrings;
}

splitSentence('go Trybe');
splitSentence('vamo que vamo');
splitSentence('foguete');

// Desafio 4

function concatName(arrayDeStrings) {
  let novoArray = [];
  novoArray = arrayDeStrings[arrayDeStrings.length - 1] + ', ' + arrayDeStrings[0];
  return novoArray;
}

concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']);

// Desafio 5
function footballPoints(wins, ties) {
  winPoints = 3;
  tiePoints = 1;
  totalPoints = (wins * winPoints) + (ties * tiePoints);
  return totalPoints;
}
footballPoints(14, 8);
footballPoints(1, 2);
footballPoints(0, 0);

// Desafio 6
function highestCount(arrayDeNumeros) {
  let maiorNumero = -10; 
  let contador = 0;
  for (let index = 0; index < arrayDeNumeros.length; index += 1) {
    if (arrayDeNumeros[index] > maiorNumero) {
        maiorNumero = arrayDeNumeros[index];
    }
  }
  for (let indice = 0; indice < arrayDeNumeros.length; indice += 1) {
    if (maiorNumero === arrayDeNumeros[indice]) {
      contador += 1
    }
  }
  return contador;  
}

highestCount([9, 1, 2, 3, 9, 5, 7]);
highestCount([0, 4, 4, 4, 9, 2, 1]);
highestCount([0, 0, 0]);
highestCount([1, 9, 2, 3, 9, 5, 7]);
highestCount([-2, -2, -1]);

// Deafio 7
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
