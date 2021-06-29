// Desafio 1
function compareTrue(sum1, sum2) {
  if (sum1 === true && sum2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let calculo = (base * height) / 2;
  return calculo;
}

// Desafio 3
function splitSentence(frase) {
  let texto = frase.split(' ');
  return texto;
}

// Desafio 4
function concatName(ultimaPrimeira) {
  let string = ultimaPrimeira[ultimaPrimeira.length - 1] + ', ' + ultimaPrimeira[0];
  return string;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = wins * 3 + ties;
  return pontos;
}

// Desafio 6
function highestCount(array) {
  let maiorNumero = Math.max.apply(null, array);
  let result = 0;

  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === maiorNumero) {
      result += 1;
    }
  }
  return result;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat2 - mouse) < Math.abs(cat1 - mouse)) {
    return 'cat2';
  } else if (Math.abs(cat2 - mouse) > Math.abs(cat1 - mouse)) {
    return 'cat1';
  } else if (Math.abs(cat2 - mouse) === Math.abs(cat1 - mouse)) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(array) {
  let resultadoDoArray = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      resultadoDoArray.push('fizzBuzz');
    } else if (array[index] % 3 === 0) {
      resultadoDoArray.push('fizz');
    } else if (array[index] % 5 === 0) {
      resultadoDoArray.push('buzz');
    } else {
      resultadoDoArray.push('bug!');
    }
  }
  return resultadoDoArray;
}

// Desafio 9
function encode(string) {
  let texto = string.split('');
  for (let result = 0; result < texto.length; result += 1) {
    switch (texto[result]) {
    case 'a':
      texto[result] = '1';
      break;
    case 'e':
      texto[result] = '2';
      break;
    case 'i':
      texto[result] = '3';
      break;
    case 'o':
      texto[result] = '4';
      break;
    case 'u':
      texto[result] = '5';
      break;
    default:
      break;
    }
  }
  return texto.join('');
}
function decode(string) {
  let texto = string.split('');
  for (let result = 0; result < texto.length; result += 1) {
    switch (texto[result]) {
    case '1':
      texto[result] = 'a';
      break;
    case '2':
      texto[result] = 'e';
      break;
    case '3':
      texto[result] = 'i';
      break;
    case '4':
      texto[result] = 'o';
      break;
    case '5':
      texto[result] = 'u';
      break;
    default:
      break;
    }
  }
  return texto.join('');
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
