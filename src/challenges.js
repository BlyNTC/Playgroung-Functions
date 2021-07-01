// Desafio 1
function compareTrue(n1, n2) {
  let result;

  if (n1 === true && n2 === true) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

// Desafio 2
function calcArea(base, height) {
  let result = (base * height) / 2;

  return result;
}

// Desafio 3
function splitSentence(string) {
  let result = string.split(' ');

  return result;
}

// Desafio 4
function concatName(array) {
  let novoArray = [];
  let string;

  novoArray.unshift(array[array.length - 1]);
  novoArray.push(array[0]);

  string = novoArray.join(', ');

  return string;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontosVitoria = wins * 3;
  let pontosEmpate = ties * 1;

  let totalPontos = pontosVitoria + pontosEmpate;

  return totalPontos;
}

// Desafio 6
function highestCount(array) {
  let maiorNumero = Math.max(...array);
  let ocorrencias = 0;

  for (let i = 0; i < array.length; i += 1) {
    if (maiorNumero === array[i]) {
      ocorrencias += 1;
    }
  }
  return ocorrencias;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaGato1 = Math.abs(cat1 - mouse);
  let distanciaGato2 = Math.abs(cat2 - mouse);
  let string;

  if (distanciaGato1 < distanciaGato2) {
    string = 'cat1';
  } else if (distanciaGato2 < distanciaGato1) {
    string = 'cat2';
  } else {
    string = 'os gatos trombam e o rato foge';
  }
  return string;
}

// Desafio 8
function fizzBuzz(array) {
  let arrayString = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 3 === 0 && array[i] % 5 === 0) {
      arrayString.push('fizzBuzz');
    } else if (array[i] % 3 === 0 && array[i] % 5 !== 0) {
      arrayString.push('fizz');
    } else if (array[i] % 5 === 0 && array[i] % 3 !== 0) {
      arrayString.push('buzz');
    } else {
      arrayString.push('bug!');
    }
  }
  return arrayString;
}

// Desafio 9
function encode(string) {
  let stringArray = string.split('');
  for (let i = 0; i < stringArray.length; i += 1) {
    switch (stringArray[i]) {
    case 'a':
      stringArray[i] = 1;
      break;
    case 'e':
      stringArray[i] = 2;
      break;
    case 'i':
      stringArray[i] = 3;
      break;
    case 'o':
      stringArray[i] = 4;
      break;
    case 'u':
      stringArray[i] = 5;
      break;
    }
  }
  return stringArray.join('');
}
function decode(string) {
  let stringArray = string.split('');
  for (let i = 0; i < stringArray.length; i += 1) {
    switch (stringArray[i]) {
    case '1':
      stringArray[i] = 'a';
      break;
    case '2':
      stringArray[i] = 'e';
      break;
    case '3':
      stringArray[i] = 'i';
      break;
    case '4':
      stringArray[i] = 'o';
      break;
    case '5':
      stringArray[i] = 'u';
      break;
    }
  }
  return stringArray.join('');
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
