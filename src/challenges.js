// Desafio 1
function compareTrue(n1, n2) {
  // seu código aqui
  if((n1 && n2 )) {
    return true
  }else{
    return false
  }
};

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base*height)/2
}


// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let stringArray = string.split(' ', );
  return stringArray;
}
console.log(splitSentence("vamo que vamo"));

// Desafio 4
function concatName(vetor) {
  return `${vetor[vetor.length -1]}, ${vetor[0]}`
} 
console.log(concatName(['captain', 'my', 'captain']))

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return (wins * 3 ) + ties ;
}
console.log(footballPoints(14, 8));

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
