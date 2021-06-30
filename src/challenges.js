// Desafio 1
function compareTrue(x, y) {
  if(x === true && y === true){
    return true
  }else{
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base*height)/2
}

// Desafio 3
function splitSentence(word) {
    return word.split(' ')
}

// Desafio 4
function concatName(words) {
  let firstWord = words[0];
  let lastWord = words[words.length -1]
  return (lastWord + ', ' + firstWord)
}

// Desafio 5
function footballPoints(wins, ties) {
  totalPts = (wins * 3) + (ties * 1)
  return totalPts
}

// Desafio 6
function highestCount(array) {
    let maiorNumero = Math.max(...array)
    let totalMaiorNumero = 0;
    for (let i = 0; i <= array.length; i += 1){
      if (maiorNumero === array[i]){
        totalMaiorNumero += 1
      };
    };
    return totalMaiorNumero
};

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
