// Desafio 10
function techList(listaTech, name) {
  // seu código aqui
  tech.sort();
  listaTech = [];

  if (tech.lenght !== 0) {
    for (let index in tech) {
      listaTech[index] = {
        tech: tech[index],
        name: name
      }
    }
    return listaTech;
  } return "Vazio!";
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
