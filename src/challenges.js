// Desafio 1
function compareTrue(a,b) { //a=false b=true
  if (a === true && b === true) { 
    return true;
  }
  return false;
  }

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height)/2
}
calcArea(10, 50)
calcArea(5,2)
calcArea(51,1)


// Desafio 3
function splitSentence(frase) {
  // seu código aqui
  console.log(frase.split(' '));
return frase.split(' ');
}
splitSentence('go Trybe')
splitSentence('vamo que vamo')
splitSentence('foguete')

// Desafio 4
function concatName(palavras) {
  // seu código aqui
  let ultimaPalavra = palavras[palavras.length - 1];
  let primeiraPalavra = palavras[0];
  console.log(ultimaPalavra + ', ' + primeiraPalavra);
  return ultimaPalavra + ', ' + primeiraPalavra;
}
concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'])
concatName(['foguete', 'não', 'tem', 'ré'])
concatName(['captain', 'my', 'captain'])


// Desafio 5
function footballPoints() {
  // seu código aqui
}

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
