// Desafio 1
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = 0;
  area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(palavras) {
  let array = [];
  array = palavras.split(' ');
  return array;
}

// Desafio 4
function concatName(nomes) {
  let arrayConcat = [];
  arrayConcat = `${nomes[nomes.length - 1]}, ${nomes[0]}`;
  return arrayConcat;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontosCampeonato = 0;
  wins *= 3;
  ties *= 1;
  pontosCampeonato = wins + ties;
  return pontosCampeonato;
}

// Desafio 6
function highestCount(contador) {
  let vezes = 0;
  contador.sort((a, b) => a - b);
  for (let number of contador) {
    if (number === contador[contador.length - 1]) {
      vezes += 1;
    }
  }
  return vezes;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  cat1 = mouse - cat1;
  cat2 = mouse - cat2;
  if (cat1 < 0) {
    cat1 = -cat1;
  }
  if (cat2 < 0) {
    cat2 = -cat2;
  }
  if (cat1 < cat2) {
    return 'cat1';
  }
  if (cat2 < cat1) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(arrayFizzBuzz) {
  return arrayFizzBuzz.map((element) => {
    if (element % 15 === 0) {
      return 'fizzBuzz';
    }
    if (element % 3 === 0) {
      return 'fizz';
    }
    if (element % 5 === 0) {
      return 'buzz';
    }
    return 'bug!';
  });
}

// Desafio 9
function encode(param1) {
  let codigo = '';
  let letra = ['a', 'e', 'i', 'o', 'u'];
  for (let i = 0; i < param1.length; i += 1) {
    if (letra.includes(param1[i])) {
      codigo += letra.indexOf(param1[i]) + 1;
    } else {
      codigo += param1[i];
    }
  }
  return codigo;
}
function decode(param2) {
  let codigo = '';
  let numero = ['1', '2', '3', '4', '5'];
  let letra = ['a', 'e', 'i', 'o', 'u'];

  for (let i = 0; i < param2.length; i += 1) {
    if (numero.includes(param2[i])) {
      codigo += letra[numero.indexOf(param2[i])];
    } else {
      codigo += param2[i];
    }
  }
  return codigo;
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
