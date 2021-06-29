let status;
// Desafio 1
function compareTrue(a, b) {
  // seu código aqui
  // se a é verdadeiro e se b é verdadeiro
  if (a === true && b === true){
    status = true;
    return true;

  }
  else{
    status = false;
    return false;
  }
}
compareTrue(false,false);
console.log (status);

let areaDoTriangulo = 0;
// Desafio 2
function calcArea(base,height) {
  areaDoTriangulo = (base*height)/2;
  return areaDoTriangulo;
  // seu código aqui
}
calcArea(51,1);
console.log(areaDoTriangulo);

let array;
// Desafio 3
function splitSentence(text) {
  // seu código aqui
  array = text.split(" ", 3);
  return array;
}
splitSentence("foguete");
console.log (array);

/* Consultei o seguinte site para conseguir realizar esse desafio.
   link: https://blog.betrybe.com/javascript/javascript-split/ */

let myString = " ";
// Desafio 4
function concatName(arrays) {
  // seu código aqui
  myString = arrays[arrays.length -1];
  myString = myString +", "+ arrays[0];
  return myString;
}
concatName(['captain', 'my', 'captain']);
console.log(myString);


// Desafio 5
let numero_de_pontos = 0;
function footballPoints(wins,ties) {
  // seu código aqui
  const vitoria = 3;
  const empate = 1;
  numero_de_pontos = wins * vitoria + ties * empate;
  return numero_de_pontos;
}
footballPoints(0,0);
console.log(numero_de_pontos);

// Desafio 6
function highestCount() {
  // seu código aqui
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
