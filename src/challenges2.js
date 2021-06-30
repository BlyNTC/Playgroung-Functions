// Desafio 10
function techList(arrayTech, name) {
  // FONTE DE PESQUISA STACKOVERFLOW E SLACK
  let array = [];
  arrayTech.sort();

  if (arrayTech.length === 0) {
    return 'Vazio!'
  }

  for (let tech of arrayTech) {
    array.push({
      tech,
      name
    });
  }
  return array
}
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas"))


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
