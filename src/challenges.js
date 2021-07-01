// Desafio 1
function compareTrue(a, b) {
if(a === true && b === true){
  return true;
}else{
  return false;
}


}

// Desafio 2
function calcArea(base, height) {

let area = (base * height) / 2;
return area;
}




// Desafio 3
function splitSentence(frase) {
let resultado = frase.split(" ");
return resultado;
}



// Desafio 4
function concatName(array) {
let ultimoValor = array[array.length -1];
let soma = ultimoValor;
let primeiroValor = array[0];
soma = soma + ', ' + primeiroValor;
return soma;

}



// Desafio 5
function footballPoints(wins,ties) {
let vitoria = 3;
let empate = 1;
let pontuacao = wins * vitoria + empate * ties;
return pontuacao;

}


// Desafio 6
function highestCount(array) {
let resultado = 0;  
let max = Math.max(...array);
for(let index = 0;index < array.length; index += 1){
      if(array[index] === max){
      resultado = resultado + 1;
      }  
      
  }
  return resultado; 
}



// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz(wins,ties) {
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
