// Desafio 1
function compareTrue(param1, param2) {
  if (param1 && param2 === true) {
    return true;
  } else {
    return false;
  }
}
// Desafio 2
function calcArea(base, height) {
  var resultado = (base * height / 2)
  return resultado;
}
// Desafio 3
function splitSentence(string) {
  let resultado = string.split(" ");
  return resultado;
}

// Desafio 4
function concatName(lista) {
  let primeiroItem = lista[0]
  let ultimoItem = lista[lista.length - 1]
  var conjunto = ultimoItem + ', ' + primeiroItem
  return conjunto
}
// Desafio 5
function footballPoints(wins, ties) {
  let winsPoints = (3 * wins)
  let tiesPoints = (ties * 1)
  let totalPoints = winsPoints + tiesPoints
  return totalPoints;
}

// Desafio 6
function highestCount(conjunto) {
  let maior = Math.max(...conjunto)
  let resultado = 0
  for (let indice = 0; indice < conjunto.length; indice++) {
    if (maior === conjunto[indice]) {
      resultado++;
    }
  }
  return resultado;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs(mouse - cat1);
  let distanceCat2 = Math.abs(mouse - cat2);
  if (distanceCat1 < distanceCat2) {
    return 'cat1';
  } else if (distanceCat2 < distanceCat1) {
    return 'cat2';
  } else if (distanceCat1 === distanceCat2) {
    return 'os gatos trombam e o rato foge'
  }
}

// Desafio 8
function fizzBuzz(arr) {
  let string = []
  for (let indice of arr) {
    if (indice % 3 === 0 && indice % 5 === 0) {
      string.push('fizzBuzz')
    } else if (indice % 5 === 0) {
      string.push('buzz')
    } else if (indice % 3 === 0) {
      string.push('fizz')
    } else {
      string.push('bug!')
    }
  }
  return string;
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
