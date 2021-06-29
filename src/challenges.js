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
  //link refercia:
  //https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split
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
function highestCount(numeros) {
  let numeroMaior = Math.max(...numeros);
  let count = 0;
  for (let i of numeros) {
    if(numeroMaior === i){
      count += 1
    }
    }return (count)
  }
  // seu código aqui


// Desafio 7
function catAndMouse() {

  //link de referencia:
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
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
