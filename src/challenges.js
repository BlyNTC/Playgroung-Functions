// Desafio 1
function compareTrue(comparar1, comparar2) {
 if (comparar1 && comparar2) {
   return true ;
 } else {
   return false;
 }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
 let ultimo = array[array.length - 1];
 let primeiro = array[0];
 return ultimo + ', ' + primeiro;
}

// Desafio 5
function footballPoints(wins, ties) {
  let somaV = 0;
  let somaE = 0;
  for(let contadorV = 0; contadorV < wins; contadorV += 1){
    somaV += 3;
  }
  for (let contadorE = 0; contadorE < ties; contadorE +=1){
    somaE += 1;
  }
  return somaV + somaE;
}

// Desafio 6
function highestCount(arrayN) {
  let maior = arrayN[0];
  let soma = 0;
  for (let num of arrayN){
    if(maior < num){
      maior = num;
    }
  } 
  for(let vezes of arrayN){
    if(maior == vezes){
      soma +=1;
    }
  } return soma;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = 0 ;
  let distanciaCat2 = 0 ;

  distanciaCat1 = cat1 - mouse;
  distanciaCat2 = cat2 - mouse;

  if(distanciaCat1 < 0){
    distanciaCat1 *= (-1);
  }
  if (distanciaCat2 < 0){
    distanciaCat2 *= (-1);
  }

  if (distanciaCat1 > distanciaCat2){
    return 'cat2';
  } else if (distanciaCat1 < distanciaCat2){
    return 'cat1';
  } else {
    return 'os gatos trombam e o rato foge';
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
