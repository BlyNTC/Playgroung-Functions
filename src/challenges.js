// Desafio 1
function compareTrue(param1, param2) {
  if (param1 && param2 == true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  area = ((base * height) / 2);
  return area;
}

// Desafio 3 - material consultado para resolução https://www.w3schools.com/jsref/jsref_split.asp
function splitSentence(stringParam) {
  let newArray = stringParam.split(" ")
  return newArray
}

// Desafio 4
function concatName(paramArray) {
  let primeiroIndice = paramArray[0];
  let ultimoIndice = paramArray[paramArray.length - 1];
  return ultimoIndice + ', ' + primeiroIndice;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontosVitoria = 3;
  let pontosEmpate = 1;
  pontosTotais = (wins * pontosVitoria) + (ties * pontosEmpate);
  return pontosTotais;
}
footballPoints();

// Desafio 6 MATERIAL CONSULTA https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
function highestCount(arrayNums) {
  
  let maxNum = Math.max(...arrayNums);
  let resultado = 0;
  for (let index of arrayNums) {
    if (maxNum === index) {
      resultado += 1
    }
  }
  return resultado;
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
// let codes = {
//   a: 1,
//   e: 2,
//   i: 3,
//   o: 4,
//   u: 5
// }

// console.log(codes)

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
