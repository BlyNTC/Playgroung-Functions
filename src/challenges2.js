// Desafio 10
function techList(tecnologia, name) {
  if (tecnologia.length === 0) {
    return 'Vazio!';
  } else {
    tecnologia.sort();
    for (let i in tecnologia) {
      tecnologia[i] = {
        tech: tecnologia[i],
        name: name,
      }
    }
    return tecnologia;
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
