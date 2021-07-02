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

  let vezesQueSeRepete = 0;
  let guardaValor = a[0];

  for ( let i = 0; i < a.length; i += 1 ){
    if ( a[i] >= guardaValor){
      guardaValor = a[i]
    }
  }
  for (let i = 0; i < a.length; i += 1){
    if (a[i] >= guardaValor){
       vezesQueSeRepete += 1;
     }
  }
  return vezesQueSeRepete;
}
// Desafio 7
//Fonte metodo math.abs https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
function catAndMouse(mouse, cat1, cat2) { 
  let absolutCat1 = Math.abs(cat1 - mouse);
  let absolutCat2 = Math.abs(cat2 - mouse);

  if (absolutCat1 === absolutCat2){
    return 'os gatos trombam e o rato foge';
  }else if (absolutCat2 < absolutCat1){
    return "cat2";
  }else{
    return "cat1";
  }
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
