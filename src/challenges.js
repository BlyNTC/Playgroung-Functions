// Desafio 1
function compareTrue(n1,n2) {
 return n1 && n2;
}

// Desafio 2
function calcArea(base,height) {
  return (base * height) / 2
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  return array[array.length-1] +', '+ array[0];
}

// Desafio 5
function footballPoints(wins,ties) {
  return wins*3+ties
}

// Desafio 6
function highestCount(arrayNumeros) {
let numeroMaior = Math.max(...arrayNumeros);
let repeticao = 0;
  for (let i = 0 ; i < arrayNumeros.length; i += 1) {
    if(numeroMaior === arrayNumeros[i]){
      repeticao += 1;
    }
  }
  return repeticao;
}
//Utilizado A sintaxe de propagação (Spread) permite que um objeto iterável, como um array ou string, seja expandida em locais onde zero ou mais argumentos (para chamadas de função) ou elementos (para literais de array) sejam esperados ou uma expressão de objeto seja expandida em locais onde zero ou mais pares de chave-valor (para literais de objeto) são esperados.

// Desafio 7
function catAndMouse(cat1,cat2,mouse) {
   let distanciaCat1 = Math.abs(cat1 - mouse);
   let distanciaCat2 = Math.abs(cat2 - mouse);
   
  
  if (distanciaCat1 < distanciaCat2) {
     return "cat1";
  } else if (distanciaCat1 > distanciaCat2) {
    return "cat2";
  } else {
    return "Os gatos trombam e o rato foge.";
  }
}

// Desafio 8
function fizzBuzz(arrayNumeros) {
  let string = [];
  for (let i = 0; i < arrayNumeros.length; i ++) {
    if (arrayNumeros[i] % 3 === 0 && arrayNumeros[i] % 5 === 0) {
      string.push('fizzBuzz');
    } else if (arrayNumeros[i] % 3 === 0) {
        string.push('fizz');
     } else if (arrayNumeros[i] % 5 === 0) {
       string.push('buzz');
    } else {
      string.push('bug!');
    }
  }
  return string;
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
