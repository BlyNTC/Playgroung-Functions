// Desafio 1
function compareTrue(p1, p2) {
  if (p1 && p2) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = 0;

  area = (base * height) / 2;

  return area;
}

// Desafio 3
function splitSentence(frase) {

  let arrayAuxiliar = frase.split('');
  let arrayFinal = [];
  let n = 0;
  let palavra = '';

  for (let index = 0; index <= arrayAuxiliar.length; index += 1) {

    if ((arrayAuxiliar[index] != ' ') && (index < arrayAuxiliar.length)) {
      palavra = palavra.concat(arrayAuxiliar[index]);
    } else {
      arrayFinal[n] = palavra;
      n += 1;
      palavra = '';
    }
  }
  return arrayFinal;
}

// Desafio 4
function concatName(arrayDeStrings) {
  return arrayDeStrings[(arrayDeStrings.length - 1)] + ', ' + arrayDeStrings[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties);
}

// Desafio 6
function highestCount(listaDenumeros) {
  let maiorNumero = listaDenumeros[0];
  let repeticoes = 0;

  for (let maior of listaDenumeros) {
    if (maior > maiorNumero) {
      maiorNumero = maior;
    }
  }
  for (let repete of listaDenumeros) {
    if (repete === maiorNumero) {
      repeticoes += 1;
    }
  }
  return repeticoes;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaDoGato1 = Math.abs(mouse - cat1);
  let distanciaDoGato2 = Math.abs(mouse - cat2);
  let resutaldo;

  if (distanciaDoGato1 === distanciaDoGato2) {
    resultado = "os gatos trombam e o rato foge"
  } else if (distanciaDoGato1 < distanciaDoGato2) {
    resultado = 'cat1';
  } else {
    resultado = 'cat2';
  }
  return resultado;
}

// Desafio 8
function fizzBuzz(arrayDeNumeros) {

  let arrayFinal = [];
  let n = 0;

  for (let numero of arrayDeNumeros) {
    if ((numero % 3 === 0) && (numero % 5 === 0)) {
      arrayFinal[n] = 'fizzBuzz';
    } else if (numero % 3 === 0) {
      arrayFinal[n] = 'fizz';
    } else if (numero % 5 === 0) {
      arrayFinal[n] = 'buzz';
    } else {
      arrayFinal[n] = 'bug!';
    }
    n += 1;
  }

  return arrayFinal;
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
