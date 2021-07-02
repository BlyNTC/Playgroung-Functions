// Desafio 1
function compareTrue(num1, num2) {

if(num1 === true && num2 === true){
  return true;
 }
  else {  
  return false;
}
 }


// Desafio 2
let parametroBase = 0
function calcArea(base, heigth) {
  parametroBase = (base*heigth)/2;
  

  console.log(parametroBase) 
  return parametroBase;
}

calcArea (5,2)

// Desafio 3
function splitSentence(frase) {
 let str = frase.split(' ');
 return str;
}

// Desafio 4
function concatName(listaDeNomes) {
  return (listaDeNomes[listaDeNomes.length - 1] + ', ' + listaDeNomes[0]);
}

// Desafio 5
function footballPoints(wins, ties) {
return(wins * 3) + (ties);
}

// Desafio 6
function highestCount(arrayNumeros) {
let maiorRapido = Math.max(...arrayNumeros);
  
  let numeroMaior = -1;  
  let contador = 0;
  for (let i = 0; i < arrayNumeros.length; i++) {
    if ( arrayNumeros[i] > numeroMaior ) {
       numeroMaior = arrayNumeros[i];
    }
 }
  for(let i = 0; i < arrayNumeros.length; i += 1) {
    if(arrayNumeros[i] == numeroMaior) {
      contador += 1; 
    }
  }
return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
let pontoDeEncontro1 = mouse - cat1;
let encontro1 = Math.abs(pontoDeEncontro1)
let pontoDeEncontro2 = mouse - cat2;
let encontro2 = Math.abs(pontoDeEncontro2);
  if(encontro1 === encontro2){ 
    return "os gatos trombam e o rato foge";
    }
    else if(encontro1 < encontro2){
    return "cat1";
    }
  else{
    return "cat2"; 
  }
}

// Desafio 8
function fizzBuzz(array) {
let strings = [];
for(let i = 0; i < array.length; i += 1){ 
  if(array[i] % 3 !== 0 && array[i] % 5 !== 0){   
    strings.push("bug!")
  }
  else if(array[i] % 3 === 0 && array[i] % 5 !== 0) {
    strings.push("fizz");
  }
  else if(array[i] % 3 !== 0 && array[i] % 5 === 0){
    strings.push("buzz")
  }
  else if(array[i] % 3 === 0 && array[i] % 5 === 0) {
    strings.push("fizzBuzz");
  }
 
}

return strings;
}

// Desafio 9
function encode(encodar) {
  let string = encodar.replace(/a/g, 1);
  let string2 = string.replace(/e/g, 2);
  let string3 = string2.replace(/i/g, 3);
  let string4 = string3.replace(/o/g, 4);
  let string5 = string4.replace(/u/g, 5);
  let resultado1 = string5;
  return resultado1; 
}

function decode(desbugar) {
  let contrario = desbugar.replace(/1/g,"a");
  let contrario2 = contrario.replace(/2/g,"e"); 
  let contrario3 = contrario2.replace(/3/g, 'i');
  let contrario4 = contrario3.replace(/4/g, 'o');
  let contrario5 = contrario4.replace(/5/g, 'u');
  let resultado2 = contrario5;
  return resultado2;
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
