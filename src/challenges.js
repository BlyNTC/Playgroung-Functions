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
function catAndMouse() {
  
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
