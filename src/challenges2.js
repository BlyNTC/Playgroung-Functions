// Desafio 10
function techList(tecnologias, name) {
  tecnologias.sort();
  let result;
  let myItem;
  if (tecnologias.length === 0) {
    result = 'Vazio!';
  } else {
    let arrObject = [];
    for (let index = 0; index < tecnologias.length; index += 1) {
      myItem = { tech: tecnologias[index], name: `${name}` };
      arrObject = [...arrObject, myItem];
    }
    result = arrObject;
  }
  return result;
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
