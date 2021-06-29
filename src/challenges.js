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
  let valor = contador[0];
  let vezes = 0;
  for (let index = 0; index < contador.length; index += 1) {
    if (contador[index] > valor) {
      valor = contador[index];
    }
  }
  for (let i = 0; i < contador.length; i += 1) {
    if (valor === contador[i]) {
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
  for (let i = 0; i < arrayFizzBuzz.length; i += 1) {
    if (((arrayFizzBuzz[i] % 3) === 0) && ((arrayFizzBuzz[i] % 5) === 0)) {
      arrayFizzBuzz[i] = 'fizzBuzz';
    } else if ((arrayFizzBuzz[i] % 3) === 0) {
      arrayFizzBuzz[i] = 'fizz';
    } else if ((arrayFizzBuzz[i] % 5) === 0) {
      arrayFizzBuzz[i] = 'buzz';
    } else {
      arrayFizzBuzz[i] = 'bug!';
    }
  }
  return arrayFizzBuzz;
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
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
