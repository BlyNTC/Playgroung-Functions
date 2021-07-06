// Atenção: Lembrar de tirar os CONSOLE.LOG!!!

// Desafio 1
// 1 - Crie uma função usando o operador &&
function compareTrue(boleano_A, boleano_B) {
  return boleano_A && boleano_B;

}

// Desafio 2
// 2 - Crie uma função que calcule a área de um triângulo
// Base= base  |  Altura=height
function calcArea(base, height) {
  return (base * height) / 2;

}

// Desafio 3
// 3 - Crie uma função que divida a frase
function splitSentence(myString) {

  return myString.split(" ");
  
}

// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split
// const myString = 'testestestes'
// const splits = myString.split('')

// console.log(splits);

// Desafio 4
// 4 - Crie uma função que use concatenação de strings
function concatName(myStringConca) {
return myStringConca[myStringConca.length - 1] + ", " + myStringConca[0];
}
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/length

// Desafio 5
// 5 - Crie uma função que calcule a quantidade de pontos no futebol
// // Vitórias= wins  |  Empates= ties
function footballPoints(wins, ties) {

  
  return (wins=(wins*3) + (ties));

}

// Desafio 6
// 6 - Crie uma função que calcule a repetição do maior número
function highestCount(numerosArray) {
  
  let numeros;
  let somaMaior = 0;

  for (let numero of numerosArray) {

    if (numero === numeros) somaMaior += 1;

    else if (!numeros || numeros < numero) {
      numeros = numero;
      somaMaior = 1;
    }
  }
  return somaMaior;
}
//colocar as tred do slack e fonte

// Desafio 7
// 7 - Crie uma função de Caça ao Rato
// Posições= mouse, cat1 e cat2

function catAndMouse(mouse, cat1, cat2) {
    // seu código aqui

  let localCat1 = Math.abs(mouse - cat1);
  let localCat2 = Math.abs(mouse - cat2);
  let ratoEscapa = '';
  if (localCat1 < localCat2) {
    ratoEscapa = 'cat1';
  } else if (localCat1 > localCat2) {
    ratoEscapa = 'cat2';
  } else if (localCat1 === localCat2) {
    ratoEscapa = 'os gatos trombam e o rato foge';
  }
  return ratoEscapa;
}
// Ler sobre ABS abaixo o link para entender melhor o a função.
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
// 9 - Crie uma função que Codifique e Decodifique

function encode() {
  // seu código aqui
  
}
//Procurar sobre .REPLACE
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace

function decode() {
  // seu código aqui
}

// Atenção: Lembrar de tirar os CONSOLE.LOG!!!

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
