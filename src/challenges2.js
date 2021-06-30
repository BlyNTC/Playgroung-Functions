// Desafio 10
function techList(array, name) {
  //Fonte de pesquisa StackOverFlow e Slack
  let arrayTech = [];
  array.sort();

  if (array.length === 0) {
    return 'Vazio!'
  }

  for (let tech of array) {
    arrayTech.push({
      tech,
      name
    });
  }
  return arrayTech
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
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
