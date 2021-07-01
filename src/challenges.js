// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 && valor2) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let areaTriangulo = (base * height) / 2;
  return areaTriangulo;
}

// Desafio 3
function splitSentence(string) {
  let array = string.split(' ');
  return array;
}

// Desafio 4
function concatName(array) {
  let last = array.length - 1;
  let string = `${array[last]}, ${array[0]}`;
  return string;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = wins * 3 + ties;
  return points;
}

// Desafio 6
function highestNumber(array) {
  let highest = array[0];
  for (let i of array) {
    if (i > highest) {
      highest = i;
    }
  }
  return highest;
}
function highestCount(array) {
  let highest = highestNumber(array);
  let count = 0;
  for (let i of array) {
    if (i === highest) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = Math.abs(cat1 - mouse);
  let distCat2 = Math.abs(cat2 - mouse);
  if (distCat1 < distCat2) {
    return 'cat1';
  }
  if (distCat2 < distCat1) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function compareFizz(i, result) {
  if (i % 3 === 0 && i % 5 === 0) {
    result.push('fizzBuzz');
  } else if (i % 3 === 0) {
    result.push('fizz');
  } else if (i % 5 === 0) {
    result.push('buzz');
  } else {
    result.push('bug!');
  }
}
function fizzBuzz(array) {
  let result = [];
  for (let i of array) {
    compareFizz(i, result);
  }
  return result;
}

// Desafio 9
function compareEncode(i, vogais, array) {
  for (let j = 0; j < vogais.length; j += 1) {
    if (array[i] === vogais[j]) {
      array[i] = j + 1;
    }
  }
}
function encode(string) {
  let array = string.split('');
  let vogais = ['a', 'e', 'i', 'o', 'u'];
  for (let i = 0; i < array.length; i += 1) {
    compareEncode(i, vogais, array);
  }
  array = array.join('');
  return array;
}
function compareDecode(i, vogais, array) {
  for (let j = 0; j < vogais.length; j += 1) {
    if (Number(array[i]) === j + 1) {
      array[i] = vogais[j];
    }
  }
}
function decode(string) {
  let array = string.split('');
  let vogais = ['a', 'e', 'i', 'o', 'u'];
  for (let i = 0; i < array.length; i += 1) {
    compareDecode(i, vogais, array);
  }
  array = array.join('');
  return array;
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
