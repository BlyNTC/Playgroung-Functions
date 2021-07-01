// Desafio 10
function techList(array, name) {
  if (array.length === 0) {
    return 'Vazio!';
  }
  array.sort();
  let nome = name;
  let result = [];
  for (let i of array) {
    result = result.concat({
      tech: i,
      name: nome,
    });
  }
  return result;
}
// function support para proximo exercicio
function condition(i, count, arr) {
  for (let u of arr) {
    if (u === i) {
      count += 1;
    }
  }
  if (count >= 3) {
    return true;
  }
}

function verify(arr) {
  let count;
  for (let i of arr) {
    count = 0;
    if (condition(i, count, arr) || i > 9 || i < 0) {
      return true;
    }
  }
  return false;
}
// Desafio 11
function generatePhoneNumber(arr) {
  if (arr.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  if (verify(arr)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  let number = `(${arr[0]}${arr[1]}) `;
  for (let i = 2; i < arr.length; i += 1) {
    if (i === 7) {
      number += '-';
    }
    number += arr[i];
  }
  return number;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let somaBC = lineB + lineC;
  let somaAB = lineA + lineB;
  let somaAC = lineA + lineC;
  if (lineA > somaBC || lineB > somaAC || lineC > somaAB) {
    return false;
  }
  return true;
}

// Desafio 13
function hydrate(string) {
  let arr = string.split('');
  let count = 0;
  for (let i of arr) {
    if (Number(i)) {
      count += Number(i);
    }
  }
  if (count === 1) {
    return '1 copo de água';
  }
  return `${count} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
