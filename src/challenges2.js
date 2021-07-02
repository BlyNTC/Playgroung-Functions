// Desafio 10
function techList(array, stringName) {
  let arrayOutPut = [];
  for (let index of array) {
    let objeto = {
      tech: index,
      nome: stringName
    }
    arrayOutPut.push(objeto)
  }
 return arrayOutPut.sort(function (a, b) {
    return (a.tech > b.tech) ? 1 : ((b.tech > a.tech) ? -1 : 0) // encontrei essa solução para ordenanar objetos em um array no site https://www.edsonemiliano.com.br/blog
  })
}
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"],
  "Lucas"));

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
