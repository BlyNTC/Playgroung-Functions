// Desafio 1
function compareTrue(a, b) {
  if (a && b === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let resultadoCalculoArea = (base * height) / 2;
  return resultadoCalculoArea;
}

// Desafio 3
function splitSentence(string) {
  let array = string.split(' ');
  return array;
}

// Desafio 4
function concatName(array) {
  let ultimoItem = array[array.length - 1];
  let primeiroItem = array[0];
  return ultimoItem.concat(', ', primeiroItem);
}

// Desafio 5
function footballPoints(wins, ties) {
  let vitoria = wins * 3;
  let totalDePontos = vitoria + ties;
  return totalDePontos;
}

// Desafio 6
function highestCount(array) {
  let numeroMaior = Math.max(...array); // ... para achar um valor maior em um array
  let quantidadeRepeticao = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (numeroMaior === array[i]) {
      quantidadeRepeticao += 1;
    }
  }
  return quantidadeRepeticao;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = Math.abs(cat1 - mouse);
  let distanciaCat2 = Math.abs(cat2 - mouse);
  let gato;
  if (distanciaCat1 < distanciaCat2) {
    gato = 'cat1';
  } else if (distanciaCat2 < distanciaCat1) {
    gato = 'cat2';
  } else {
    gato = 'os gatos trombam e o rato foge';
  }
  return gato;
}

// Desafio 8
function fizzBuzz(array) {
  let string = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 3 === 0 && array[i] % 5 === 0) {
      string.push('fizzBuzz');
    } else if (array[i] % 3 === 0) {
      string.push('fizz');
    } else if (array[i] % 5 === 0) {
      string.push('buzz');
    } else {
      string.push('bug!');
    }
  }
  return string;
}

// Desafio 9
function encode(string) {
  let resultado = '';
  for (let i = 0; i < string.length; i += 1) {
    switch (string[i]) {
      case 'a':
        resultado += '1';
        break;
      case 'e':
        resultado += '2';
        break;
      case 'i':
        resultado += '3';
        break;
      case 'o':
        resultado += '4';
        break;
      case 'u':
        resultado += '5';
        break;
      default:
        resultado += string[i];
    }
  }
  return resultado;
}

function decode(string) {
  let resultado = '';
  for (let i = 0; i < string.length; i += 1) {
    switch (string[i]) {
      case '1':
        resultado += 'a';
        break;
      case '2':
        resultado += 'e';
        break;
      case '3':
        resultado += 'i';
        break;
      case '4':
        resultado += 'o';
        break;
      case '5':
        resultado += 'u';
        break;
      default:
        resultado += string[i];
    }
  }
  return resultado;
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
