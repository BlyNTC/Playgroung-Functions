// Desafio 10

function techList(techs, name) {
  let list = [];
  let arFinal = [];
  if (techs.length === 5) {
    for (let i = 0; i < techs.length; i += 1) {
      list.push(techs[i])
    }
    let techArray = list.sort();   
    for (let iA = 0; iA < techArray.length; iA += 1) {
      arFinal.push({techname : techArray[iA], name : name})
    }
    return arFinal;
  } if (techs.length === 0) {
    return 'Vazio!';
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
