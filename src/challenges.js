// Desafio 1
function compareTrue(parametro1, paremetro2) {
  return (parametro1 && paremetro2 === true);
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(string) {
  return (string.split(' '));
}

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return ((wins * 3) + (ties * 1));
}

// Desafio 6
function highestCount(array) {
  let resultado = 0;
  for (let i = 0; i <= array.length; i += 1) {
    if (array[i] === Math.max(...array)) {
      resultado += 1;
    }
  }
  return resultado;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let posicaoCat1 = Math.abs(mouse - cat1);
  let posicaoCat2 = Math.abs(mouse - cat2);
  if (posicaoCat1 === posicaoCat2) {
    return ('os gatos trombam e o rato foge');
  } else if (posicaoCat1 < posicaoCat2) {
    return ('cat1');
  } else {
    return ('cat2');
  }
}

// Desafio 8
function fizzBuzz(numero) {
  let mensagem = [];
  for (i of numero) {
    if (i % 3 === 0 && i % 5 === 0) {
      mensagem.push('fizzBuzz');
    } else if (i % 3 === 0) {
      mensagem.push('fizz');
    } else if (i % 5 === 0) {
      mensagem.push('buzz');
    } else {
      mensagem.push('bug!');
    }
  }
  return mensagem;
}

// Desafio 9
function encode(frase) {
  let array = frase.split('');
  for (let i in array) {
    if (array[i] === 'a') {
      array[i] = 1;
    } else if (array[i] === 'e') {
      array[i] = 2;
    } else if (array[i] === 'i') {
      array[i] = 3;
    } else if (array[i] === 'o') {
      array[i] = 4;
    } else if (array[i] === 'u') {
      array[i] = 5;
    }
  }
  return array.join('');
}
function decode(frase) {
  let array = frase.split('');
  for (let i in array) {
    if (array[i] === '1') {
      array[i] = 'a';
    } else if (array[i] === '2') {
      array[i] = 'e';
    } else if (array[i] === '3') {
      array[i] = 'i';
    } else if (array[i] === '4') {
      array[i] = 'o';
    } else if (array[i] === '5') {
      array[i] = 'u';
    }
  }
  return array.join('');
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
