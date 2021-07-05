// Desafio 10
function techList(listagem,nome) {
  let lista;
  listagem.sort();
  if (listagem.length === 0) {
    lista = 'Vazio!';
  } else {
    lista = [];
    for (let index = 0; index < listagem.length; index += 1) {
      lista.push({
        tech: listagem[index],
        name: nome,
      });
    }
  }
  return lista;
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
