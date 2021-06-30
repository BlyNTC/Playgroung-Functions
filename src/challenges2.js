// Desafio 10
function techList(array, name) {
  let obj = {};

  for(let i = 0; i < array.length; i +=1){
    obj[i] = {
      tech: array[i],
      nome: name
    }
  }
  for(let key in obj){
    return obj;
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
