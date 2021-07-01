// Desafio 10
function techList(listaTech, name) {
  listaObjetos = [];
  if (listaTech.length < 1) {
    return "Vazio!"
  };
  listaTech.sort();
  for (let i = 0; i < listaTech.length; i += 1) {
    listaObjetos.push({
      tech: listaTech[i],
      name: name
    })
  }
  return listaObjetos
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
