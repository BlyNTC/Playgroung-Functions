// Desafio 10
function techList(array, name) {
  let arrayObjects = [];
  if (array.length === 0) {
    return 'Vazio!';
  } else {
    array.sort();
    for (let value of array) {
      arrayObjects.push({'tech': value, 'name':name})
    }
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
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};


