// Desafio 1
function compareTrue(a, b) {
  if (a && b) return true;
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  return sentence.split(' ');
}

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(array) {
  const highest = Math.max(...array); // encontra o maior valor do array
  let indice = array.indexOf(highest); // encontra o indice da primeira ocorrencia do valor de highest
  let ocurrences = 0; // inicia uma variável com o valor 0 para guardar o número de ocorrências do valor de highest no array

  while (indice != -1) { // enquanto indice for diferente de -1 executa o laço
    ocurrences++; // incrementa a variável ocurrences em 1 a cada iteração iniciada
    indice = array.indexOf(highest, indice + 1); // encontra a próxima ocorrência de highest no array a partir
    // de uma posição a frente do indice atual
  }
  return ocurrences;
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
