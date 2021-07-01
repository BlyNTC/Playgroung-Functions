// Desafio 1
function compareTrue(p1, p2) {
  // seu código aqui
  if (p1 === true && p2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3 //https://www.w3schools.com/jsref/jsref_split.asp
function splitSentence(string) {
  // seu código aqui
  return string.split(' ');
}

// Desafio 4
//  https://www.w3schools.com/jsref/jsref_join.asp
function concatName(array) {
  // seu código aqui
  let newArray = [];
  let arrayLength = array.length - 1;
  for (let i = array.length - 1; i >= 0; i -= 1) {
    if (i === 0 || i === arrayLength) {
      newArray.push(array[i]);
    }
  }
  return newArray.join(', ');
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(array) {
  // seu código aqui
  let maior = array[0];
  let n = 0;

  for (let i of array) {
    if (i > maior) {
      maior = i;
    }
  }
  for (let i of array) {
    if (maior === i) {
      n += 1;
    }
  }
  return n;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  if (cat1 - mouse > cat2 - mouse) {
    return 'cat2';
  }
  if (mouse - cat1 < cat2 - mouse) {
    return 'cat1';
  }
  if (mouse - cat1 === cat2 - mouse) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  let newArray = [];
  for (let i of array) {
    if (i % 3 === 0 && i % 5 === 0) {
      newArray.push('fizzBuzz');
    } else if (i % 3 === 0) {
      newArray.push('fizz');
    } else if (i % 5 === 0) {
      newArray.push('buzz');
    } else {
      newArray.push('bug!');
    }
  }
  return newArray;
}

// Desafio 9
function encode(string1) {
  // seu código aqui
  let array = [];
  for (let i = 0; i < string1.length; i += 1) {
    if (string1[i] === 'a') {
      array.push('1');
    } else if (string1[i] === 'e') {
      array.push('2');
    } else if (string1[i] === 'i') {
      array.push('3');
    } else if (string1[i] === 'o') {
      array.push('4');
    } else if (string1[i] === 'u') {
      array.push('5');
    } else {
      array.push(string1[i]);
    }
  }
  let palavra;
  palavra = array.join('');
  return palavra;
}

function decode(string2) {
  // seu código aqui
  let array = [];
  for (let i = 0; i < string2.length; i += 1) {
    if (string2[i] === '1') {
      array.push('a');
    } else if (string2[i] === '2') {
      array.push('e');
    } else if (string2[i] === '3') {
      array.push('i');
    } else if (string2[i] === '4') {
      array.push('o');
    } else if (string2[i] === '5') {
      array.push('u');
    } else {
      array.push(string2[i]);
    }
  }
  let palavra;
  palavra = array.join('');
  return palavra;
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
