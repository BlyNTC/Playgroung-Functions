// Desafio 10
function techList(array, name) {
  // seu código aqui
  if (array.length === 0) {
    return 'Vazio!';
  }
  if (array.length === 5){
    let tecnologias = [];
    let ordemtech = array.sort();
    let lista = name;
  
  // próxima linha inspirada no projeto do colega Thiago Almeida
  for (let index = 0; index < array.length; index += 1) {
    tecnologias[index] = {
      tech: ordemtech[index], 
      name: lista,
    };
  }
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
