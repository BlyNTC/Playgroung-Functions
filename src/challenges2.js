// Desafio 10
function techList(array, name) {
  let listObjects = [];
  for (elem of array) {
    let object = {
      tech: elem,
      name: name
    }
    listObjects.push(object);
  }
  return listObjects;
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
