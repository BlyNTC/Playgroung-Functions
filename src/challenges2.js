// Desafio 10
function techList(techs, name) {
  // seu código aqui
  let result = [], order = techs.sort();

  if (techs == 0){
    result = 'Vazio!';
  } else {
    for (let tec of order) {
      result.push({tech: tec, 'name': name});
    }
  }

  return result;
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
