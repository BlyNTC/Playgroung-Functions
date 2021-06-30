// Desafio 10
function techList(array, name) {
  let tecnologias = [];
  let objeto = {};
  array.sort();

  for (index = 0; index < array.length; index += 1){
    objeto.tech = array[index];
    objeto.name = name;
    tecnologias.push(objeto);
    objeto = {};
  }
  if (array.length === 0){
    return 'Vazio!';
  } else {
    return tecnologias;
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
