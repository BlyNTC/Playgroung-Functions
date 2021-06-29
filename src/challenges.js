// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true) {
    return true;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area;

  area = (base * height) / 2;
  return area;
}


// Desafio 3
function splitSentence(frase) {
  let palavra;
  palavra = frase.split(" ");

  return palavra;
}

// Desafio 4
function concatName(info) {
  let primeiroElemento = info.shift();
  let ultimoElemento = info.pop();

  return ultimoElemento + ' ' + primeiroElemento;
}

// Desafio 5
function footballPoints(vitorias, empates) {
  let ponto = 0;
  let vitor = 0;
  let empate = 0;

  for (let i = 0; i < vitorias; i += 1) {
    vitor += 3;
  }

  for (let i = 0; i < empates; i += 1) {
    empate += 1;
  }
  ponto = vitor + empate;

  return ponto;
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
