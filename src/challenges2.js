// Desafio 10
function techList(learning, name) {
  // seu código aqui
  let listalinda = [];
  learning.sort();

  if (learning.length == 0){
    return 'Vazio!';
  }

  for (let key of learning){
    let stuff = {
      tech: key,
      name: name,
    }

    listalinda.push(stuff);
  }

  return listalinda;

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
