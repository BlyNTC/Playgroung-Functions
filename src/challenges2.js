// Desafio 10
function techList(itens, name) {
  let result = [];

  itens.sort();
  if (itens.length === 0) {
    return 'Vazio!';
  } else {
    for (let index = 0; index < itens.length; index += 1) {
      let objeto = { tech: itens[index], name: name };
      result.push(objeto);
    }
  }
  return result;
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
