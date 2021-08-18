// Desafio 10
const techList = (arr, nome) => {
  if (arr.length === 0) return 'Vazio!';
  const arrayOfTech = arr.sort().map((element) => {
    return {
      tech: element,
      name: nome,
    };
  });
  return arrayOfTech;
};

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
