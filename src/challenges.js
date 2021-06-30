// Desafio 1
function compareTrue(a, b) {
  // seu código aqui
  if (a == 1 && b == 1) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let calc = (base * height) / 2;
  return calc;
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let resultado = string.split(' ');
  return resultado;
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let total = wins * 3 + ties;
  return total;
}

// Desafio 6
function highestCount(array) {
  // seu código aqui
  let maior = Math.max.apply(null, array);
  let cont = 0;
  for (let i of array) {
    if (i === maior) {
      cont += 1;
    }
  }

  return cont;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) {
    return 'cat2';
  } if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(array) {
  let vetor = [];
  for (let i of array) {
    if (i % 3 === 0 && i % 5 === 0) {
      vetor.push('fizzBuzz');
    } else {
      if (i % 3 === 0) {
        vetor.push('fizz');
      } else if (i % 5 === 0) {
        vetor.push('buzz');
      } else {
        vetor.push('bug!');
      }
    }
  }
  return vetor;
}

// Desafio 9
function encode(string) {
  // seu código aqui
  let num = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  for (let i in string) {
    for (let j in num) {
      if (string[i] == j) {
        string = string.replace(string[i], num[j]);
      }
    }
  }
  return string;
}
function decode(string) {

  let num = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };

  for (let i in string) {
    for (let j in num) {
      if (string[i] == num[j]) {
        string = string.replace(string[i], j);
      }
    }
  }

  return string;

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
