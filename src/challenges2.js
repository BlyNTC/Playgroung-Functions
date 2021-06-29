// Desafio 10
function techList(array, name) {
  // seu código aqui
  let list = [];

  if(array.length === 0) { return 'Vazio!'};

  array.sort();
  for (let str of array) { 

      list.push({ 
          tech: str,
          name: name
        });
  }
  return list;
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
