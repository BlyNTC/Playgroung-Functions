// Desafio 10
function techList(techs, name) {
  let result;
  let techArr = [];
  if (techs.length == 0) {
    result = 'Vazio!';
  } else {
    for (let i of techs) {
      techArr.push({tech: i, name: name});
    }
    result = techArr.sort(function (a, b) {
      if (a.tech > b.tech) {
        return 1;
      } else {
        return -1;
      }
    });
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
