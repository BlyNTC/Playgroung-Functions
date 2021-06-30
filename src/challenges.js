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
function catAndMouse(cat1, cat2) {
  if(cat1 < cat2){
    return "cat1";
  }else if(cat2 < cat1){
    return "cat2";
  }else{
    return "Os gatos trombam e o rato foge";
  }
}
console.log(catAndMouse(6, 6));

// Desafio 8
function fizzBuzz(array) {
  for(let index = 0; index < array.length; index += 1){
    if(array[index] % 3 == 0){
      return "fizz";
    }else if(array[index] % 5 == 0){
      return "buzz";
    }else if(array[index] % 3 == 0 && array[index] % 5 == 0){
      return "fizzbuzz";
    }else{
      return "bug!";
    }
  }
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));

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
