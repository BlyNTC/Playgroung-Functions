// Desafio 1
function compareTrue(comp1, comp2) {
  if ((comp1 === true) && (comp2 === true)) {
    return true;
  } return false;
}

// Desafio 2
function calcArea(base, height) {
  let result = (base * height) / 2;
  return result;
}

// Desafio 3
function splitSentence(string) {
  let divisor = string.split(' ');
  return divisor;
}

// Desafio 4
function concatName(string) {
  let virgula = ', ';
  let primeira = string[0];
  let ultima = string[(string.length - 1)];
  let result = ultima + virgula + primeira;
  return result;
}

// Desafio 5
function footballPoints(wins, ties) {
  wins *= 3;
  ties *= 1;
  let result = (wins + ties);
  return result;
}

// Desafio 6
function highestCount(n) {
  let vezes = 0;
  let maior = n[0];
  for (let i of n) {
    if (i > maior) {
      maior = i;
    }
  }

  for (let i of n) {
    if (i === maior) {
      vezes += 1;
    }
  }
  return vezes;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let positionCatOne = Math.abs(mouse - cat1);
  let positionCatTwo = Math.abs(mouse - cat2);

  if (positionCatOne < positionCatTwo) {
    return 'cat1';
  } if (positionCatOne > positionCatTwo) {
    return 'cat2';
  } return 'os gatos trombam e o rato foge';
}
// Desafio 8
function fizzBuzz(n) {
  let result = [];
  for (const index of n) {
    if (index % 3 === 0 && index % 5 === 0) {
      result.push('fizzBuzz');
    } else if (index % 3 === 0) {
      result.push('fizz');
    } else if (index % 5 === 0) {
      result.push('buzz');
    } else {
      result.push('bug!');
    }
  }
  return result;
}

// Desafio 9
function encode(str) {
  let result = '';
  result = str.replace(/a/g, '1');
  result = result.replace(/e/g, '2');
  result = result.replace(/i/g, '3');
  result = result.replace(/o/g, '4');
  result = result.replace(/u/g, '5');
  return result;
}

function decode(str) {
  let result = '';
  result = str.replace(/1/g, 'a');
  result = result.replace(/2/g, 'e');
  result = result.replace(/3/g, 'i');
  result = result.replace(/4/g, 'o');
  result = result.replace(/5/g, 'u');
  return result;
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
