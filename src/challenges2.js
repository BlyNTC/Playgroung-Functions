// Desafio 10
function techList(technologies, name) {
  let newList = [];
  let tech = technologies.sort(); 
  if (technologies.length === 0) {
    return 'Vazio!';
  } else {
    for (let index = 0; index < technologies.length; index += 1) {
    let object = {
        tech: tech[index],
        name: name
      }
      newList.push(object)
    }
  }
  return newList;
}
techList(["React", "Jest", "HTML", "CSS", "JavaScript"],
"Lucas");


// Desafio 11
function generatePhoneNumber(numerosTel) {
  /* let Telefone = [];
  if (numerosTel.length === 11) {
    //todo o código caso funcione

  } else if(numerosTel.length !== 11) {
    console.log('Array com tamanho incorreto.');
  } else if (numerosTel[index] < 0 || numerosTel[index] > 9) {
    console.log('não é possível gerar um número de telefone com esses valores');
  } else if () {

  }  */
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
