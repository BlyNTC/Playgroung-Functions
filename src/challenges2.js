// Desafio 10
function techList(array, name) {
  // seu código aqui
  let sortedArray = array.sort();
  let techObject = [];
  if (array.length === 0) {
    return "Vazio!";
  }
  for (let i = 0; i < sortedArray.length; i += 1) {
    techObject.push({
    'tech': sortedArray[i],
    'name': name
    })
  }
  return techObject;
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
