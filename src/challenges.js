// Desafio 1 - Crie uma função usando o operador &&
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true){
    return true
  } else {
    return false
  }
}

// Desafio 2 - Crie uma função que calcule a área de um triângulo
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3 - Crie uma função que divida a frase
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4 - Crie uma função que use concatenação de strings
function concatName(names) {
  return names[names.length - 1] + ', ' + names[0];
}

// Desafio 5 - Crie uma função que calcule a quantidade de pontos no futebol
function footballPoints(wins, ties) {
  return wins * 3 + ties ;
}

// Desafio 6 - Crie uma função que calcule a repetição do maior número
function highestCount(numbers) {

  let numMaior = 0;
  let indexMaior = 0;
  let contador = 0;

  for (let index in numbers) {

    if (numbers[indexMaior] < numbers[index]) {

      indexMaior = index;
    }

    numMaior = numbers[indexMaior]
  }

  for (let num of numbers) {

    if (numMaior === num) {

      contador += 1;
    }
  }
  return contador;
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));
console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));
console.log(highestCount([0, 0, 0]));

// Desafio 7 - Crie uma função de Caça ao Rato
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) === Math.abs(cat2 - mouse)) {
    return 'os gatos trombam e o rato foge';
  }
  return mouse + cat1 > mouse + cat2 ? 'cat2' : 'cat1';
}

// Desafio 8 - Crie uma função FizzBuzz
function fizzBuzz(numbers) {
  let answer = [];
  for (const iterator of numbers) {
    if (iterator % 3 === 0 && iterator % 5 === 0) {
      answer.push('fizzBuzz');
    } else if (iterator % 3 === 0) {
      answer.push('fizz');
    } else if (iterator % 5 === 0) {
      answer.push('buzz');
    } else {
      answer.push('bug!');
    }
  }
  return answer;
}

// Desafio 9 - Crie uma função que Codifique e Decodifique
function encode(phrase) {
  let newPhrase = '';
  for (let key in phrase) {
    switch (phrase[key]) {
    case 'a':
      newPhrase += 1;
      break;
    case 'e':
      newPhrase += 2;
      break;
    case 'i':
      newPhrase += 3;
      break;
    case 'o':
      newPhrase += 4;
      break;
    case 'u':
      newPhrase += 5
      break;
    default:
      newPhrase += phrase[key]
    }
  }
  return newPhrase;
}
function decode(phrase) {
  let newPhrase = '';
  for (let key in phrase) {
    switch (phrase[key]) {
    case '1':
      newPhrase += 'a';
      break;
    case '2':
      newPhrase += 'e';
      break;
    case '3':
      newPhrase += 'i';
      break;
    case '4':
      newPhrase += 'o';
      break;
    case '5':
      newPhrase += 'u';
      break;
    default:
      newPhrase += phrase[key]
    }
  }
  return newPhrase;
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
