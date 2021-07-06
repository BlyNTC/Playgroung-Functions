// Desafio 10
function techList(technologies, name)
 {  //seu código aqui
  let listaObjetos = [];
    if (technologies.length === 0) {
      return 'Vazio!';
    }
  for (let tech of technologies.sort()) {
      listaObjetos.push({
        tech,
        name,
      });
  }
    return listaObjetos;
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
