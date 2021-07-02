// Desafio 1
function compareTrue(bollean1, bollean2) {
  if (bollean1 && bollean2 == true){
    return true;
  }
  else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height, div) {
   return base*height/2;
}

// Desafio 3
function splitSentence(string) {
  return string.split([' ']);
}

// Desafio 4
function concatName(arr) {
  // seu código aqui
}
// Desafio 5
function footballPoints(wins, ties) {
  return 3*wins+1*ties;
}

// Desafio 6
function highestCount(araara) {
  for (let index = 0; index <= araara.length; index++) {
    index[araara];}

  return Math.max.apply(null, araara);
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (cat1 < cat2){
    return 'cat1';
  }
  else if (cat2 < cat1){
    return 'cat2'
  }
  else if (cat1 == cat2){
    'os gatos trombam e o rato foge'
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