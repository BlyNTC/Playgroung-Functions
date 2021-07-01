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
function fizzBuzz(numbers) {
  // seu código aqui
  let strings = [];
  for (let num of numbers) {
    if (num % 3 === 0 && num % 5 === 0) {
      strings.push('fizzBuzz');
    } else if (num % 3 === 0) {
      strings.push('fizz');
    } else if (num % 5 === 0) {
      strings.push('buzz');
    } else {
      strings.push('bug!');
    }
  }
  return strings;
}

// Desafio 9
function encode(string) {
  // seu código aqui
  let stringModificada = '';
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === 'a') {
      stringModificada += '1';
    } else if (string[index] === 'e') {
      stringModificada += '2';
    } else if (string[index] === 'i') {
      stringModificada += '3';
    } else if (string[index] === 'o') {
      stringModificada += '4';
    } else if (string[index] === 'u') {
      stringModificada += '5';
    } else {
      stringModificada += string[index];
    }
  }
  return stringModificada;
}

function decode(string) {
  // seu código aqui
  let stringModificada = '';
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === '1') {
      stringModificada += 'a';
    } else if (string[index] === '2') {
      stringModificada += 'e';
    } else if (string[index] === '3') {
      stringModificada += 'i';
    } else if (string[index] === '4') {
      stringModificada += 'o';
    } else if (string[index] === '5') {
      stringModificada += 'u';
    } else {
      stringModificada += string[index];
    }
  }
  return stringModificada;
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
