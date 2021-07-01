const { result } = require("lodash");
const { array, count } = require("yargs");

// Desafio 1
function compareTrue(boo1, boo2) {
  let resultado;
  if (boo1 === true && boo2 === true) {
    resultado = true;
  }
  else {
    resultado = false;
  }
  return resultado;
}

// Desafio 2
function calcArea(base, height) {
  let triang = base * height / 2
  return triang}

// Desafio 3
function splitSentence(str) {
  let divisor = ' ';
  let splitArray = str.split(divisor);

  return splitArray;
}

// Desafio 4
function concatName(arraystr) {
  prim = arraystr[0]
  ultm = arraystr[arraystr.length -1]
  let result = ultm + ', ' + prim

  return result
}

// Desafio 5
function footballPoints(wins, ties) {
  pont = wins * 3
  ponts = pont + ties;

  return ponts;
}

// Desafio 6
function highestCount(numeros) {
  let maiorValor = Math.max.apply(null, numeros)
  /* for(let numero of numeros){
    if(maiorValor < numero){
      maiorValor = numero;
    } */
  

  let arrayTodos = []
  let maiorNum = maiorValor
  let idx = numeros.indexOf(maiorNum)
  while (idx != -1) {
    arrayTodos.push(idx)
    idx = numeros.indexOf(maiorNum, idx + 1)
  }

  return arrayTodos.length
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let retorno;
  cato1 = cat1  - mouse;
  cato2 = cat2 - mouse;
  cato1 =Math.abs(cato1);
  cato2 = Math.abs(cato2);
  Math.abs(cato2)
  if (cato1 < cato2 && cato1 != cato2){
    retorno = 'cat1'
  } else if (cato2 < cato1 && cato2 != cato1) {
    retorno = 'cat2'
  } else {
    retorno = "os gatos trombam e o rato foge"
  }

  return retorno

}

// Desafio 8
function fizzBuzz(array) {

  for (index = 0; index < array.length; index += 1) {
    if (array[index] % 3 == 0 && array[index] % 5 == 0) {
      array[index] = "fizzBuzz" ;
    }else if (array[index] % 5 == 0) {
      array[index] = "buzz";
    }else if (array[index] % 3 == 0){
      array[index] = "fizz"
    }else {
      array[index] = "bug!";
    }
  }
  return array
}
// Desafio 9
function encode(str) {
  let reultado = '';
 for (let value of str){
   switch (value) {
     case "a": 
     reultado += '1'
     break
     case "e":
    reultado += '2';
     break
     case "i":
       reultado += '3'
      break
      case "o":
        reultado += '4'
      break
      case "u":
        reultado += '5'
      break
     default:
    reultado += value;
   }
 }
 return reultado;
    }

function decode(str) {
  let reultado = '';
  for (let value of str){
    switch (value) {
      case "1": 
      reultado += 'a'
      break
      case "2":
     reultado += 'e';
      break
      case "3":
        reultado += 'i'
       break
       case "4":
         reultado += 'o'
       break
       case "5":
         reultado += 'u'
       break
      default:
     reultado += value;
    }
  }
  return reultado;
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
