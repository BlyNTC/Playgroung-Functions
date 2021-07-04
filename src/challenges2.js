// Desafio 10
function techList(array, nome) {
  let arrayObjects = [];
  if (array.length === 0) {
    return 'Vazio!';
  }
  array.sort();
  for (let value of array) {
    arrayObjects.push({ tech: value, name: nome });
  }
  return arrayObjects;
}

function testaTamanhoArray(array, n) {
  if (array.length !== n) {
    return true;
  }
  return false;
}

function testaRangeArray(array) {
  for (let value of array) {
    if (value < 0 || value > 9) {
      return true;
    }
  }
  return false;
}

function testaNumerosArray(array) {
  let count = 0;
  let slicedArray = array.slice();
  for (let value of array) {
    while (slicedArray.indexOf(value) >= 0) {
      count += 1;
      slicedArray.splice(slicedArray.indexOf(value), 1);
    }
    if (count >= 3) {
      return true;
    }
    count = 0;
  }
  return false;
}

function organizaNumero(array) {
  array.splice(0, 0, '(');
  array.splice(3, 0, ')');
  array.splice(4, 0, ' ');
  array.splice(10, 0, '-');
  return array.toString().replace(/,/g, '');
}

// Desafio 11
function generatePhoneNumber(array) {
  if (testaTamanhoArray(array, 11)) {
    return 'Array com tamanho incorreto.';
  }
  if (testaRangeArray(array) || testaNumerosArray(array)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return organizaNumero(array);
}

// Desafio 12
function triangleCheck(a, b, c) {
  let sumAB = a + b;
  let sumAC = a + c;
  let sumBC = b + c;
  if (a >= sumBC || b >= sumAC || c >= sumAB) {
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
