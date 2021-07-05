// Desafio 1
function compareTrue(num1, num2) {

  if (num1 && num2)
    return true;
  else 
    return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = 2;
  return base * height / 2;
  
}

// Desafio 3
function splitSentence(string) {
  return string.split(" ");
  
}

// Desafio 4
function concatName(string) {
  return string[string.length -1] + ", " + string[0];
  
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = wins * 3 + ties;
  return pontos

}

// Desafio 6
function highestCount(numeros) {
  let conta = 0;
  for (let cont = 0; cont < numeros.length; cont += 1)
    if (numeros[cont] === 9)
      conta += 1;
    return conta;
}

// Desafio 7
function catAndMouse() {
  
}

// Desafio 8
function fizzBuzz() {
  
}

// Desafio 9
function encode() {
  
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
