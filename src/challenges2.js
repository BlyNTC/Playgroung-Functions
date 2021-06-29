// Desafio 10
function techList(technologies, name) {
  let output = [];

  if (technologies.length === 0) {
    return 'Vazio!';
  } else {
    for (let value of technologies.sort()) {
      let object = {}
      object.tech = value;
      object.name = name;
      output.push(object);
    }
  }

  return output;
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
