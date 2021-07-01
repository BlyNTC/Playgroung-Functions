// Desafio 1
function compareTrue(bool1, bool2) {
  if (bool1 === true && bool2 === true) {
    return true;
  }
  return false;
}
// Desafio 2
function calcArea(base, heigth) {
  return (base * heigth) / 2;
}
// Desafio 3
function splitSentence(str) {
  let split = [];
  let aux = '';
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === ' ') {
      split.push(aux);
      aux = '';
    } else if (i === str.length - 1) {
      aux += str[i];
      split.push(aux);
      aux = '';
    } else {
      aux += str[i];
    }
  }
  return split;
}
// Desafio 4
function concatName(names) {
  let concat = names[names.length - 1] + ', ' + names[0];
  return concat;
}
// Desafio 5
function footballPoints(wins, ties) {
  let points = 3 * wins + ties;
  return points;
}
// Desafio 6
function highestCount(numbers) {
  let count = 0;
  let maior = numbers[0];

  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > maior) {
      maior = numbers[i];
      count = 0;
    }
    if (numbers[i] === maior) {
      count += 1;
    }
  }
  return count;
}
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = Math.abs(mouse - cat1);
  let distCat2 = Math.abs(mouse - cat2);

  if (distCat1 === distCat2) {
    return 'os gatos trombam e o rato foge';
  } 
  if (distCat1 > distCat2) {
    return 'cat2';
  }
  return 'cat1';
}
// Desafio 8
function fizzBuzz(numeros) {
  let words = [];
  for (let i = 0; i < numeros.length; i += 1) {
    if (numeros[i] % 3 === 0 && numeros[i] % 5 === 0) {
      words[i] = 'fizzBuzz';
    } else if (numeros[i] % 3 === 0) {
      words[i] = 'fizz';
    } else if (numeros[i] % 5 === 0) {
      words[i] = 'buzz';
    } else {
      words[i] = 'bug!';
    }
  }
  return words;
}
// Desafio 9
function encode(str) {
  let arrayEncode = Array.from(str);
  let change = ['a', 'e', 'i', 'o', 'u'];
  for (let i = 0; i < str.length; i += 1) {
    for (let j = 0; j < change.length; j += 1) {
      if (arrayEncode[i] === change[j]) {
        arrayEncode[i] = j + 1;
      }
    }
  }
  let strEncode = arrayEncode.join('');
  return strEncode;
}
function decode(str) {
  let arrayDecode = Array.from(str);
  let change = ['a', 'e', 'i', 'o', 'u'];
  for (let i = 0; i < str.length; i += 1) {
    for (let j = 0; j < change.length; j += 1) {
      if (Number(arrayDecode[i]) === j + 1) {
        arrayDecode[i] = change[j];
      }
    }
  }
  let strDecode = arrayDecode.join('');
  return strDecode;
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
