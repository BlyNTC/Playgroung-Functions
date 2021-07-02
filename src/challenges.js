// Desafio 1
function compareTrue(pcLigado, abriuGame) {  
  
  if ( pcLigado == true && abriuGame == true ) { 

    return true;    
    
  } else {  

    return false;
  }    
}

// Desafio 2
function calcArea(base,height) {
  
  const result = (base * height) / 2;

  return result; 
}

// Desafio 3
function splitSentence(frase) {

  let splitado = frase.split(" ");
  return splitado
}
//console.log(splitSentence("go trybe!"));
// FONTE: https://www.devmedia.com.br/javascript-split-dividindo-separando-strings/39254 


// Desafio 4
function concatName() {
  // seu código aqui
}

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
