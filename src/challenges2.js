// Desafio 10
function techList(list, name) {
  // seu código aqui
  let listaTecnologia = []; 
  list.sort(); 
  for (let tech of list) {
    listaTecnologia.push({ tech, name });
  }
  
  if (listaTecnologia.length === 0) {
    return 'Vazio!';
  } else {
   return listaTecnologia;
  }
}
console.log(techList([], "Lucas"));

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
