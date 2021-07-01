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
function generatePhoneNumber(array) {
  if (array.length === 11) {
    let cache = {};
    for (let num of array) {
      cache[num] = cache[num] ? cache[num] += 1 : 1;
      if (num < 0 || num > 9 || cache[num] >= 3) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
    let result = '(';
    for (let i = 0; i < array.length; i += 1) {
      if (i === 2) result += ') ';
      if (i === 7) result += '-';
      result += array[i];
    }
    return result;
  }
  return 'Array com tamanho incorreto.';
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
