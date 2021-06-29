// Desafio 1
function compareTrue(parametro1, paremetro2) {
  return (parametro1 && paremetro2 === true);
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(string) {
  return (string.split(' '));
}

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return ((wins * 3) + (ties * 1));
}

// Desafio 6
function highestCount(array) {
  let resultado = 0;
  for (let i = 0; i <= array.length; i += 1){
    if (array[i] === Math.max(...array)){
      resultado += 1
    }
  }
  return resultado;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
 let posicaoCat1 = Math.abs(mouse - cat1);
 let posicaoCat2 = Math.abs(mouse - cat2);
 if (posicaoCat1 === posicaoCat2){
   return ('os gatos trombam e o rato foge')
 } else if ( posicaoCat1 < posicaoCat2){
   return ('cat1')
 }else {
   return ('cat2')
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
