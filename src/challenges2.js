// Desafio 10
function techList(array, name) {
  if (array.length == 0) {
    return "Vazio!"
  } else {
    array = array.sort();
    let obj = {};
    let newArray = [];
    for (let tech of array) {
      obj['tech'] = tech;
      obj['name'] = name;
      newArray.push(obj);
      obj = {};
    };

    return newArray;
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
