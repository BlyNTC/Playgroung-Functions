// Desafio 10
function techList(array, name) {
  if (array.length === 0) return 'Vazio!';
  const arrayObj = [];
  array.sort().forEach((element) => {
    arrayObj.push(
      {
        tech: element,
        name,
      },
    );
  });
  return arrayObj;
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
