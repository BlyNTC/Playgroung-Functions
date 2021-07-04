// Desafio 10
function techList(array, name) {
  let arrayObjects = [];
  if (array.length === 0) {
    return 'Vazio!';
  }
  array.sort();
  for (let value of array) {
    arrayObjects.push({ tech: value, name: name });
  }
  return arrayObjects;
}

// Desafio 11
function generatePhoneNumber(array) {
  let result = '';
  let count = 0;
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index1 = 0; index1 < array.length; index1 += 1) {
    if (array[index1] < 0 || array[index1] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    for (let index2 in array) {
      if (array[index1] === array[index2]) {
        count += 1;
      }
    }
    if (count >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    count = 0;
  }
  for (let index = 0; index < array.length; index += 1) {
    if (index === 0) {
      result += '(';
      result += array[index];
    } else if (index === 1) {
      result += array[index];
      result += ') ';
    } else if (index === 6) {
      result += array[index];
      result += '-';
    } else {
      result += array[index];
    }
  }
  return result;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let sumAB = lineA + lineB;
  let sumAC = lineA + lineC;
  let sumBC = lineB + lineC;
  let distAB = Math.abs(lineA - lineB);
  let distAC = Math.abs(lineA - lineC);
  let distBC = Math.abs(lineB - lineC);

  if (lineA >= sumBC || lineB >= sumAC || lineC >= sumAB) {
    return false;
  }
  if (lineA <= distBC || lineB <= distAC || lineC <= distAB) {
    return false;
  }
  return true;
}

// Desafio 13
function hydrate(string) {
  let count = 0;
  let result = '';
  for (let char of string) {
    if (!Number.isNaN(parseInt(char, 10))) {
      count += parseInt(char, 10);
    }
  }
  if (count > 1) {
    return result.concat(count, ' copos de água');
  }
  return result.concat(count, ' copo de água');
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
