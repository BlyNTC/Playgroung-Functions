// Desafio 10
function techList(array, nome) {
  // seu código aqui
  let arrayObj = [''];
  let arrayOrd = array.sort();

  for (let key of array) {
    let object = {
      tech: key,
      name: nome
    }
    arrayObj.push(object);
  }
  if (array.length === 0) {
    return 'Vazio!'
  } else {
    return arrayObj;
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
