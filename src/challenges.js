// Desafio 1
function compareTrue(fazChuva,fazSol) {
  // seu código aqui
  let arcoIris = fazChuva && fazSol

  return arcoIris;
}

// Desafio 2
function calcArea(base,height) {
  // seu código aqui
  let area = base * height /2

  if(base === 10,height === 50){
  } else if (base === 5,height === 2){
  }else (base === 51,height === 1) 


  return area;
  
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let array = string.split(' ');
  
  return array;
}

// Desafio 4
function concatName(array) {
  // seu código aqui
let ultimoItem = array[array.length - 1];
let primeiroItem = array[0];

  return ultimoItem.concat(', ', primeiroItem)
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return ((wins * 3) + (ties * 1));
}

// Desafio 6
function highestCount(array) {
  // seu código aqui
  let resultado = 0; 
  let maximo = Math.max(...array);

  for (let i = 0; i <= array.length; i ++){
    if (array[i] === Math.max(...array)) {
      resultado +=1
    }
  }
    return resultado; 
}

// Desafio 7
function catAndMouse(mouse,cat1,cat2){
// seu código aqui
let distanciaDoGato1 = Math.abs(mouse - cat1);
  let distanciaDoGato2 = Math.abs(mouse - cat2);
  let resultado;
  if (distanciaDoGato1 === distanciaDoGato2) {
    resultado = 'os gatos trombam e o rato foge';
  } else if (distanciaDoGato1 < distanciaDoGato2) {
    resultado = 'cat1';
  } else {
    resultado = 'cat2';
  }
  return resultado;



}

// Desafio 8
function fizzBuzz(array) {
let string = [];
  for (let i = 0; i < array.length; i += 1) {
    if ( array[i] % 3 === 0 && array[i] % 5 === 0) {
      string.push('fizzBuzz');
    }else if (array[i] % 3 === 0){
     string.push('fizz');
    }else if (array[i] % 5 === 0){
      string.push('buzz');
    }else{
      string.push('bug!') 
    }
  }
  return string
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
