// Desafio 10
function techList(technoList, name) {
  // seu código aqui
  let objTechnoName = [];

  technoList.sort();

  for (let tech of technoList) {
    objTechnoName.push({ tech, name });
  }

  return objTechnoName.length === 0 ? 'Vazio!' : objTechnoName;
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
