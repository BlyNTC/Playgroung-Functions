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

function highestCount(arrayHc) {
let maiorNumero = Math.max(arrayHc);
let contadorDeRepeticao = 0;


}


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let diferença =  Math.abs( cat1 - mouse);
  let diferença2 = Math.abs( cat2 - mouse);

    if (diferença === diferença2){
      return 'os gatos trombam e o rato foge';
    }
    else if(diferença < diferença2){
      return "cat1";
    }
    else{
      return "cat2";
    }
}

// Desafio 8
function fizzBuzz(arrayFB) {
  let voltando = [];

  for(index = 0; index < arrayFB.length; arrayFB += 1){
    
    if (arrayFB[index] % 3 === 0 && arrayFB[index] % 5 === 0){
      voltando[index] = "FizzBuzz";
    }
    if (arrayFB[index] % 5 === 0){
      voltando[index] = "buzz";
    }
    if (arrayFB[index] % 3 === 0){
      voltando[index] = "fizz";
    }
    if (arrayFB[index] % 3 != 0 && arrayFB[index] % 5 != 0){
      voltando[index] = "bug!";
     }
  }return voltando;

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