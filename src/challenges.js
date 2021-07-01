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
function switchEncode(i, array) {
  let support = array[i];
  if (support === 'a') {
    support = '1';
  } else if (support === 'e') {
    support = '2';
  } else if (support === 'i') {
    support = '3';
  } else if (support === 'o') {
    support = '4';
  } else if (support === 'u') {
    support = '5';
  }
  array[i] = support;
}

function encode(string) {
  let array = string.split('');
  for (let i = 0; i < array.length; i += 1) {
    switchEncode(i, array);
  }
  array = array.join('');
  return array;
}
function switchDecode(i, array) {
  let support = array[i];
  if (support === '1') {
    support = 'a';
  } else if (support === '2') {
    support = 'e';
  } else if (support === '3') {
    support = 'i';
  } else if (support === '4') {
    support = 'o';
  } else if (support === '5') {
    support = 'u';
  }
  array[i] = support;
}
function decode(string) {
  let array = string.split('');
  for (let i = 0; i < array.length; i += 1) {
    switchDecode(i, array);
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
