// Desafio 1


function compareTrue(n1, n2) {
  if (n1 === true && n2 === true) {
    return true
  } else if (n1 === false && n2 === false) {
    return false
  } else {
    (n1 === true && n2 === false)
    return false
  }
}


// Desafio 2



function calcArea(base, height) {
  return (base * height) / 2
}



// Desafio 3


function splitSentence(string) {
  return string.split(' ')
}


// Desafio 4


// função recebe um array
function concatName(meuArray) {
  // primeiraString recebe o ultimo elemento do array
  let primeraString = meuArray[meuArray.length - 1]
  // adiciona um espço e virgula entre as strings
  let stringEspaco = ', '
  // ultimaString recebe o primeiro elemento do array
  let ultimaString = meuArray[0]
  // retorna a concatenação das strings
  return primeraString + stringEspaco + ultimaString

}



// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties

}


// Desafio 6
// recebe um array de numeros
function highestCount(outroArray) {
  // recebe o numero maior do array
  let numeroMaior = outroArray[0]
  // procura o numero maior do array
  for (let index = 0; index < outroArray.length; index += 1) {
    if (outroArray[index] > numeroMaior) {
      numeroMaior = outroArray[index]
    }
  }
  let vezesQueAparece = 0
  for (let index = 0; index < outroArray.length; index += 1) {
    if (numeroMaior === outroArray[index]) {
      vezesQueAparece += 1
    }
  }
  return vezesQueAparece
}


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat2 - mouse) < Math.abs(cat1 - mouse)) {
    return "cat2"
  } else if (Math.abs(cat2 - mouse) > Math.abs(cat1 - mouse)) {
    return "cat1"
  } else {
    return "os gatos trombam e o rato foge"
  }
}


// Desafio 8


function fizzBuzz(array) {
  let mensagem = []
  for (let index in array) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      mensagem.push('fizzBuzz')
    } else if (array[index] % 5 === 0) {
      mensagem.push('buzz')
    } else if (array[index] % 3 === 0) {
      mensagem.push('fizz')
    } else {
      mensagem.push('bug!')
    }
  }
  return mensagem
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
