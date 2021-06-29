// Desafio 10
function techList(arrayT, oneName) {
  arrayObj = [];

  for (let valor of arrayT) {
    let obj = {
      tech: valor,
      name: oneName
    };
    arrayObj.push(obj);
  }
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
