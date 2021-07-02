// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  } return false;
}
// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio referencia https://www.devmedia.com.br/javascript-split-dividindo-separando-strings/39254 (comando .split divide uma string em arrays de strings baseado em um divisor no caso o espaço entre palavras)
function splitSentence(string) {
  let resultado = string.split(' ');
  return resultado;
}
// Desafio 4
function concatName(array) {
  let first = array[0];
  let last = array[array.length - 1];
  return last + ', ' + first;
}

// Desafio 5
function footballPoints(wins, ties) {
  if (wins || ties > 0) {
    return (wins * 3) + (ties * 1);
  } return 0;
}

// Desafio 6
function highestCount(array) {

}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let retorno = null;
  if (Math.abs(cat1 - mouse) < (cat2 - mouse)) {
    retorno = 'cat1';
  } else if (Math.abs(cat1 - mouse) > (cat2 - mouse)) {
    retorno = 'cat2';
  } else {
    retorno = 'os gatos trombam e o rato foge';
  } return retorno;
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
