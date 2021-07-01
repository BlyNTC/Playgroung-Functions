// Desafio 10
function techList(lista, name) {
  // seu código aqui
  lista.sort();
  let array = [];

  if (lista.length === 0) {
    return 'Vazio!';
  }
  for (let index = 0; index < lista.length; index += 1) {
    let object = { tech: lista[index], name: name };
    array.push(object);
  }
  return array;
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
