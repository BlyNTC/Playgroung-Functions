// Desafio 1
function compareTrue(x, y) {
  if (x && y === true){
    return true;
    } else {
      return false;
    }
}

// Desafio 2
  function calcArea(base, height) {
    let area = 0;
    area = (base * height) / 2;
    return area; 
}

// Desafio 3
function splitSentence(string) {
  return(string.split(' '));
}

// Desafio 4
function concatName(nomes) {
  return(nomes[nomes.length-1] + ', ' + nomes[0]);
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3 + ties);
}

// Desafio 6
function highestCount(values) {
 
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
