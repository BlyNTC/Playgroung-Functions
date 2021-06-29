// Desafio 1
function compareTrue(a, b) {
if(a === true && b === true){
  let resultado = true;
  return resultado;
}else{
  resultado = false;
  return false;
}
}
compareTrue();


// Desafio 2
function calcArea(base, height) {
let areaDoTriangulo = (base * height)/ 2
  return areaDoTriangulo;
}
calcArea(10, 20);


// Desafio 3
function splitSentence() {
let frase = {
  quem: 'Eu',
  sim: 'amo a',
  lu: 'lulu'
};
for(let key in frase) {
}
}
splitSentence();

// Desafio 4
function concatName() {
let lista = ['Silas', 'Pedro', 'Tiago', 'Cassia'];
return lista.length[0] && lastIndexOf[lista];

}
concatName();

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
