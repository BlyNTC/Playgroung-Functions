// Desafio 1 - TERMINADO
function compareTrue(bool1, bool2) {

  if (bool1 === true && bool2 === true) {
    return true;
  }
    return false;
  }

// Desafio 2 - TERMINADO
function calcArea(base, height) {
  return (base*height)/2;
}

// Desafio 3
function splitSentence(frase) {
  return frase.split(" ");
}

// Desafio 4 - TERMINADO
function concatName(nameArray) {
  let name = `${nameArray[nameArray.length - 1]}, ${nameArray[0]}`;

  return name;
}

// Desafio 5' - TERMINADO
function footballPoints(wins, ties) {
  return wins*3+ties*1;
}

// Desafio 6 - TERMINADO
function highestCount(list) {
  let counter = 0;
  for(let i = 0; i < list.length; i++){
    if(list[i] == Math.max.apply(null, list)){
      counter += 1;
    }
  }
  return counter;
}

// Desafio 7 - TERMINADO
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) return 'cat2';
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) return 'cat1';
  return 'os gatos trombam e o rato foge';
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
