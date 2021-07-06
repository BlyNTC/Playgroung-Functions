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
  let ultimo = arrayDeStrings[arrayDeStrings.length - 1];
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
      resultado += 1;
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
}

// Desafio 8
function fizzBuzz(numeros) {
  // seu código aqui
  let string = [];
  for (index = 0; index < numeros.length; index += 1) {
    if (numeros[index] % 3 === 0 && numeros[index] % 5 === 0) {
      string.push('fizzBuzz')
    } else if (numeros[index] % 3 === 0) {
      string.push('fizz')
    } else if (numeros[index] % 5 === 0) {
      string.push('buzz')
    } else {
      string.push('bug!')
    }
  }
  return string;
}

// Desafio 9
function encode(string) {
  // seu código aqui
  let stringModificada = '';
  for (let key in string) {
    if (string[key] === 'a') {
      stringModificada += '1';
    } else if (string[key] === 'e') {
      stringModificada += '2';
    } else if (string[key] === 'i') {
      stringModificada += '3';
    } else if (string[key] === 'o') {
      stringModificada += '4';
    } else if (string[key] === 'u') {
      stringModificada += '5';
    } else {
      stringModificada += string[key];
    }
  }
  return stringModificada;
}

function decode(string) {
  // seu código aqui
  let stringModificada = '';
  for (let key in string) {
    if (string[key] === '1') {
      stringModificada += 'a';
    } else if (string[key] === '2') {
      stringModificada += 'e';
    } else if (string[key] === '3') {
      stringModificada += 'i';
    } else if (string[key] === '4') {
      stringModificada += 'o';
    } else if (string[key] === '5') {
      stringModificada += 'u';
    } else {
      stringModificada += string[key];
    }
  }
  return stringModificada;
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