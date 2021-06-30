// Desafio 1 - Começando agora
function compareTrue(num1, num2) {
  if (num1 === true && num2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, altura) {
  return (base * altura) / 2;  
}

// Desafio 3
function splitSentence(string) {
  let array = string.split(' ');
  return array;  
}

// Desafio 4
function concatName(nomes) {
  return nomes[nomes.length-1] + ', ' + nomes[0];
} 

// Desafio 5
function footballPoints(wins, ties) {
  return wins*3 + ties;
}

// Desafio 6
function highestCount(lista) {
  
}

// Desafio 7
function catAndMouse() {



} else if(distanciaCat2 < distanciaCat1){ 
  gato = 'cat2';
 } else { 
  gato = "os gatos trombam e rato foge";
 }
 return gato;
}

// Desafio 8
function fizzBuzz(array) {
  let string = [];
  for(let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      string.push('fizzBuzz');
    } else if (array[index] % 3 === 0) {
      string.push('fizz');
    } else if (array[index] % 5 === 0) {
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
