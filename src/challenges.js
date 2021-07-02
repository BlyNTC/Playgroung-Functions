// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  } else {
    return false;
  } 
}
console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}
console.log(calcArea (51, 1));

// Desafio 3
function splitSentence(phraseSplit) {
  //função split pesquisada em: https://www.devmedia.com.br/javascript-split-dividindo-separando-strings/39254
  return phraseSplit.split(" ");

}
phraseSplit = "Vamo que vamo";
console.log (splitSentence(phraseSplit));

// Desafio 4
function concatName(sentenceConcat) {
   // digitar codigo aqui
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties; 
}
console.log (footballPoints(1, 2));


// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse(cat1, cat2, mouse) {
  if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)){
    return "cat1";
  } else if (Math.abs(mouse - cat2) < Math.abs(mouse - cat1)){
    return "cat2";
  } else {
    return "Os gatos trombam e o rato foge";
  }
}
console.log(catAndMouse(0, 0, 0));

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
