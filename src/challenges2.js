// Desafio 10
function techList(listaTech, name) {
  // seu código aqui
  listaTech.sort();
  let tech = [];

  if (listaTech.lenght !== 0) {
    for (let index in listaTech) {
      tech[index] = {
        tech: listaTech[index],
        name: name
      }
    }
    return tech;
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
