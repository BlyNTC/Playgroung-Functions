// Desafio 1
function compareTrue(a, b) {
  let compare;
  if (a === true && b === true) {
    compare = true;
  } else {
    compare = false;
  }
  return compare;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  let array = string.split(' ');
  return array;
}

// Desafio 4
function concatName(array) {
  let concatenacao = array[array.length - 1] + ', ' + array[0];
  return concatenacao;
}

// Desafio 5
function footballPoints(wins, ties) {
  if (wins > 0 || ties > 0) {
    let totalPoints = (wins * 3) + ties;
    return totalPoints;
  } else {
    return 0;
  }
}

// Desafio 6
function highestCount(array2) {
  let maiorNumero = Number.MIN_SAFE_INTEGER;
  let soma = 0;

  for (let index = 0; index < array2.length; index += 1) {
    if (array2[index] > maiorNumero) {
      maiorNumero = array2[index];
    }
  }
  for (let index = 0; index < array2.length; index += 1) {
    if (array2[index] === maiorNumero) {
      soma += 1;
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

  for (let index = 0; index < arrayNumeros.length; index += 1) {
    if (arrayNumeros[index] % 3 === 0 && arrayNumeros[index] % 5 === 0) {
      fizzBuzzBug.push('fizzBuzz');
    } else if (arrayNumeros[index] % 3 === 0) {
      fizzBuzzBug.push('fizz');
    } else if (arrayNumeros[index] % 5 === 0) {
      fizzBuzzBug.push('buzz');
    } else {
      fizzBuzzBug.push('bug!');
    }
  }
  return fizzBuzzBug;
}

// Desafio 9
function encode(stringEncode) {
  let code = stringEncode;

  for (let index = 0; index < stringEncode.length; index += 1) {
    if (stringEncode.charAt(index) === 'a' || stringEncode.charAt(index) === 'e' || stringEncode.charAt(index) === 'i' || stringEncode.charAt(index) === 'o' || stringEncode.charAt(index) === 'u') {
      code = code.replace('a', 1);
      code = code.replace('e', 2);
      code = code.replace('i', 3);
      code = code.replace('o', 4);
      code = code.replace('u', 5);
    }
  }
  return code;
}
function decode(stringDecode) {
  let uncode = stringDecode;

  for (let index = 0; index < stringDecode.length; index += 1) {
    if (stringDecode.charAt(index) === '1' || stringDecode.charAt(index) === '2' || stringDecode.charAt(index) === '3' || stringDecode.charAt(index) === '4' || stringDecode.charAt(index) === '5') {
      uncode = uncode.replace(1, 'a');
      uncode = uncode.replace(2, 'e');
      uncode = uncode.replace(3, 'i');
      uncode = uncode.replace(4, 'o');
      uncode = uncode.replace(5, 'u');
    }
  }
  return uncode;
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
