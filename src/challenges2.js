// Desafio 10
function techList(list, name) {
  // seu código aqui 
  let arrayTech = [];
  list.sort();
  for (let tech of list) {
    arrayTech.push({ tech, name });
  }
  return arrayTech.length === 0 ? 'Vazio!' : arrayTech;
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
