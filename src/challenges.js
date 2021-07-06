// Desafio 1

function compareTrue(booleano1, booleano2) {
  return booleano1 && booleano2;
}
//console.log(compareTrue(false,false));

// Desafio 2

function calcArea(base, heigth) {
  let base1 = base;
  let altura = heigth;

  let calculaArea = (base1 * altura) / 2;

  return calculaArea;
}

// Desafio 3
function splitSentence(string) {
  let array = string.split(' ');
  return array;
}
// console.log(splitSentence("Go trybe"));

// Desafio 4
function concatName(array) {
  let primeiraPosicao = array[0];
  let index = array.length - 1;
  let ultimaPosicao = array[index];
  return ultimaPosicao + ', ' + primeiraPosicao;
}
// console.log(concatName(["foguete", "não", "tem","re"]))

// Desafio 5
function footballPoints(wins, ties) {
  let pontucaoTotal = wins * 3 + ties;
  return pontucaoTotal;
}
console.log(footballPoints(14, 8));
// Desafio 6
function highestCount(numeros) {
  let contRepetido = 0;

  let maiorNumero = Math.max(...numeros);
  for (let i in numeros) {
    if (maiorNumero === numeros[i]) {
      contRepetido += 1;
    }
  }

  return contRepetido;
}
// console.log(highestCount([1, 1, 1, 8, 8]));
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distancia1 = Math.abs(mouse - cat1);
  let distancia2 = Math.abs(mouse - cat2);
  if (distancia1 < distancia2) {
    return 'cat1';
  }
  if (distancia2 < distancia1) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(array) {
  let resultado = [];
  for (let index = 0; index < array.length; index += 1) {
    let element = array[index];
    if (element % 3 === 0 && element % 5 === 0) {
      resultado.push('fizzBuzz');
    } else if (element % 3 === 0) {
      resultado.push('fizz');
    } else if (element % 5 === 0) {
      resultado.push('buzz');
    } else {
      resultado.push('bug!');
    }
  }
  return resultado;
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
