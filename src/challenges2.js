// Desafio 10
function techList(array, name) {
  let techArray = [];
  array.sort();
  if (array.length == 0) {
    return "Vazio!";
  } else {
    for (let tech of array) {
      techArray.push({tech, name});
    }
  } return techArray;
}

// Desafio 11
function generatePhoneNumber(array) {
//  let telephoneNumber = '';
//  if (array.length !== 11) {
//    return "Array com tamanho incorreto";
//   }
  
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
