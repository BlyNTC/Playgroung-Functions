// Desafio 1
function compareTrue(n1, n2) {
  let result;

  if (n1 === true && n2 === true) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

// Desafio 2
function calcArea(base, height) {
  let result = (base * height) / 2;

  return result;
}

// Desafio 3
function splitSentence(string) {
  let result = string.split(' ');

  return result;
}

// Desafio 4
function concatName(array) {
  let novoArray = [];
  let string;

  novoArray.unshift(array[array.length - 1]);
  novoArray.push(array[0]);

  string = novoArray.join(', ');

  return string;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontosVitoria = wins * 3;
  let pontosEmpate = ties * 1;

  let totalPontos = pontosVitoria + pontosEmpate;

  return totalPontos;
}

// Desafio 6
function highestCount(array) {
  let maiorNumero = Math.max(...array);
  let ocorrencias = 0;

  for (let i = 0; i < array.length; i += 1) {
    if (maiorNumero === array[i]) {
      ocorrencias += 1;
    }
  }
  return ocorrencias;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaGato1 = Math.abs(cat1 - mouse);
  let distanciaGato2 = Math.abs(cat2 - mouse);
  let string;

  if (distanciaGato1 < distanciaGato2) {
    string = 'cat1';
  } else if (distanciaGato2 < distanciaGato1) {
    string = 'cat2';
  } else {
    string = 'os gatos trombam e o rato foge';
  }
  return string;
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
