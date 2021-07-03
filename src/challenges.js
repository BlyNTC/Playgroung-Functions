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
  let maiorNumero = 0;
  let quantidade = 0;

  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > maiorNumero) {
      maiorNumero = array[i];
    }
  }
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === maiorNumero) {
      quantidade += 1;
    }
  }

  return quantidade;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  const distanciaCat1 = (mouse - cat1);
  const distanciaCat2 = (mouse - cat2);
  let resultadoDaCaca;

  if (distanciaCat1 > distanciaCat2) {
    return 'cat1';
  } else if (distanciaCat1 < distanciaCat2) {
    return 'cat2';
  } else {
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
function encode(frase) {
  let codificacao = '';

  for (let i = 0; i < frase.length; i += 1) {
    if (frase[i] === 'a') {
      codificacao += '1';
    } else if (frase[i] === 'e') {
      codificacao += '2';
    } else if (frase[i] === 'i') {
      codificacao += '3';
    } else if (frase[i] === 'o') {
      codificacao += '4';
    } else if (frase[i] === 'u') {
      codificacao += '5';
    } else {
      codificacao += frase[i];
    }
  }

  return codificacao;
}
function decode(frase) {
  let codificacao = '';

  for (let i = 0; i < frase.length; i += 1) {
    if (frase[i] === 'a') {
      codificacao += '1';
    } else if (frase[i] === 'e') {
      codificacao += '2';
    } else if (frase[i] === 'i') {
      codificacao += '3';
    } else if (frase[i] === 'o') {
      codificacao += '4';
    } else if (frase[i] === 'u') {
      codificacao += '5';
    } else {
      codificacao += frase[i];
    }
  }

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
