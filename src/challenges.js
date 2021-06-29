// Desafio 1
function compareTrue(booleano1, booleano2) {
  if(booleano1 === true && booleano2 === true){
    return true;
  } else{
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base*height)/2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(" ");
}

// Desafio 4
function concatName(array) {
  let string = array[array.length-1] + ', ' + array[0];

  return string;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = wins*3 + ties*1;

  return pontos;
}

// Desafio 6
function highestCount(array) {
  let maior=array[0];
  let vezes=0;

  for(let i=0; i<array.length; i++){
    if(array[i] >= maior){
      maior = array[i];
    }
  }
  for(let i=0; i<array.length; i++){
    if(maior == array[i]){
      vezes++;
    }
  }
  
  return vezes;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distancia1 = mouse - cat1;
  let distancia2 = mouse - cat2;

  if(Math.abs(distancia1) < Math.abs(distancia2)){
    return "cat1";
  } else if(Math.abs(distancia1) > Math.abs(distancia2)){
    return "cat2";
  } else{
    return "os gatos trombam e o rato foge";
  }
}

// Desafio 8
function fizzBuzz(array) {
  let string = []
  for(let i=0; i<array.length; i++){
    if(array[i]%3==0 && array[i]%5!==0){
      string.push("fizz");
    } else if(array[i]%5==0 && array[i]%3!==0){
      string.push("buzz");
    } else if(array[i]%3==0 && array[i]%5==0){
      string.push("fizzBuzz");
    } else{
      string.push("bug!");
    }
  }

  return string;
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
