// Desafio 10
function techList(array, name) {
  let arrayTech = [];
  let arraySorted = array.sort();
  if (array < 1) {
    return "Vazio!";
  } else {
    for (tech of arraySorted) {
      arrayTech.push({tech, name});
    }
    return arrayTech;
  }
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
