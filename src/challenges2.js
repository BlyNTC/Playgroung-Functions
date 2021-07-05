// Desafio 10
function techList(arrayTech, nome) {
  let objTech = [];
  let arraySort = arrayTech.sort();
  for (let index = 0; index < arrayTech.length; index += 1) {
    let objeto = {
      tech: arraySort[index],
      name: nome,
    };
    objTech.push(objeto);
  }
  if (objTech.length === 0) {
    return 'Vazio!';
  } return objTech;
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
