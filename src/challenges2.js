// Desafio 10
function techList(array, name) {
  let arrayObjects = [];
  if (array.length === 0) {
    return 'Vazio!';
  } else {
    array.sort();
    for (let value of array) {
      arrayObjects.push({'tech': value, 'name':name})
    }
  }
  return arrayObjects;
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

