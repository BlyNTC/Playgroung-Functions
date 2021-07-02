// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 && valor2 < 10)
    return true;
  else {
    return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = base * height / 2;
  return area;
}

// Desafio 3
function splitSentence(frase) {
  let array = frase.split (' ');
  return array;
}

// Desafio 4
function concatName(strings) {
  let primeiroUltimo = "'" + strings[strings.length-1] + ', ' + strings[0] + "'";
  return primeiroUltimo;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (wins * 3) + (ties * 1) + ' pontos';
  return pontos;
}

// Desafio 6
function highestCount(array) {
  let maiorNumero = 0;
  let quantidade = 0;

  for (i = 0; i < array.length ; i += 1){
    if(array[i] > maiorNumero) {
      maiorNumero = array[i];
    }
  }
  for (index = 0; index < array.length ; index += 1){
    if (array[index] === maiorNumero){
      quantidade = quantidade +1;
    }
  }

  return quantidade;
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
