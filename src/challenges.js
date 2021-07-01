// Desafio 1
function compareTrue(valor1, valor2) {
  // seu código aqui

  if (valor1 === true && valor2 === true) {
    return true;
  }

  return false;
}

// Desafio 2
function calcArea(base, height) {
  let triangulo = (base * height) / 2;

  return triangulo;
}

calcArea(10, 50);
calcArea(5, 2);
calcArea(51, 1);

// Desafio 3
function splitSentence(frase) {
  let fraseDividida = frase.split(' ');

  return fraseDividida;

  // seu código aqui
}

splitSentence('Go Trybe');

// Desafio 4
function concatName(nomes) {
  for (let key in nomes) {
    if (nomes[0] === nomes[2]) {
      return (nomes[0] + ', ' + nomes[2]);
    } else {
    return (nomes[3] + ', ' + nomes[0]);
    }
  }
}

concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']);

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  wins *= 3;
  ties *= 1;
  let resultado = wins + ties;

  return resultado;
}

footballPoints(1, 2);

function highestCount(valores) {
  let maiorValor = valores[0];
  let numeroRepeticoes = 0;

  for (let index = 0; index < valores.length; index += 1) {
    if (valores[index] > maiorValor) {
      maiorValor = valores[index];
    }
    if (maiorValor === valores[index]) {
      numeroRepeticoes += 1;
    }
  }
  return numeroRepeticoes;
}

highestCount([11, 9, 11, 11, 9, 11, 7]);

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let cat1AndMouseDistance = Math.abs(cat1 - mouse);
  let cat2AndMouseDistance = Math.abs(cat2 - mouse);

  if (cat1AndMouseDistance === cat2AndMouseDistance) {
    return 'os gatos trombam e o rato foge';
  } if (cat2AndMouseDistance < cat1AndMouseDistance) {
    return 'cat2';
  } if (cat1AndMouseDistance < cat2AndMouseDistance) {
    return 'cat1';
  }
}

catAndMouse(10, 8, 8);

// Desafio 8
function fizzBuzz(valores) {
  let resultado = [];
  for (let index = 0; index < valores.length; index += 1) {
    if (valores[index] % 3 === 0 && valores[index] % 5 === 0) {
      resultado.push('fizzBuzz');
    } else if (valores[index] % 5 === 0) {
      resultado.push('buzz');
    } else if (valores[index] % 3 === 0) {
      resultado.push('fizz');
    } else {
      resultado.push('bug!');
    }
  }
  return resultado;
}

fizzBuzz([2, 15, 7, 9, 45]);

// Desafio 9
function encode(valor) {
  let arrayValor = Array.from(valor);
  for (let index = 0; index < arrayValor.length; index += 1) {
    if (arrayValor[index] === 'a') {
      arrayValor[index] = '1';
    } else if (arrayValor[index] === 'e') {
      arrayValor[index] = '2';
    } else if (arrayValor[index] === 'i') {
      arrayValor[index] = '3';
    } else if (arrayValor[index] === 'o') {
      arrayValor[index] = '4';
    } else if (arrayValor[index] === 'u') {
      arrayValor[index] = '5';
    } else {
      arrayValor;
    }
  }
  let stringValor = arrayValor.join('');
  return stringValor;
}

encode('hi there!');

function decode(valorDecode) {
  let arrayValor = Array.from(valorDecode);
  for (let index = 0; index < arrayValor.length; index += 1) {
    if (arrayValor[index] === '1') {
      arrayValor[index] = 'a';
    } else if (arrayValor[index] === '2') {
      arrayValor[index] = 'e';
    } else if (arrayValor[index] === '3') {
      arrayValor[index] = 'i';
    } else if (arrayValor[index] === '4') {
      arrayValor[index] = 'o';
    } else if (arrayValor[index] === '5') {
      arrayValor[index] = 'u';
    } else {
      arrayValor;
    }
  }
  let stringValor = arrayValor.join('');
  return stringValor;
}

decode('h3 th2r2!');

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
