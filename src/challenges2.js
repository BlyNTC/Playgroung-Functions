// Desafio 10
function techList(array, name) {
  let objectArray = [];
  array.sort();
  for (let i of array) {
    objectArray.push({
      tech: i,
      name: name
    });
  }
  if (objectArray.length === 0) {
    return 'Vazio!';
  } else {
      return objectArray;
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
