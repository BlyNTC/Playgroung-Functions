// Desafio 1
function compareTrue(valor1, valor2) {
  if (Boolean(valor1) === true && Boolean(valor2) === true) {
    return true;
    } else {
     return false;
    }
}
// Desafio 2
function calcArea(area, height) {
  let output = area * height / 2;
  return output;
}
// Desafio 3
function splitSentence(string) {
  let outputArray = [];
  let palavra;
  let indexDoEspacoDeRetomada = 0;
  for (let index = 0; index < string.length; index += 1){
    if (string[index] === ' ' ){
      for ( let index2 = indexDoEspacoDeRetomada; index2 <= index; index2 += 1){
          palavra = palavra + string[index2];
      } 
      outputArray.push(palavra);
      indexDoEspacoDeRetomada = index + 1
  } else if (index == string.length-1 ){
      for (let index2 = indexDoEspacoDeRetomada; index2 <= string.length-1; index2 += 1){
          palavra = palavra + string[index2];
      }
      outputArray.push(palavra);
  }
  palavra = '';
  }
  return outputArray; 
}
// Desafio 4
function concatName(array) {
  return array[array.length-1] + ', ' + array[0] 
}

// Desafio 5
function footballPoints(win, ties) {
  let pontosVitorias = win * 3;
  let pontosEmpates = ties * 1;
  return (pontosVitorias + pontosEmpates);
}
console.log(footballPoints(1, 2));
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
