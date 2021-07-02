// Desafio 1
function compareTrue(value1, value2) {
  // seu codigo aqui
  if (value1 === true && value2 === true) {
    return true;
  } else {
    return false;
  } 
}

// Desafio 2
function calcArea(base, height) {
  //seu codigo aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(phraseSplit) {
  //função split pesquisada em: https://www.devmedia.com.br/javascript-split-dividindo-separando-strings/39254
  return phraseSplit.split(" ");

}

// Desafio 4
function concatName(sentenceConcat) {
   // digitar codigo aqui
}

// Desafio 5
function footballPoints(wins, ties) {
  //digitar codigo aqui
  return (wins * 3) + ties; 
}


// Desafio 6
function highestCount(arrayNumbers) {
  //digitar codigo aqui
  let contador = 0;
  let majorNumber = 0;
  for (let index = 0; index < arrayNumbers.length; index += 1){
      if (arrayNumbers[index] > majorNumber){
      majorNumber = arrayNumbers[index];
    } 
  }
  for (let index = 0; index < arrayNumbers.length; index += 1){
    if (arrayNumbers[index] === majorNumber){
      contador +=1;
    }  
  }
  return contador;
}


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)){
    catWinner = "cat1";
  } else if (Math.abs(mouse - cat2) < Math.abs(mouse - cat1)){
    catWinner = "cat2";
  } else {
    catWinner = "Os gatos trombam e o rato foge";
  }
  return gato;
}


// Desafio 8
function fizzBuzz() {
  
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
