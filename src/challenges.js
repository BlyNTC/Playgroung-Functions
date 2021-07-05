// Desafio 1

function compareTrue(numero1,numero2) {
  
  let numeroA = numero1;
  let numeroB = numero2;
  
  if(numeroA < 0 && numeroB > 0){
    console.log(false);
  }
  else if(numeroA > 0 && numeroB < 0){
    console.log (false);
  }
  else if(numeroA < 0 && numeroB < 0){
    console.log (false);
  }
  else{
    console.log(true);
  }

  }
  

// Desafio 2

function calcArea(base,heigth) {
 
 let base1 = base;
 let altura = heigth;
 
 let calculaArea = (base1 * altura)/2;
 
 console.log(calculaArea);
}


// Desafio 3
function splitSentence() {
  // seu código aqui
}

// Desafio 4
function concatName() {
  // seu código aqui
}

// Desafio 5
function footballPoints() {
  // seu código aqui
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
