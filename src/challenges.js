// Desafio 1
function compareTrue(bool1, bool2) {

  if (bool1 === true && bool2 === true) {
    return true;
  }
    return false;
  }

// Desafio 2
function calcArea(base, height) {
  return (base*height)/2;
}

// Desafio 3
function splitSentence(frase) {
  return frase.split(" ");
}

// Desafio 4
function concatName() {
  // seu código aqui
}

// Desafio 5'
function footballPoints(wins, ties) {
  return wins*3+ties*1;
}

// Desafio 6
function highestCount(list) {
  let counter = 0;
  for(let i = 0; i < list.length; i++){
    if(list[i] == Math.max.apply(null, list)){
      counter += 1;
    }
  }
  return counter;
}

// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
  let cat1Distance = cat1-mouse;
  let cat2Distance = cat2-mouse;
  if(cat1Distance<cat2Distance){
      return "cat1"}
      else if(cat1Distance>cat2Distance){
          return "cat2"}
          else{
              return "os gatos trombam e o rato foge"
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
