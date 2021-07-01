// Desafio 10
function techList(tech, name) {
  // seu código aqui
  let obj = [];
  tech.sort();
  if (tech.length === 5) {
    for (let i of tech) {
      obj.push({
        tech: i,
        name: name
      })
    }
    } else if (tech.length === 0) {
      return 'Vazio!'
    }
    return obj
  }
//   let obj = [];
//   tech.sort();
//   for (let i of tech) {
//     if (tech.length === 5) {
//       obj.push({
//         tech: i,
//         name: name
//       })
//     } 
//   }
//   if (tech.length === 0) {
//     return 'Vazio!'
//   }
//   return obj
// }




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
