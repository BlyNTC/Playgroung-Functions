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
  } else {
    for (let index1 in array) {
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
  if (
    lineA >= lineB + lineC ||
    lineB >= lineA + lineC ||
    lineC >= lineA + lineB
  ) {
    return false;
  } else if (
    lineA <= Math.abs(lineB - lineC) ||
    lineB <= Math.abs(lineA - lineC) ||
    lineC <= Math.abs(lineB - lineA)
  ) {
    return false;
  }
  return true;
}

// Desafio 13
function hydrate(string) {
  let count = 0;
  for (let char of string) {
    if (!isNaN(char) && char !== ' ') {
      count += parseInt(char, 10);
    }
  }
  if (count > 1) {
    return count + ' copos de água';
  }
  return count + ' copo de água';
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
