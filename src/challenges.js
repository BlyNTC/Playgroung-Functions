// Desafio 1
function compareTrue(value1, value2) {
  if (value1 !== 0 && value2 !== 0) {
    return true;
  } else {
    return false;
  }
   
}
console.log(compareTrue(10, 1));

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}
console.log(calcArea (51, 1));

// Desafio 3
function splitSentence(phraseSplit) {
  //função split pesquisada em: https://www.devmedia.com.br/javascript-split-dividindo-separando-strings/39254
  return phraseSplit.split (" ");

}
phraseSplit = "Vamo que vamo";
console.log (splitSentence(phraseSplit));

// Desafio 4
function concatName() {
  // seu código aqui
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
