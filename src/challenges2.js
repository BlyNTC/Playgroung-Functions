// Desafio 10
function techList(tech, name) {
  // seu código aqui

  let ordenados = tech.sort();
  let tecnologias = [];

  if (tech.length > 0){

    for ( let y = 0; y < tech.length; y += 1 ){
  
      tecnologias.push(
        {
          tech: ordenados[y],
          name: name
        })
      }
    }else{
      return "Vazio!";
  }
  return tecnologias;
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
