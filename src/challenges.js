// Desafio 1
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true) {
    return 'true';
  } else {
    return 'false';
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  let array = [];
  let word = '';
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === ' ') {
      array.push(word);
      word = '';
    } else {
      word += string[index];
    }    
  }
  array.push(word);
  return array;
}

// Desafio 4
function concatName(array) {
  return (array[array.length-1] + ', ' + array[0]);
}

// Desafio 5
function footballPoints(wins, ties) {
  return 3 * wins + ties;
}

// Desafio 6
function highestCount(array) {
  let maior = 0;
  let cont = 0;
  for (let index in array){
    if (array[index] > maior){
      maior = array[index];
    }
  }
  for (let index in array){
    if (array[index] === maior){
      cont +=1;
    }
  }
  return cont;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distMouseCat1 = Math.abs(mouse - cat1);
  let distMouseCat2 = Math.abs(mouse - cat2);
  if (distMouseCat1 < distMouseCat2){
    return 'cat1';
  } else if (distMouseCat2 < distMouseCat1){
    return 'cat2';
  } else { 
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(array) {
  let arrayReturn = [];
  for (let index in array){
    if (array[index] % 3 === 0 && array[index] % 5 === 0 ){
      arrayReturn.push('fizzBuzz');
    } else if (array[index] % 3 === 0 && array[index] % 5 !== 0 ){
      arrayReturn.push('fizz');
    } else if ((array[index] % 3 !== 0 && array[index] % 5 === 0 )){
      arrayReturn.push('buzz');
    } else {
      arrayReturn.push('bug!');
    }
  }return arrayReturn;
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
