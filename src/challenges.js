// Desafio 1
function compareTrue(valor1, valor2) {
  // seu código aqui
  if (valor1 === true && valor2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(frase) {
  // seu código aqui
  return frase.split(' ');
  // Referência: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split
}

// Desafio 4
function concatName(nameConcat) {
  // seu código aqui
  let concatN = 0;
  return nameConcat = (nameConcat[nameConcat.length - 1] + ', ' + nameConcat[0]);
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(highestNumber) {
  // seu código aqui
  let result = 0;
  let highest;
  for (let number of highestNumber) {
    if (number === highest) {
      result++;
    } else if (!highest || number > highest) {
      highest = number;
      result = 1;
    }
  }
  return result;
}
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  if (Math.abs(mouse - cat1) === Math.abs(mouse - cat2)) {
    return 'os gatos trombam e o rato foge';
  } else if (Math.abs(mouse - cat2) < Math.abs(mouse - cat1)) {
    return 'cat2';
  } else if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
    return 'cat1';
  } else {
    return 'sem resultado';
  }
}
// Referência: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs

// Desafio 8
function check(buzzFizz) {
  // seu código aqui
  if (buzzFizz % 3 == 0 && buzzFizz % 5 == 0) {
    return 'fizzBuzz';
  }
  if (buzzFizz % 5 == 0) {
    return 'buzz';
  }
  if (buzzFizz % 3 == 0) {
    return 'fizz';
  }
  return 'bug!';
}

function fizzBuzz(fuzzBizz) {
  let result = [];
  for (let buzzFizz of fuzzBizz) {
    result.push(check(buzzFizz));
  }
  return result;
}
// Referência: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/push
// Referência: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
// Referência: https://stackoverflow.com/questions/56921356/is-it-good-practice-to-override-function-parameter-value

// Desafio 9
function encode(codificar) {
  // seu código aqui
  let codificacao = { a: '1', e: '2', i: '3', o: '4', u: '5' };
  let codificado = codificar.replace(
    /[aeiou]/g,
    (letras) => codificacao[letras]
  );
  return codificado;
}

function decode(decodificar) {
  // seu código aqui
  let decodificacao = { 1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u' };
  let decodificado = decodificar.replace(
    /[12345]/g,
    (letras) => decodificacao[letras]
  );
  return decodificado;
  // Referência: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/replace
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
