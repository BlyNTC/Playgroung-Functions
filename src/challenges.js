// Desafio 1
function compareTrue(firstValue, secondValue) {
  let result = false;
  if(typeof firstValue === 'boolean' && typeof secondValue === 'boolean'){
    if(firstValue === true && secondValue === true){
      result = true;
    }
  }else{
    result = false;
  }
  return result;
}

// Desafio 2
function calcArea(base, height) {
  let area;
  area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(sentence) {
  let sentenceArray;
  sentenceArray = sentence.split(" ");
  return sentenceArray;  
}
// Desafio 4
function concatName(arr) {
  let firstPosition;
  let lastPosition;
  for (let index = 0; index < arr.length; index += 1) {
    if(index === 0){
      firstPosition = arr[index];
    }else if( index === arr.length -1){
      lastPosition = arr[index];
    }
  }
  return `${lastPosition}, ${firstPosition}`
}
// Desafio 5
function footballPoints(wins, ties) {
  totalPoints = 0;
  totalPoints = (wins * 3) + (ties * 1);
  return totalPoints;
}
// Desafio 6
function highestCount(arrayNumber) {
  let biggest = arrayNumber[0];
  let count = 0;
  //Verifica o maior
  for(let number of arrayNumber){
    if(number > biggest){
      biggest = number;
    }
  }
  //Conta quantas vezes o maior apareceu
  for (let index = 0; index < arrayNumber.length; index += 1) {
    if(biggest === arrayNumber[index])
    count += 1;
  }
  return count;
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
