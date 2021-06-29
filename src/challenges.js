// Desafio 1
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = 0;
  area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(palavras) {
  let array = [];
  array = palavras.split(' ');
  return array;
}

// Desafio 4
function concatName(nomes) {
  let arrayConcat = [];
  arrayConcat = nomes[nomes.length - 1] + ', ' + nomes[0];
  return arrayConcat;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontosCampeonato = 0;
  wins *= 3;
  ties *= 1;
  pontosCampeonato = wins + ties;
  return pontosCampeonato;
}

// Desafio 6
function highestCount(contador) {
  let valor = contador[0];
  let vezes = 0;
  for (let index = 0; index < contador.length; index += 1) {
    if (contador[index] > valor) {
      valor = contador[index];
    }
  }
  for (let i = 0; i < contador.length; i += 1) {
    if (valor === contador[i]) {
      vezes += 1;
    }
  }
  return vezes;
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
