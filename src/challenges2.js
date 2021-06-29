// Desafio 10
function techList(tech, name) {
  // seu código aqui
  let obj = []
  for (let key of tech) {
    if (tech.length >= 5) {
      obj.push.sort({
        tech: key,
        name: name
      })
    } else if (tech.length === 0) {
      obj.push ('Vazio!')
    }
  }
  return obj
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
