// Funções auxiliares
function maxNumber (array) {
  let max = array[0];
  for (let num of array){
    if (num > max){max = num};
  }
  return max;
}

// Desafio 1
function compareTrue(param1, param2) {
  // seu código aqui
  return param1 && param2;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence() {
  // seu código aqui

}

// Desafio 4
function concatName(array) {
  // seu código aqui
  return `${array[array.length-1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(array) {
  // seu código aqui
  let numberCount = 0;
  let max = maxNumber(array);

  for(let num of array){
    if (num === max){numberCount+=1};
  }
  return numberCount;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let ca1ToMouse = Math.abs(mouse - cat1);
  let cat2ToMouse = Math.abs(mouse - cat2);
  let result;

  if (ca1ToMouse === cat2ToMouse) {
    result = 'os gatos trombam e o rato foge';
  } else if (ca1ToMouse > cat2ToMouse) {
    result = 'cat2';
  } else {
    result = 'cat1';
  }
  return result;
}

// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  let fizzBuzzArray = [];

  for (let num of array){
    if (num%3 === 0 && num%5 === 0) {
      fizzBuzzArray.push('fizzBuzz');

    }else if(num%3 === 0){
      fizzBuzzArray.push('fizz');
    }else if (num%5 === 0){
      fizzBuzzArray.push('buzz');
    }else{
      fizzBuzzArray.push('bug!');
    }
  }
  return fizzBuzzArray;
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
