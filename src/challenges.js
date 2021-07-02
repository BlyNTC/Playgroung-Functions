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
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
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
