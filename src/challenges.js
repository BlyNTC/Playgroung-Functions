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
  return (separaLista[separaLista.length -1]) + ", " + (separaLista[0])
}

// console.log(concatName('Foguete não tem ré'));

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
  let result = '';
  if ((Math.abs(cat1-mouse)) === (Math.abs(cat2-mouse))) {
    result = "os gatos trombam e o rato foge";
  } else if ((Math.abs(cat1-mouse)) < (Math.abs (cat2-mouse))) {
    result = "cat1";
  } else if ((Math.abs(cat2-mouse)) < (Math.abs(cat1-mouse))) {
      result = "cat2";
  }  
  return result;
}


// Desafio 8
function fizzBuzz(arrayNumeros) {
let string = [];
for (let index = 0; index < arrayNumeros.length; index += 1) { 
if (arrayNumeros[i] % 3 === 0 && arrayNumeros[i] % 5 === 0) {
    string.push ("fizzBuzz");
  } else if (arrayNumeros[i] % 3 === 0) {
    string.push ("fizz");
  } else if (arrayNumeros[i] % 5 === 0) {
    string.push ("Buzz");
  } else {
    string.push ("Bug!");
  }
 }
 return string;    
}

// Desafio 9
function encode(frase) {
let fraseCodificada = '';
for (let index = 0; index < frase.length; index += 1) { 
  if (fraseCodificada[index] === 'a') {
  fraseCodificada = fraseCodificada + '1';
} else if (fraseCodificada[index] === 'e') {
  fraseCodificada = fraseCodificada + '2';
} else if (fraseCodificada[index] === 'i') {
  fraseCodificada = fraseCodificada + '3';
} else if (fraseCodificada[index] === 'o') {
  fraseCodificada = fraseCodificada + '4';
} else if (fraseCodificada[index] === 'u') {
  fraseCodificada = fraseCodificada + '5';
} else {
  fraseCodificada = fraseCodificada
    }
  }
 return fraseCodificada
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
