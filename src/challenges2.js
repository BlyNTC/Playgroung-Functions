// Desafio 10
function techList(array, name) {
  var techlist = [];
  array.sort();
  for (let i = 0; i < array.length; i++) {
    let object = {
      tech: array[i],
      name: name
    }
    techlist.push(object);
  }
  if (techlist == "") {
    return "Vazio!";
  } else {
  return techlist;
  }
}

// Desafio 11
function generatePhoneNumber(array) {
  var number = "(" + array[0] + array[1] + ") " + array[2] + array[3] + array[4] + array[5] + array[6] + "-" + array[7] + array[8] + array[9] + array[10];
  return number;
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
