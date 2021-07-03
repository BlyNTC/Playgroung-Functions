// Desafio 10
function techList(lista, name) {
  let array = [];
  let objeto = {};
  let listaDeTecnologias = lista.sort();
  if(listaDeTecnologias.length === 0){
  return "Vazio!";
}
for(let i = 0; i < listaDeTecnologias.length; i += 1){
  objeto = {};
  objeto.tech = listaDeTecnologias[i];  
  objeto.name = name;
  array.push(objeto);
}
return array;
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
