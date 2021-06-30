// Desafio 1
function compareTrue(boolean1, boolean2) {
  if(boolean1 === true && boolean2 === true){
    return true;
  }else{
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base*height) / 2;
  return area;
}

// Desafio 3
function splitSentence(str) {
  let array=[];
  array = str.split(" ");
  return array;
}

// Desafio 4
function concatName(words=[]) {
  let primeira = '';
  let segunda = '';
  for(let i=0;i<words.length; i++){
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
function highestCount(numbers=[]) {
  let maior = -10, cont = 0;
  for(let i=0; i<numbers.length; i++){
      if(numbers[i] > maior){
        maior = numbers[i];
      }
    }
    for(let j=0; j<numbers.length; j++){
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
function fizzBuzz(array=[]) {
  for(let i=0; i< array.length; i++){
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

// Desafio 9
function encode(str = []) {
  let sopa = []
  for(let l of str){
    sopa.push(l);
  }
  for(let i=0; i<sopa.length; i++){}
  switch(sopa[i]){
     case "a": str[i] = 1;
     break;
     case "e": str[i] = 2;
     break;
     case "i": str[i] = 3;
     break;
     case "o": str[i] = 4;
     break;
     case "u": str[i] = 5;
     break;
     default: break;
}
let junta=[];
for(let z of sopa){
  junta.push(z);
}
return junta;
}
console.log(encode("hey you"));
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
