// Desafio 1 (correto)
function compareTrue(valor1, valor2) {
  if (valor1 == true && valor2 == true) {
    return true;
  } else { 
   return false;
  }
}

// Desafio 2 (correto)
function calcArea(base, height) {
  return (base * height)/2;  
}

// Desafio 3 (correto)
function splitSentence(string) {
  let separa;
  separa = string.split (" ");
  return separa;
}

// Desafio 4 (ajuste)
function concatName(listaPalavras) {
  let separaLista = listaPalavras.split (" ");
  return (separaLista[separaLista.length -1]) + ", " + (separaLista[0])
}

// console.log(concatName('Foguete não tem ré'));

// Desafio 5 (correto)
function footballPoints(wins, ties) {
  return ((wins * 3) + (ties * 1));
}

// Desafio 6 (ajustar)
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

// Desafio 7 (correto)
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
function encode(fraseCode) {
let fraseCodificada = '';

fraseCodificada = fraseCode.replace(/a/g, '1');
fraseCodificada = fraseCodificada.replace(/e/g , '2');
fraseCodificada = fraseCodificada.replace(/i/g , '3');
fraseCodificada = fraseCodificada.replace(/o/g , '4');
fraseCodificada = fraseCodificada.replace(/u/g , '5');

return fraseCodificada;
}




// for (let index = 0; index < frase.length; index += 1) { 
//   if (fraseCodificada[index] === 'a') {
//   fraseCodificada = fraseCodificada + '1';
// } else if (fraseCodificada[index] === 'e') {
//   fraseCodificada = fraseCodificada + '2';
// } else if (fraseCodificada[index] === 'i') {
//   fraseCodificada = fraseCodificada + '3';
// } else if (fraseCodificada[index] === 'o') {
//   fraseCodificada = fraseCodificada + '4';
// } else if (fraseCodificada[index] === 'u') {
//   fraseCodificada = fraseCodificada + '5';
// } else {
//   fraseCodificada = fraseCodificada
//     }
//   }
//  return fraseCodificada
// }


function decode(fraseDecode) {
let fraseDecodificada = '';

fraseDecodificada = fraseDecode.replace(/1/g , 'a');
fraseDecodificada = fraseDecodificada.replace(/2/g , 'e');
fraseDecodificada = fraseDecodificada.replace(/3/g , 'i');
fraseDecodificada = fraseDecodificada.replace(/4/g , 'o');
fraseDecodificada = fraseDecodificada.replace(/5/g , 'u');
return fraseDecodificada;
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
