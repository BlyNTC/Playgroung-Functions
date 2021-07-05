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
  return phraseSplit.split(' ');
}

// Desafio 4
function concatName(sentenceConcat) {
  sentenceConcat = sentenceConcat.split(' ');
  let primeiroItem = sentenceConcat[0];
  let ultimoItem = sentenceConcat[sentenceConcat.length - 1];
  return (ultimoItem, primeiroItem);
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties; 
}


// Desafio 6
function highestCount(arrayNumbers) {
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
  //seu codigo aqui 
  let result = " "
  if ((mouse - cat1) < (mouse - cat2)){
    result = "cat1";
  } else if ((mouse - cat2) < (mouse - cat1)){
    result = "cat2";
  } else {
      result = "Os gatos trombam e o rato foge";
  }
  return result;
}


// Desafio 8
function fizzBuzz(numbers) {
    const result = [];
    for (let index = 0; index < numbers.length; index += 1){
      if (numbers[index] % 3 === 0 && numbers[index] % 5 === 0){
      result.push = "fizzBuzz";
    } else if (numbers[index] % 3 === 0 && numbers[index] % 5 !== 0){
      result.push = "fizz";
    } else if (numbers[index] % 5 === 0 && numbers[index] % 3 !== 0){
      result.push = "buzz";
    } else {
      result.push = "bug!"
    }
  }
  for (let index = 0; index < result.length; index += 1){
    console.log(result[index]);
 }
 numbers = [2, 15, 7, 9, 45];
 fizzBuzz (numbers)


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
