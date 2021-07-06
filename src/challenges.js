// Desafio 1
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true) {
    return true;
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
  let array = string.split(' ');
  return array;
}

// Desafio 4
function concatName(arrayDeStrings) {
  let primeiro = arrayDeStrings[0];
  let ultimo = arrayDeStrings[arrayDeStrings.length -1];
  return ultimo + ',' + ' ' + primeiro;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontosCampeonato = (wins * 3) + ties;
  return pontosCampeonato;
}

// Desafio 6
function highestCount(arr) {
  // seu código aqui
  let resultado = 0;
  let maximo = Math.max(...arr); 
  for (let index = 0; index < arr.length; index += 1) {
    if (arr[index] === maximo) {
      resultado += 1
    }
  }
  return resultado;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distCat1 = Math.abs(mouse - cat1);
  let distCat2 = Math.abs(mouse - cat2);
  let resultado;
  if (distCat1 === distCat2) {
    resultado = 'os gatos trombam e o rato foge';
  } else if (distCat1 < distCat2) {
    resultado = 'cat1';
  } else {
    resultado = 'cat2';
  }
  return resultado;
};

// Desafio 8
function fizzBuzz(numeros) {
  // seu código aqui
  let string = [];
  for (let num of numeros); {
    if (num % 3 === 0 && num % 5 === 0) {
      string.push('fizzBuzz');
    } else if (num % 3 === 0) {
      string.push('fizz');
    } else if (num % 5 === 0) {
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