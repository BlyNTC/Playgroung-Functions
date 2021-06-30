// Desafio 10
function techList(arrTech, name) {
  // seu código aqui
  let arrObj = [];
  if (arrTech.length === 0) {
    return 'Vazio!'
  } else {
      arrTech = arrTech.sort();
      for (techs of arrTech) {
        let bloco = {
          tech: techs,
          name: name
        }
        arrObj.push(bloco);
      }
      return arrObj;
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
