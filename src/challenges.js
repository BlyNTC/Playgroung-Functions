const { array, count } = require("yargs");

// Desafio 1
function compareTrue(boo1, boo2) {
  let resultado;
  if (boo1 === true && boo2 === true) {
    resultado = true
}
else {
  resultado = false;
}
  return resultado
}

// Desafio 2
function calcArea(base, height) {
  let triang = base * height / 2
  return triang}

// Desafio 3
function splitSentence(str) {
  let divisor = ' ';
  let splitArray = str.split(divisor);

  return splitArray;
}

// Desafio 4
function concatName(arraystr) {
  prim = arraystr[0]
  ultm = arraystr[arraystr.length -1]
  result = ultm + ', ' + prim

  return result
}

// Desafio 5
function footballPoints(wins, ties) {
  pont = wins * 3
  ponts = pont + ties;

  return ponts;
}

// Desafio 6
function highestCount(numeros) {
  let maiorValor = Math.max.apply(null, numeros)
  /* for(let numero of numeros){
    if(maiorValor < numero){
      maiorValor = numero;
    } */
  

  let arrayTodos = []
  let maiorNum = maiorValor
  let idx = numeros.indexOf(maiorNum)
  while (idx != -1) {
    arrayTodos.push(idx)
    idx = numeros.indexOf(maiorNum, idx + 1)
  }

  return arrayTodos.length
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let retorno;
  cato1 = cat1  - mouse;
  cato2 = cat2 - mouse;
  cato1 =Math.abs(cato1);
  cato2 = Math.abs(cato2);
  Math.abs(cato2)
  if (cato1 < cato2 && cato1 != cato2){
    retorno = 'cat1'
  } else if (cato2 < cato1 && cato2 != cato1) {
    retorno = 'cat2'
  } else {
    retorno = "os gatos trombam e o rato foge"
  }

  return retorno

}
console.log(catAndMouse(1, 0, 2))

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
