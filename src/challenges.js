// Desafio 1
function compareTrue(firstValue, secondValue) {
  return (firstValue && secondValue);
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
// Ref.:
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split
function splitSentence(frase) {
  return (frase.split(' '));
}

// Desafio 4
// Ref.:
// https://www.sitepoint.com/shorthand-javascript-techniques/
function concatName(lista) {
  let answer = (`${lista[lista.length - 1]}, ${lista[0]}`);
  return answer;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties);
}

// Desafio 6
// Ref.:
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Function/Apply
function highestCount(myArray) {
  let maxNumber = Math.max.apply(null, myArray);
  let maxNumberCount = 0;
  for (let index = 0; index < myArray.length; index += 1) {
    if (myArray[index] === maxNumber) {
      maxNumberCount += 1;
    }
  }
  return maxNumberCount;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let answer;
  if (Math.abs(cat1 - mouse) === Math.abs(cat2 - mouse)) {
    answer = 'os gatos trombam e o rato foge';
  } else if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) {
    answer = 'cat2';
  } else {
    answer = 'cat1';
  }
  return answer;
}

// Desafio 8
function fizzBuzz(numeros) {
  for (let index = 0; index < numeros.length; index += 1) {
    if (((numeros[index] % 3) === 0) && ((numeros[index] % 5) === 0)) {
      numeros[index] = 'fizzBuzz';
    } else if ((numeros[index] % 3) === 0) {
      numeros[index] = 'fizz';
    } else if ((numeros[index] % 5) === 0) {
      numeros[index] = 'buzz';
    } else {
      numeros[index] = 'bug!';
    }
  }
  return numeros;
}

// Desafio 9
// Ref.:
// Pesquisei no https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/replace
function encode(myWord) {
  myWord = myWord.replace(/a/g, '1');
  myWord = myWord.replace(/e/g, '2');
  myWord = myWord.replace(/i/g, '3');
  myWord = myWord.replace(/o/g, '4');
  myWord = myWord.replace(/u/g, '5');
  return myWord;
}

function decode(myWord) {
  myWord = myWord.replace(/1/g, 'a');
  myWord = myWord.replace(/2/g, 'e');
  myWord = myWord.replace(/3/g, 'i');
  myWord = myWord.replace(/4/g, 'o');
  myWord = myWord.replace(/5/g, 'u');
  return myWord;
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
