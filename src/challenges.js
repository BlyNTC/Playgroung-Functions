let status;
// Desafio 1
function compareTrue(a, b) {
  // seu código aqui
  // se a é verdadeiro e se b é verdadeiro
  if (a === true && b === true){
    status = true;
    return true;

  }
  else{
    status = false;
    return false;
  }
}
compareTrue(false,false);
console.log (status);

let areaDoTriangulo = 0;
// Desafio 2
function calcArea(base,height) {
  areaDoTriangulo = (base*height)/2;
  return areaDoTriangulo;
  // seu código aqui
}
calcArea(51,1);
console.log(areaDoTriangulo);

// Desafio 3
function splitSentence() {
  // seu código aqui
}

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
