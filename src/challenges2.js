// Desafio 10
function techList(lista, name) {
  let result = [];
  lista.sort();
  for (let index = 0; index < lista.length; index += 1) {
    let objeto = {
      tech: '',
      name,
    };
    objeto.tech = lista[index];
    result.push(objeto);
  }
  if (result.length > 0) {
    return result;
  }
  return 'Vazio!';
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
