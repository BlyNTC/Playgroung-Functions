/* eslint-disable sonarjs/no-identical-functions */
/* eslint-disable sonarjs/cognitive-complexity */
// Desafio 1
function compareTrue(valor1, valor2) {
  let resultado;

  if (valor1 && valor2) {
    resultado = true;
  } else {
    resultado = false;
  }
  return resultado;
}

// Desafio 2
function calcArea(base, height) {
  const area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(frase) {
  const array = frase.split(' ');
  return array;
}

// Desafio 4
function concatName(strings) {
  const primeiroUltimo = `${strings[strings.length - 1]}, ${strings[0]}`;
  return primeiroUltimo;
}

// Desafio 5
function footballPoints(wins, ties) {
  const pontos = wins * 3 + ties;
  return pontos;
}

// Desafio 6
function highestCount(array) {
  let quantidade = 0;

  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === Math.max(...array)) {
      quantidade += 1;
    }
  }

  return quantidade;
}

// Desafio 7
// eslint-disable-next-line consistent-return
function catAndMouse(mouse, cat1, cat2) {
  const distanciaCat1 = (mouse - cat1);
  const distanciaCat2 = (mouse - cat2);

  if (distanciaCat1 > distanciaCat2) {
    return 'cat1';
  }

  if (distanciaCat1 < distanciaCat2) {
    return 'cat2';
  }
  if (distanciaCat1 === distanciaCat2) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(arrayNumero) {
  const arrayString = [];

  for (let i = 0; i < arrayNumero.length; i += 1) {
    if (arrayNumero[i] % 3 === 0 && arrayNumero[i] % 5 === 0) {
      arrayString.push('fizzBuzz');
    } else if (arrayNumero[i] % 3 === 0 && arrayNumero[i] % 5 !== 0) {
      arrayString.push('fizz');
    } else if (arrayNumero[i] % 3 !== 0 && arrayNumero[i] % 5 === 0) {
      arrayString.push('buzz');
    } else {
      arrayString.push('bug!');
    }
  }

  return arrayString;
}

// Desafio 9
// eslint-disable-next-line sonarjs/cognitive-complexity
function encode(frase) {
  let codificacao = frase.replace(/a/g, 1);
  codificacao = codificacao.replace(/e/g, 2);
  codificacao = codificacao.replace(/i/g, 3);
  codificacao = codificacao.replace(/o/g, 4);
  codificacao = codificacao.replace(/u/g, 5);

  return codificacao;
}
function decode(frase) {
  let codificacao = frase.replace(/1/g, 'a');
  codificacao = codificacao.replace(/2/g, 'e');
  codificacao = codificacao.replace(/3/g, 'i');
  codificacao = codificacao.replace(/4/g, 'o');
  codificacao = codificacao.replace(/5/g, 'u');

  return codificacao;
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
