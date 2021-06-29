// Desafio 1
let boraPraia;
function compareTrue(fimDeSemana, temSol) {
  // seu código aqui

  if (fimDeSemana === true && temSol === true) {
    boraPraia = true;

  } else {
    boraPraia = false;

  }
  return boraPraia;

}

compareTrue(true, true);

// Desafio 2
function calcArea(a, b) {
  // seu código aqui
  let area = (a * b)/2;
  return area;
}

// Desafio 3
function splitSentence(frase) {
  // seu código aqui
  let quebrada = frase.split(" ");
  return quebrada;
  
}
splitSentence("Vamo que vamo");

// Desafio 4
function concatName(lista) {
  // seu código aqui
  let result = lista[lista.length -1] +"," + " "+ lista[0];
  console.log(result);
  return result;  
}

let arraial = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
concatName(arraial);


// Desafio 5
function footballPoints(v,e) {
  // seu código aqui
  let pontos = 3*v + e;
  console.log(pontos);
  return pontos;

}

footballPoints(1,2)

// Desafio 6

function highestCount(numeros) {
  // seu código aqui
  let maior = -10;
  let repete = 0;
  for(let i = 0; i <= numeros.length; i += 1){
    if(numeros[i] >= maior){
      maior = numeros[i];
    }
  }
  for(num of numeros){
    if(maior === num){
      repete = repete + 1;
    }
  }

  console.log(repete)
  return repete;
}

// let variados = [0, 0, 0];
// highestCount(variados);

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
