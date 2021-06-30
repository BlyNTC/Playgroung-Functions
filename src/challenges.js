// Desafio 1
function compareTrue(comparar1, comparar2) {
  if (comparar1 && comparar2) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  let ultimo = array[array.length - 1];
  let primeiro = array[0];
  return ultimo + ', ' + primeiro;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = 0;
  pontos = wins * 3 + ties * 1
  return pontos
}

// Desafio 6
function highestCount(arrayN) {
  let maior = arrayN[0];
  let soma = 0;
  for (let num of arrayN) {
    if (maior < num) {
      maior = num;
    }
  }
  for (let vezes of arrayN) {
    if (maior === vezes) {
      soma += 1;
    }
  } return soma;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = 0;
  let distanciaCat2 = 0;
  distanciaCat1 = cat1 - mouse;
  distanciaCat2 = cat2 - mouse;
  if (distanciaCat1 < 0) {
    distanciaCat1 *= (-1);
  }
  if (distanciaCat2 < 0) {
    distanciaCat2 *= (-1);
  }
  if (distanciaCat1 > distanciaCat2) {
    return 'cat2';
  } else if (distanciaCat1 < distanciaCat2) {
    return 'cat1';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(arrayFB) {
  let guardar = [];
  for (let contador of arrayFB) {
    if ((contador % 3) === 0 && (contador % 5) === 0) {
      guardar.push('fizzBuzz');
    } else if ((contador % 3) === 0) {
      guardar.push('fizz');
    } else if ((contador % 5) === 0) {
      guardar.push('buzz');
    } else {
      guardar.push('bug!');
    }
  } return guardar;
}

// Desafio 9
function encode(string) {
  let trocaValor = '';
  for (let percorrer of string) {
    if (percorrer === 'a') {
      trocaValor += 1;
    } else if (percorrer === 'e') {
      trocaValor += 2;
    } else if (percorrer === 'i') {
      trocaValor += 3;
    } else if (percorrer === 'o') {
      trocaValor += 4;
    } else if (percorrer === 'u') {
      trocaValor += 5;
    } else {
      trocaValor += percorrer;
    }
  } return trocaValor;
}
function decode(string) {
  let trocaValor = '';
  for (let percorrer of string) {
    if (percorrer === '1') {
      trocaValor += 'a';
    } else if (percorrer === '2') {
      trocaValor += 'e';
    } else if (percorrer === '3') {
      trocaValor += 'i';
    } else if (percorrer === '4') {
      trocaValor += 'o';
    } else if (percorrer === '5') {
      trocaValor += 'u';
    } else {
      trocaValor += percorrer;
    }
  } return trocaValor;
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
