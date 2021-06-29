// Desafio 10
function techList(array, name) {
  if (array.length===0) {
    return 'Vazio!'
  }
  array.sort();
  let result = [];
  for (let i of array) {
    result = result.concat({'tech': i, 'name': name});
  }
  return result;
}

// Desafio 11
function generatePhoneNumber(arr) {
  if (arr.length !== 11) {
    return "Array com tamanho incorreto.";
  }
  for (let i of arr) {
    let count = 0;
    for (let u of arr) {
      if (u === i) {
        count += 1;
      }
      if (i > 9 || i < 0 || count >= 3) {
        return "não é possível gerar um número de telefone com esses valores"
      }
    }
  }
  let number = "(" + arr[0] + arr[1] + ") ";
  for (let i = 2; i < arr.length; i += 1) {
    if (i===7) {
      number += '-';
    }
    number += arr[i];
  }
  return number;
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
