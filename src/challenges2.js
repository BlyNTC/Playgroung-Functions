// Desafio 10
function techList(listaDesordenada, name) {

  let resultado;

  if (listaDesordenada.length === 0) {
    resultado = "Vazio!";
  } else {

    listaOrdenada = listaDesordenada.sort();
    let arrayDeObjetos = [];
    let n = 0;
    let objetoTech = {

    }

    for (let tecnologia of listaOrdenada) {
      arrayDeObjetos[n] = objetoTech = {
        name: name,
        tech: tecnologia
      }
      n += 1;
    }
    resultado = arrayDeObjetos;
  }
  return resultado;
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
