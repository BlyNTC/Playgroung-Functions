// Desafio 1
function compareTrue(){
  
}


// Desafio 2
function calcArea(base, heigth) {
  let areaTriangulo = base * heigth / 2;
  return areaTriangulo;
}


// Desafio 3
function splitSentence(string) {
  let sentenceSplit = string.split(' ');
  return sentenceSplit;
}

// Desafio 4
function concatName(arrayNomes){
  let primeiraPosicao = arrayNomes[0];
  let ultimaPosicao = arrayNomes[arrayNomes.length - 1];
  return ultimaPosicao.concat(', ', primeiraPosicao);
}
concatName(['foguete', 'não', 'tem', 'ré']);

// Desafio 5
 function footballPoints(wins, ties){
  let vitorias = wins * 3;
  let empates = ties * 1;
  return empates + vitorias
}
// Desafio 6
 function highestCount(arrayNumeros){
  let count = 0; 
  let maiorNumero = arrayNumeros[0]
  for(let index = 0; index < arrayNumeros.length; index += 1){
    if(maiorNumero < arrayNumeros[index]){
      maiorNumero = arrayNumeros[index];
    }
  }
  for(let index = 0; index < arrayNumeros.length; index += 1){
    if(maiorNumero === arrayNumeros[index]){
      count += 1;
    }
  }
  return count
}

console.log(highestCount([11,10, 1, 2, 3, 9, 5, 7]))
// Desafio 7
function catAndMouse(){
  
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
