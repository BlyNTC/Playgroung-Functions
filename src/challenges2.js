// Desafio 10
function techList(array, name) {
  let tech = [];
  array.sort();
  if (array == 0) {
    return 'Vazio!';
  } else {
    for (let index = 0; index < array.length; index += 1) {
      let objectTech = {
        tech: array[index],
        name: name
      }
      tech.push(objectTech);
    }
  }
  return tech
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
