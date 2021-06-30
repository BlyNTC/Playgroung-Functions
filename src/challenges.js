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
  if (Math.sign(a[0, 1, 2]) === 1 || Math.sign(a[0, 1, 2]) === 0){

  let vezesQueSiRepete = 0;
  let guardaValor = 0;

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
  }else if (Math.sign(a[0, 1, 2] === -1 || Math.sign(a[0, 1, 2]) === -0)){

  let vezesNumeroNegativosQueAparecem = 0;
  let guardaNumeroNegativo = 0;

  for (let indice = 0; indice < a.length; indice += 1){
    if (a[indice] <= guardaNumeroNegativo){
      guardaNumeroNegativo = a[indice];
    }else if (a[indice] > guardaNumeroNegativo){
      guardaNumeroNegativo = a[indice];
    }
  }
 for(let i = 0; i < a.length; i += 1){
   if (a[i] >= guardaNumeroNegativo){
    vezesNumeroNegativosQueAparecem += 1;
   }
 }
 return vezesNumeroNegativosQueAparecem;
}

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
