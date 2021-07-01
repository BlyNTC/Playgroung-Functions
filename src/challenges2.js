// Desafio 10
function techList(arrayTecNames, name) {
  // seu código aqui
  arrayTecNames.sort();
  let array = [];
  for (let i in arrayTecNames) {
    let object = {
      tech: arrayTecNames[i],
      name: name
    }
    array.push(object);    
  }if (arrayTecNames.length === 0){
    return 'Vazio!';
  }else{
    return array;
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
