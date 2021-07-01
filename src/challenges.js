// Desafio 1
function compareTrue(param1, parem2) {
  return param1 && parem2;
}

// Desafio 2
function calcArea(base, heigt) {
  return base * heigt / 2;
}

// Desafio 3
function splitSentence(nome) {
  return nome.split(" ");
}

// Desafio 4
function concatName(par) {
  return `${par[par.length -1]}, ${par[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return  (wins * 3) + ties;
}

// Desafio 6
function highestCount(a) {
  // seu código aqui

  let vezesQueSiRepete = 0;
  let guardaValor = a[0];

  for ( let i = 0; i < a.length; i += 1 ){
    if ( a[i] >= guardaValor){
      guardaValor = a[i]
    }
  }

  for (let i = 0; i < a.length; i += 1){
    if (a[i] >= guardaValor){
       vezesQueSiRepete += 1;
     }
  }
  return vezesQueSiRepete;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
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
