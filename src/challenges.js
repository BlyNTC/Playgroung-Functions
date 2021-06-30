// Desafio 1
function compareTrue(param1, param2) {
  // seu código aqui
  let valor;
  if (param1 === true && param2 === true) {
    valor = true;
  } else {
    valor = false;
  }
  return valor;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let areaTriangulo = (base * height) / 2;

  return areaTriangulo;
}

// Desafio 3
function splitSentence(frase) {
  // seu código aqui
  let splitFrase = frase.split(' ');

  return splitFrase;
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  let resultado = '';
  resultado += array[array.length - 1];
  resultado += ', ';
  resultado += array[0];

  return resultado;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let totalPontos = wins * 3 + ties * 1;
  return totalPontos;
}

// Desafio 6
function highestCount(numbers) {
  // seu código aqui
  let countMaior = 0;
  let maior = numbers[0];
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > maior) {
      maior = numbers[index];
    }
  }
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] === maior) {
      countMaior += 1;
    }
  }
  return countMaior;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distCat1 = Math.abs(mouse - cat1);
  let distCat2 = Math.abs(mouse - cat2);
  let resultado = '';
  if (distCat1 < distCat2) {
    resultado = 'cat1';
  } else if (distCat1 > distCat2) {
    resultado = 'cat2';
  } else if (distCat1 === distCat2) {
    resultado = 'os gatos trombam e o rato foge';
  }
  return resultado;
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
