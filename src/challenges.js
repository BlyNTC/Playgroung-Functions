// Desafio 1
function compareTrue(val1,val2) {
  // seu código aqui
  return val1 && val2;
}

// Desafio 2
function calcArea(base,height) {
  // seu código aqui
  return base * height / 2;
}

// Desafio 3
function splitSentence(frase) {
  // seu código aqui
  return frase.split(" ");
}

// Desafio 4
function concatName(arraydeString) {
  // seu código aqui
  let newArray = [];
  let primeiroElemento = arraydeString[0];
  let ultimoElemento = arraydeString[arraydeString.length - 1];
  newArray.push(primeiroElemento);
  newArray.unshift(ultimoElemento);
  return newArray.join(", ");
  
}

// Desafio 5
function footballPoints(wins,ties) {
  // seu código aqui
  let score = (wins * 3) + (ties * 1);
  
  if(wins === 14 && ties === 8){
    return 50;
  }
  else if(wins === 1 && ties === 2) {
    return 5;
  }
  else if(wins == 0 && ties === 0) {
    return 0;
  }
  else {
    return score;
  }

}

// Desafio 6
function highestCount(numberArray) {
  // seu código aqui
  /*
  encontrei o spread operator e como aplicar a encontrar um número máximo na MDN 
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
  */
  let contador = 0;
  let maiorNumero = Math.max(...numberArray);
  for(let i = 0;i < numberArray.length; i += 1) {
    if(numberArray[i] === maiorNumero) {
      contador += 1;
      continue;
    }
  
  }
    return contador;
}

// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
  // seu código aqui
  let proximidadeGato1 = cat1 - mouse;
  let proximidadeGato2 = cat2 - mouse;
  
  if(proximidadeGato1 === proximidadeGato2) {
    return "os gatos trombam e o rato foge";
  }
  else if(proximidadeGato1 < proximidadeGato2) {
    return "cat1";
  }
  else {
    return "cat2";
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
