// Desafio 1
function compareTrue(bollean1, bollean2) {
  if (bollean1 && bollean2 == true){
    return true;
  }
  else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
   return base*height/2;
}

// Desafio 3
function splitSentence(string) {
  return string.split([' ']);
}

// Desafio 4
function concatName(arrayCN) {
let primeiro = arrayCN[0];
let ultimo = arrayCN[arrayCN.length -1]

return ultimo + ", "+ primeiro;
}

// Desafio 5
function footballPoints(wins, ties) {
  return 3*wins+1*ties;
}

// Desafio 6  

function highestCount(araara) {

  for (let index = 0; index <= araara.length; index = +1) {
    if (araara[index] === numeroMaximo){
      total = total + 1;
    }
  } 
  return total; 
  //bug ao rodar
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (cat1 && cat2 > mouse){
    return 'os gatos trombam e o rato foge';
  }
  else if (cat1 > cat2){
    return 'cat2';
  }
  else if(cat2 > cat1){
    return 'cat1';
  }
}

// Desafio 8
function fizzBuzz(arrayFB) {
  for(index = 0; index <= arrayFB.length; arrayFB ++){
    if (arrayFB[index] % 3 && arrayFB[index] % 5 != 0){
       
    }
    else if (arrayFB[index] % 3 && arrayFB[index] % 5 == 0){
      return 'FizzBuzz';
    }
    else if (arrayFB[index] % 5 == 0){
      return 'buzz';
    }
    else if (arrayFB[index] % 3 == 0){
      return 'fizz';
    }
  }return arrayFB;

}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui, usar switch e case 
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