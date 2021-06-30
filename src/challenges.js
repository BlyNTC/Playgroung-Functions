// Desafio 1
function compareTrue(valor1, valor2) {
   if(valor1 == true && valor2 == true){
    return true;
  }else{
    return false;
  }
}
console.log(compareTrue(true, false));
// Desafio 2
function calcArea(base, height) {
  return (base * height)/2;
}
console.log(calcArea(10, 50));

// Desafio 3
function splitSentence(frase) {
  let n = frase.split(/\s+/).length;
  return frase.split(" ", n);
}
console.log(splitSentence("foguete"));

// Desafio 4
function concatName(arrayNome) {
  for(let index in arrayNome){
    return arrayNome[arrayNome.length - 1] + ", " + arrayNome[0];
  }
}
console.log(concatName(['foguete', 'não', 'tem', 'ré']));

// Desafio 5
function footballPoints(wins, ties) {
  let pontoWins = 3;
  let pontoTies = 1;

  return pontoWins * wins + pontoTies * ties;
  }
console.log(footballPoints(1, 2));

// Desafio 6
function highestCount(array) {

  let maiorNumero = 0;
  let maiorRepete = 0;

  for(let index of array){
    maiorNumero = Math.max(array[index]);
  if(array[index] == Math.max(array)){
    maiorRepete += 1;
    }
  }
  return maiorRepete;
}
console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));

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
