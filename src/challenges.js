// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 == true && valor2 == true) {
    return true;
  } else { 
   return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height)/2;  
}

// Desafio 3
function splitSentence(string) {
  let separa;
  separa = string.split (" ");
  return separa;
}

// Desafio 4
function concatName(listaPalavras) {
  let separaLista = listaPalavras.split (" ");
  return separaLista[separaLista.length -1] + " " + separaLista[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return ((wins * 3) + (ties * 1));
}

// Desafio 6
function highestCount(arrayNumero) {
  let maiorNumero = 0;
  let count = 0;
  for (let index = 0; index < arrayNumero.length; index += 1){
    if (arrayNumero[index] > maiorNumero) {
      maiorNumero = arrayNumero[index];
    }
  }
  for (let index = 0; index < arrayNumero.length; index += 1){
    if (maiorNumero === arrayNumero[index]) {
      count += 1;
    }
  }  
  return count;
} 

// console.log(highestCount([9, 1, 2, 3, 9, 5, 7]))
// console.log(highestCount([0, 4, 4, 4, 9, 2, 1]))
// console.log(highestCount([0, 0, 0]))

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (cat1 === cat2){
    return "Os gatos trombam e o rato foge";
  } else if (cat2 < cat1){
    return "Cat 1";
  }
    else {
      return "Cat 2";
    }
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
