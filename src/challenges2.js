// Desafio 10

function techList(techs, name) {
  let list = [];
  let arFinal = [];
  if (techs.length === 5) {
    for (let i = 0; i < techs.length; i += 1) {
      list.push(techs[i]);
    }
    let techArray = list.sort();
    for (let iA = 0; iA < techArray.length; iA += 1) {
      arFinal.push({ tech : techArray[iA], name });
    }
    return arFinal;
  } if (techs.length === 0) {
    return 'Vazio!';
  }
}

// Desafio 11
function generatePhoneNumber(phoneNumber) {
  let phoneNumber = [7, 1, 9, 8, 8, 1, 1, 1, 1, 0, 8]

  console.log(phoneNumber.indexOf(7));

  if (phoneNumber.length === 11) {

    for (let i = 0; i < phoneNumber.length; i += 1) {
      if (phoneNumber[i] < 0 || phoneNumber[i] > 9 || )
    }
  } else {
    return 'Array com tamanho incorreto.'
  }
}

// let uniqueCount = ["a","b","c","d","d","e","a","b","c","f","g","h","h","h","e","a"];
// let count = {};
// uniqueCount.forEach(function(i) { count[i] = (count[i]||0) + 1;});
// console.log(count);

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
