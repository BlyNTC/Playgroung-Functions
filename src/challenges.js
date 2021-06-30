// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  let array = string.split(' ')
  return array;
}

// Desafio 4
function concatName(array) {
  let concatenacao = array[array.length - 1] + ', ' + array[0];
  return concatenacao;
}

// Desafio 5
function footballPoints(wins, ties) {
  if (wins > 0 || ties > 0) {let totalPoints = (wins * 3) + ties;
  return  totalPoints;
  } else {
    return 0;
  }
}

// Desafio 6
function highestCount(array2) {
  let maiorNumero = Number.MIN_SAFE_INTEGER;
  let soma = 0;
  
  for (let index = 0; index < array2.length; index +=1) {
    if (array2[index] > maiorNumero) {
      maiorNumero = array2[index];
    }
  }
  for (let index = 0; index < array2.length; index +=1) {
    if (array2[index] === maiorNumero) {
      soma +=1;
    }
  }
  return soma;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
    return 'cat1';
  } else if (Math.abs(mouse - cat1) > Math.abs(mouse - cat2)) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(arrayNumeros) {
  let fizzBuzzBug = [];

  for (let index = 0; index < arrayNumeros.length; index +=1) {
    if (arrayNumeros[index] % 3 === 0 && arrayNumeros[index] % 5 === 0) {
      fizzBuzzBug.push('fizzBuzz')
    } else if (arrayNumeros[index] % 3 === 0) {
      fizzBuzzBug.push('fizz')
    } else if (arrayNumeros[index] % 5 === 0 ) {
      fizzBuzzBug.push('buzz')
    }
      else {
        fizzBuzzBug.push('bug!')
      }
  }
  return fizzBuzzBug;
}

// Desafio 9
function encode(stringEncode) {
  
}
function decode(stringDecode) {
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
