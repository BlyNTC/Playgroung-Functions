// Desafio 1
function compareTrue(requisito1, requisito2) {
  let trueFalse = requisito1&&requisito2
  return (trueFalse)
  // seu código aqui
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2
  return area
  // seu código aqui
}

// Desafio 3
function splitSentence(frase) {
  let splitado = frase.split(' ')
  return (splitado)
  
  // 
}

// Desafio 4
function concatName(listNames) {
  return (listNames[listNames.length -1]+', '+listNames[0])
  // seu código aqui
}

// Desafio 5
function footballPoints(win, ties) {
  return ((win * 3)+ties)
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
