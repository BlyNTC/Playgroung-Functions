// Desafio 1
function compareTrue(valor1, valor2) {
  // seu código aqui
  if (valor1 === true && valor2 === true){
    return true;
  }else{ 
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  calcArea = (base*height)/2;
  return calcArea;
}

// Desafio 3
function splitSentence(string, array) {
  // seu código aqui
  array = string.split(" ");
  return array;
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  return array[array.length - 1] + ", " + array[0]
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(arrayNumbers) {
  // seu código aqui
  let maiorNumero = arrayNumbers[0];
  let contador = 0;
  for(let i = 0; i < arrayNumbers.length; i +=1){
    if(arrayNumbers[i] > maiorNumero){
      maiorNumero = arrayNumbers[i];
    }
  }for(i = 0; i < arrayNumbers.length; i +=1){
    if (arrayNumbers[i] === maiorNumero)
    contador +=1;
  }
  return contador;
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
