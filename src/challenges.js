// Desafio 1 - Gustavo Dias - Turma 14 - Tribo A
function compareTrue(firstValue, secondValue) {
  return firstValue && secondValue;
}

// console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// console.log(calcArea(10, 50));

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// console.log(splitSentence("go  Trybe"));

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}

// console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}

// console.log(footballPoints(14, 8));

// Desafio 6
function highestCount(array) {
  // Linha inspirada por: https://stackoverflow.com/questions/32647149/why-is-math-max-returning-nan-on-an-array-of-integers
  // Os três pontos passam o array como argumentos independentes da função max
  let maxNumber = Math.max(...array);

  // Linha inspirada por: https://stackoverflow.com/questions/6120931/how-to-count-certain-elements-in-array
  // A hof filter percorre o array e cria um novo array para cada número que satisfaz a condição da arrow function, aqui retorno o tamanho desse array gerado.
  return array.filter((number) => number === maxNumber).length;
}

// console.log(highestCount([9, 9, 9, 4, 9, 3, 9, 3, 3, 3, 3, 5, 4, 9]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distancia1 = Math.abs(mouse - cat1);
  let distancia2 = Math.abs(mouse - cat2);

  if (distancia1 > distancia2) {
    return 'cat2';
  }
  if (distancia1 === distancia2) {
    return 'os gatos trombam e o rato foge';
  }
  return 'cat1';
}

// console.log(catAndMouse(0, 3, 2));

// Desafio 8
function checkForFizz(number) {
  if (number % 5 !== 0) {
    return 'fizz';
  }
  return 'fizzBuzz';
}

function checkForBuzz(number) {
  if (number % 3 !== 0) {
    return 'buzz';
  }
}

function fizzBuzzBug(number) {
  if (number % 3 === 0) {
    return checkForFizz(number);
  }
  if (number % 5 === 0) {
    return checkForBuzz(number);
  }
  return 'bug!';
}

function fizzBuzz(array) {
  let newArray = array.map((value) => fizzBuzzBug(value));
  return newArray;
}

// console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
function encode(string) {
  let code = '';
  let vowels = ['a', 'e', 'i', 'o', 'u'];

  for (let i = 0; i < string.length; i += 1) {
    if (vowels.includes(string[i])) {
      code += (vowels.indexOf(string[i]) + 1);
    } else {
      code += string[i];
    }
  }

  return code;
}

// console.log(encode('hi there'));

function decode(code) {
  let string = '';
  let keys = ['1', '2', '3', '4', '5'];
  let vowels = ['a', 'e', 'i', 'o', 'u'];

  for (let i = 0; i < code.length; i += 1) {
    if (keys.includes(code[i])) {
      string += vowels[keys.indexOf(code[i])];
    } else {
      string += code[i];
    }
  }

  return string;
}

// console.log(decode('h2ll4'));

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
