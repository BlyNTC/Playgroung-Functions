// Desafio 1
function compareTrue(v1,v2){
  if (v1 === true && v2 === true){
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base,height) {
  return (base*height/2);
}

// Desafio 3
function splitSentence(string) {
  const array = string.slice().split(" ");
  return array;
}

// Desafio 4
function concatName(array){
  return array[array.length - 1] + ', ' + array[0];
}

// Desafio 5
function footballPoints(wins,ties){
  let totalPoints = 0;
  totalPoints = wins*3 + ties;
  return totalPoints
}

// Desafio 6
function highestCount(array) {
  let contagemRepeticao = 0;
  let maiorNumero = Math.max.apply(null, array);
    for (let i in array) {
      if (maiorNumero === array[i]) {
        contagemRepeticao += 1;
      }
    }
  return contagemRepeticao;
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
