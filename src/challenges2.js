// Desafio 10
function techList(tecnologies, name) {
  tecnologies.sort();
  let technologiesObject;

  if (tecnologies === 0) {
    technologiesObject = 'Vazio';
  } else {
    for (let i = 0; i < technologies.length; i += 1) {
      technologiesObject.push({
        tech: tecnologies[i],
        name: name,
      });
    }
  }
  return technologiesObject;
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
