// Desafio 1
function compareTrue(param1, param2) {
  // seu código aqui
  if (param1 === true && param2 === true) {
    return true
  } else {
    return false
  }
}

// Desafio 2
function calcArea(base, altura) {
  // seu código aqui
  return base * altura / 2
}

// Desafio 3
function splitSentence(param) {
  // seu código aqui
  let separaFrase = param.split(' ')
  return separaFrase
}

// Fonte que usei para o desafio 3: https://www.devmedia.com.br/javascript-split-dividindo-separando-strings/39254

// Desafio 4
function concatName(param) {
  // seu código aqui
  let palavra1 = param[0];
  let palavra2 = param[param.length - 1];
  let palavras = palavra2 + ', ' + palavra1
  return palavras;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return wins * 3 + ties
}

// Desafio 6
function highestCount(param) {
  // seu código aqui
  let compara = -999999999
  let vezesRepete = 0
  for (let key in param) {
    if (param[key] > compara) {
      compara = param[key]
    }
  }
  for (let key in param) {
    if (compara === param[key]) {
      vezesRepete += 1
    }
  }
  return vezesRepete
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distanciaGato1DoRato = Math.abs(mouse - cat1)
  let distanciaGato2DoRato = Math.abs(mouse - cat2)
  if (distanciaGato1DoRato < distanciaGato2DoRato) {
    return 'cat1'
  } else if (distanciaGato2DoRato < distanciaGato1DoRato) {
    return 'cat2'
  } else {
    return 'os gatos trombam e o rato foge'
  }
}
// Fonte que usei para o desafio 7: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs

// Desafio 8
function fizzBuzz(param) {
  // seu código aqui
  // let dividePor3 = []
  // let dividePor5 = []
  // let dividePelosDois = []
  // let nemUmNemOutro = []
  let final = []
  for (let key in param) {
    if (param[key] % 3 === 0 && param[key] % 5 != 0) {
      final.push ('fizz')
    } else if (param[key] % 3 != 0 && param[key] % 5 === 0) {
      final.push ('buzz')
    } else if (param[key] % 3 === 0 && param[key] % 5 === 0) {
      final.push ('fizzBuzz')
    } else if (param[key] % 3 != 0 && param[key] % 5 != 0) {
      final.push ('bug!')
    }
  }
  return final
}


// Desafio 9
function encode(param) {
  // seu código aqui
param = param.replaceAll('a', '1')
param = param.replaceAll('e', '2')
param = param.replaceAll('i', '3')
param = param.replaceAll('o', '4')
param = param.replaceAll('u', '5')
return param
}

function decode(param) {
  // seu código aqui
param = param.replaceAll('1', 'a')
param = param.replaceAll('2', 'e')
param = param.replaceAll('3', 'i')
param = param.replaceAll('4', 'o')
param = param.replaceAll('5', 'u')
return param
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
