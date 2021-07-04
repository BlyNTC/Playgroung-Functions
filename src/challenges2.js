// Desafio 10
function techList(tech, name) {
  // seu código aqui
    let lista = tech.sort();
    let objt = [];

    if(lista.length === 0){
      return "Vazio!";
    }else if(lista.length > 0){
      for(let i = 0; i < lista.length; i+=1){
        let lista1 = {
          tech: lista[i],
          name: name
        };
        objt.push(lista1);
      }
    }
  return objt;
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
