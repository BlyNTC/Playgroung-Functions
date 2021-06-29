// Desafio 10
function techList(array, name) {
  if (array.length === 0) {
    return 'Vazio!';
  }
  array.sort();
  let result = [];
  for (let i of array) {
    result = result.concat({ tech: i, name: name });
  } 
  return result;
}

// Desafio 11
function generatePhoneNumber(arr) {
  if (arr.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let i of arr) {
    let count = 0;
    for (let u of arr) {
      if (u === i) {
        count += 1;
      }
      if (i > 9 || i < 0 || count >= 3) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
  }
  let number = '(' + arr[0] + arr[1] + ') ';
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
  let somaBC = Math.abs(lineB - lineC);
  let somaAB = Math.abs(lineA - lineB);
  let somaAC = Math.abs(lineC - lineC);
  if (lineA < somaBC || lineB < somaAC || lineC < somaAB) {
    return false;
  }
  somaBC = lineB + lineC;
  somaAB = lineA + lineB;
  somaAC = lineC + lineC;
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
    return count + ' copo de água';
  }
  return count + ' copos de água';
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
