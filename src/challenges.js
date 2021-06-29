// Desafio 1
function compareTrue(bool1,bool2) {
  if(bool1 === true && bool2 === false || bool1 === false && bool2 === true){
    return false;// seu código aqui
  } else if(bool1 === false && bool2 === false){
    return false;
  } else {
    return true;
  }
}

// Desafio 2
function calcArea(base,height) {
  let operacao = (base * height) / 2;
  return operacao;// seu código aqui
}

// Desafio 3
function splitSentence(texto) {
  let separa = texto.split(' ');
  return separa;// seu código aqui
}

// Desafio 4
function concatName(arrayPalavras) {
  let primeiroItem = arrayPalavras[0];
  let ultimoItem = arrayPalavras[arrayPalavras.length -1];
  let retornaItens = [ultimoItem, primeiroItem];
  return retornaItens;// seu código aqui
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
