// Desafio 10
function techList(tecnologia, nome) {
  // seu código aqui
  if (tecnologia.length <= 0) 

  return "Vazio!";

  let lista = [];

  for (let i = 0; i < tecnologia.length; i += 1) {

  for (let i in tecnologia.sort) {

    let joga = {

      tech: tecnologia[i],
      name: nome,
    };
    lista.push(joga);
  }
  return lista;
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
