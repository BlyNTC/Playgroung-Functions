// Desafio 10
function techList(techName, name) {
  // seu código aqui
  let result = [];
  if (techName.lenght === 0) {
    return 'Vazio!';
  }
  for (let tech of techName.sort()) {
    result.push({ tech, name });
  }
  return result;
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
  let sameAsNumber = number;
  let filteredNumbers = number.filter(sameAsNumber);

  if (filteredNumbers.length === 11 && filteredNumbers.length) {
    let telNumber =
      '(' +
      number.slice(0, -9) +
      ')' +
      number.slice(2, -4) +
      '-' +
      number.slice(7);
    let result = telNumber.replaceAll(',', '');
    return result;
  } else if (filteredNumbers.length < 11) {
    return 'Array com tamanho errado';
  } else if (filteredNumbers < 0 && fileredNumbers > 9) {
  } else {
    return 'lascou';
  }

  // Referências:

  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/slice
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
  // https://stackoverflow.com/questions/7806709/remove-trailing-comma-from-comma-separated-string/23382913
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
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
