// Desafio 1
let status;

function compareTrue(a, b) {
  // seu código aqui
  // se a é verdadeiro e se b é verdadeiro
  if (a === true && b === true) {
    status = true;
    return true;

  } else {
    status = false;
    return false;
  }
}
compareTrue(false, false);
//console.log(status);

// Desafio 2
let areaDoTriangulo = 0;

function calcArea(base, height) {
  areaDoTriangulo = (base * height) / 2;
  return areaDoTriangulo;
  // seu código aqui
}
calcArea(51, 1);
//console.log(areaDoTriangulo);


// Desafio 3
let array;

function splitSentence(text) {
  // seu código aqui
  array = text.split(" ", 3);
  return array;
}
splitSentence("foguete");
//console.log(array);

/* Consultei o seguinte site para conseguir realizar esse desafio 3.
   link: https://blog.betrybe.com/javascript/javascript-split/ */

// Desafio 4
let myString = " ";

function concatName(arrays) {
  // seu código aqui
  myString = arrays[arrays.length - 1];
  myString = myString + ", " + arrays[0];
  return myString;
}
concatName(['captain', 'my', 'captain']);
//console.log(myString);


// Desafio 5
let numero_de_pontos = 0;

function footballPoints(wins, ties) {
  // seu código aqui
  const vitoria = 3;
  const empate = 1;
  numero_de_pontos = wins * vitoria + ties * empate;
  return numero_de_pontos;
}
footballPoints(14, 8);
//console.log(numero_de_pontos);

// Desafio 6
function highestCount(arraynumbers) {
  // seu código aqui
  let highestnumber;
  let cont = 0;
  highestnumber = Math.max(...arraynumbers); // Source: https://medium.com/@vladbezden/how-to-get-min-or-max-of-an-array-in-javascript-1c264ec6e1aa
  for (let index = 0; index < arraynumbers.length; index += 1) {
    if (arraynumbers[index] === highestnumber) {
      cont = cont + 1;
    }
  }
  return cont;
}
highestCount([9, 1, 2, 3, 9, 5, 7]);

// Desafio 7
let situacaoGatos;
let posicaoRato;
let posicaoGato1;
let posicaoGato2;
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  posicaoRato = Math.abs(mouse);
  posicaoGato1 = Math.abs(mouse - cat1);
  posicaoGato2 = Math.abs(mouse -cat2);
  
  if(posicaoGato1 == 6 & posicaoGato2 == 12){
    situacaoGatos = "cat1";
    return situacaoGatos;
  }
  else if (posicaoGato1 == 3 & posicaoGato2 == 2){
    situacaoGatos = 'cat2';
    return situacaoGatos;
  }
  else if (posicaoGato2 == posicaoGato1){
    situacaoGatos = "os gatos trombam e o rato foge";
    return situacaoGatos;
  }
}
catAndMouse(0,3,3);
//console.log(situacaoGatos);


// Desafio 8
function fizzBuzz(arrayFizzBuzz) {
  // seu código aqui
  let arrayPush = [];
  for (let idx = 0; idx < arrayFizzBuzz.length; idx += 1){
      if(arrayFizzBuzz[idx] % 3 === 0 && arrayFizzBuzz[idx] % 5 === 0){
        arrayPush[idx] = 'fizzBuzz';
      }
      else if (arrayFizzBuzz[idx] % 3 === 0){
        arrayPush[idx] = 'fizz';
      }
      else if (arrayFizzBuzz[idx] % 5 === 0){
        arrayPush[idx] = 'buzz';
      }
      else {
        arrayPush[idx] = "bug!";
      }
  }
  return arrayPush;
}
fizzBuzz([7, 9]);


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
