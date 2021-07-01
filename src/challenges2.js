// Desafio 10
function techList(array, nome) {
  if (array.length == 0) {
    return 'Vazio!';
  }
  array.sort();
  let lista = [];
  for (let i in array) {
    lista[i] = new Object();
    lista[i].name = nome;
    lista[i].tech = array[i];
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
