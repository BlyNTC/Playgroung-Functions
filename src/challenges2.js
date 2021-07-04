// Desafio 10
function techList(array, name) {
  if (array.length === 0) return 'Vazio!';
  array = array.sort();
  let result = [];
  for (let tech of array) {
    result.push({
      tech,
      name,
    });
  }
  return result;
}

// Desafio 11
function phoneNumberRepeater(array) {
  let cache = {};
  for (let num of array) {
    cache[num] = cache[num] ? cache[num] += 1 : 1;
    if (cache[num] >= 3) {
      return false;
    }
  }
  return true;
}

function phoneNumberVerifier(array) {
  for (let num of array) {
    if (num < 0 || num > 9) {
      return false;
    }
  }
  return true;
}

function generatePhoneNumber(array) {
  if (array.length !== 11) return 'Array com tamanho incorreto.';
  let verifier = phoneNumberVerifier(array);
  let repeater = phoneNumberRepeater(array);
  if (verifier === true && array.length === 11 && repeater === true) {
    return array.join('').replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  }
  return 'não é possível gerar um número de telefone com esses valores';
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let array = [lineA, lineB, lineC];
  array.sort((a, b) => a - b);
  return array[0] + array[1] > array[2];
}

// Desafio 13
function hydrate(string) {
  let result = 0;
  string = string.replace(/\D/g, ' ');
  for (let number of string) {
    if (number !== ' ') result += Number(number);
  }
  return result === 1 ? '1 copo de água' : `${result} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
