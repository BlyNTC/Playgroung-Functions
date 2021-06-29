// Desafio 1
function compareTrue(valor1, valor2) {
  // seu código aqui
  if ((valor1 && valor2) === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let sentence = [];
  sentence = string;
  return sentence.split(' ');
}

// Desafio 4
function concatName(strings = []) {
  // seu código aqui
  let resultado1 = [];
  let resultado2 = [];
  let resultado = [];
  resultado1 = strings[strings.length - 1];
  resultado2 = strings[0];
  resultado = resultado1 + ', ' + resultado2;
  return resultado;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return ((wins * 3) + ties);
}

// Desafio 6
function highestCount(numeros) {
  // seu código aqui
  let contador = 0;
  let valorMaior = Math.max(...numeros);
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] === valorMaior) {
      contador++;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distCat1 = 0;
  let distCat2 = 0;
  // Distancia CAT1
  if (mouse < cat1) {
    distCat1 = cat1 - mouse;
  } else {
    distCat1 = mouse - cat1;
  }

  // Distancia CAT2
  if (mouse < cat2) {
    distCat2 = cat2 - mouse;
  } else {
    distCat2 = mouse - cat2;
  }

  let resultado = '';
  if (distCat2 < distCat1) {
    resultado = 'cat2';
  } else if (distCat2 > distCat1) {
    resultado = 'cat1';
  } else if (distCat1 === distCat2) {
    resultado = 'os gatos trombam e o rato foge';
  }
  return resultado;
}

// Desafio 8
function fizzBuzz(array = []) {
  // seu código aqui
  let resultado = [];

  for (let i = 0; i < array.length; i++) {
    if ((array[i] % 3 === 0) && (array[i] % 5 === 0)){
      resultado.push('fizzBuzz');
    } else if ((array[i] % 5) === 0) {
      resultado.push('buzz');
    } else if ((array[i] % 3) === 0) {
      resultado.push('fizz');
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
