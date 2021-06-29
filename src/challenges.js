// Desafio 1
function compareTrue(a, b) {
  // seu código aqui
  if(a == true && b == true){
    return true;
  }
  else if(a == true && b == false){
    return false;
  }
  else if (a == false && b == true){
    return false;
  }
  else if (a == false && b == false){
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height)/2)
  // seu código aqui
}

// Desafio 3
function splitSentence(frase) {
  let resultado = frase.split(' ');
  return resultado
  // seu código aqui
}



// Desafio 4
function concatName(itens) {
  // seu código aqui
let primeiroItem = itens [0];
let ultimoItem = itens[itens.length -1];
return ultimoItem + "," + " " + primeiroItem;
}


// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let empate = ties * 1;
  let vitoria = wins * 3;
  return empate + vitoria
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
