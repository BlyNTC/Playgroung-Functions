// Desafio 1
function compareTrue(p1, p2) {
  let resultado = false;
  if (p1 && p2) {
    resultado = true;
  }
  return resultado;
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

    if ((arrayAuxiliar[index] !== ' ') && (index < arrayAuxiliar.length)) {
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
function encode(codifica) {
  let arrayAuxiliar = codifica.split('');
  let n = 0;
  codifica = '';

  for (let letra of arrayAuxiliar) {

    switch (letra) {
      case 'a':
        arrayAuxiliar[n] = 1;
        break;

      case 'e':
        arrayAuxiliar[n] = 2;
        break;

      case 'i':
        arrayAuxiliar[n] = 3;
        break;

      case 'o':
        arrayAuxiliar[n] = 4;
        break;

      case 'u':
        arrayAuxiliar[n] = 5;
        break;

    }
    codifica = codifica.concat(arrayAuxiliar[n]);
    n += 1;
  }

  return codifica;
}

function decode(decodifica) {
  let arrayAuxiliar = decodifica.split('');
  let n = 0;
  decodifica = '';

  for (let numero of arrayAuxiliar) {

    switch (numero) {
      case '1':
        arrayAuxiliar[n] = 'a';
        break;

      case '2':
        arrayAuxiliar[n] = 'e';
        break;

      case '3':
        arrayAuxiliar[n] = 'i';
        break;

      case '4':
        arrayAuxiliar[n] = 'o';
        break;

      case '5':
        arrayAuxiliar[n] = 'u';
        break;

    }
    decodifica = decodifica.concat(arrayAuxiliar[n]);
    n += 1;
  }

  return decodifica;
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
