// Funções auxiliares do Desafio 11
function overThreeRepeats(inputArray) {
  const counts = {};
  let checker = false;
  inputArray.forEach(function (x) {
    counts[x] = (counts[x] || 0) + 1;
    if (counts[x] > 2) { checker = true; }
  });
  return checker;
}

function formatPhoneNumber(inputArray) {
  inputArray.splice(0, 0, '(');
  inputArray.splice(3, 0, ')');
  inputArray.splice(9, 0, '-');
  inputArray.splice(4, 0, ' ');
  return inputArray;
}
// Fim das funções auxiliares

// Desafio 10
function techList(arrayTech, nomeString) {
  if (arrayTech.length === 0) {
    return 'Vazio!';
  }
  arrayTech = arrayTech.sort();
  let newArray = [];
  for (let index in arrayTech) {
    if (Object.prototype.hasOwnProperty.call(arrayTech, index)) {
      newArray.push({
        tech: arrayTech[index],
        name: nomeString,
      });
    }
  }
  return newArray;
}

// Desafio 11
function generatePhoneNumber(inputArray) {
  const error = 'não é possível gerar um número de telefone com esses valores';
  let sorted = inputArray.slice().sort((a, b) => a - b);
  if (inputArray.length !== 11) { return 'Array com tamanho incorreto.'; }
  if (sorted[0] < 0 || sorted[sorted.length - 1] > 9) { return error; }
  if (overThreeRepeats(inputArray) === true) { return error; }
  return formatPhoneNumber(inputArray).join('');
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let lado = [];
  lado[0] = lineA;
  lado[1] = lineB;
  lado[2] = lineC;
  lado.sort((a, b) => a - b);
  if ((lado[2] < lado[0] + lado[1]) || (lado[1] > lado[2] - lado[0])) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(string) {
  let reg = /\d/g;
  let qtdCopos = string.match(reg).reduce((accumulator, currentValue) =>
    parseInt(accumulator, 10) + parseInt(currentValue, 10));
  if (qtdCopos === '1') {
    return '1 copo de água';
  }
  return qtdCopos.toString().concat(' copos de água');
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};

console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));
