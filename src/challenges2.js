// Desafio 10
function techList(nameTech, name) {
  const arrayRef = nameTech.sort(), nameRef = name;
  let arrayResposta = [];

  if (arrayRef.length == 0) {
    return ('Vazio!');
  }
  for(let x = 0; x <= arrayRef.length -1; x += 1){
    arrayResposta.push({tech: arrayRef[x], name: nameRef});
  }
  return arrayResposta;
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
