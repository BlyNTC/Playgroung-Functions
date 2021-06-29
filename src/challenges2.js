// Desafio 10
function techList(arrayTech,name) {
  let arrayObj = [];
  let arrayTechSort = arrayTech.sort();
  for (i6 = 0; i6 < arrayTech.length; i6++){
    let bloco = {
      tech: arrayTechSort[i6],
      name: name,
    }
    arrayObj.push(bloco)
  }
  if (arrayObj.length == []){
    return "Vazio!"
  }
  else {
    return arrayObj
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
