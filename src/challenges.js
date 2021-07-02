// Desafio 1
function compareTrue(boolean1, boolean2) {
  return boolean1&&boolean2;
  }

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(str) {
  let array = [];
  array = str.split(' ');
  return array;
}

// Desafio 4
function concatName(words) {
  let primeira = '';
  let segunda = '';
  for (let i = 0;i < words.length;i+=1) {
      if(i === 0){
        segunda = words[i];
      }else if(i === words.length-1){
        primeira = words[i];
      }
  }
  let res = primeira.concat(", ", segunda);
  return res;
}
// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (wins*3) + ties;
  return pontos;
}

// Desafio 6
function highestCount(numbers) {
  let maior = -10, cont = 0;
  for (let i = 0; i < numbers.length; i+=1) {
      if(numbers[i] > maior){
        maior = numbers[i];
      }
    }
    for (let j = 0; j < numbers.length; i+=1) {
        if(numbers[j]===maior){
          cont+= 1;
      }
    }
  return cont
}
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciac1 = (mouse-cat1), distanciac2 = (mouse-cat2);
  if(cat2>mouse){distanciac2=cat2-mouse}
  if(cat1>mouse){distanciac1=cat1-mouse}
  if(distanciac1 > distanciac2){
    return "cat2";
  }else if(distanciac2 === distanciac1){
    return "os gatos trombam e o rato foge";
  }else{
    return "cat1";  
  } 
}
// Desafio 8
function fizzBuzz(array) {
  for (let i = 0; i < array.length; i+=1) {
    if(array[i] %3 === 0 && array[i] %5 !== 0){
      array[i] = "fizz";
    }else if(array[i] %3 === 0 && array[i] %5 === 0){
      array[i] = "fizzBuzz";
    }else if(array[i] %3 !== 0 && array[i] %5 === 0){
      array[i] = "buzz";
    }else{
      array[i] = "bug!"
    }
  }
  return array;
}
console.log(fizzBuzz([54, 43, 15, 20, 30, 43]))

// Desafio 9
function encode(str) {
  let newword = '';
  newword = str.replace(/a/g, '1');
  newword = newword.replace(/e/g, '2');
  newword = newword.replace(/i/g, '3');
  newword = newword.replace(/o/g, '4');
  newword = newword.replace(/u/g, '5');
  return newword;
}
function decode(encoded) {
    let reptool = '';
    reptool = encoded.replace(/1/g, 'a');
    reptool = reptool.replace(/2/g, 'e');
    reptool = reptool.replace(/3/g, 'i');
    reptool = reptool.replace(/4/g, 'o');
    reptool = reptool.replace(/5/g, 'u');
    return reptool;
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
