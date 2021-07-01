// Desafio 10
function techList(techs1, name) {
  let techs = []; //  nova lista
  techs1.sort(); //  lista de objetos ordenada 
  for (let index of techs1) {
    techs.push({
      tech: (index),
      name: name
    }); // objetos devem ser inseridos em uma nova lista em ordem crescente a partir do campo tech
  }
  if (techs1.length === 0) {
    return "Vazio!"; // array venha vazio sua função deve retornar 'Vazio!'
  }
  return techs;
}


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
