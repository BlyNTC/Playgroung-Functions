// Desafio 10
function techList(tech, name) {
tech.sort();
let objTech = {
  nome:[],
  tech:[]
}
let lista = [];

for ( key of tech) {
  lista.push({
    tech: (key),
    name: name
  })
}
if (tech.length===0) {
return "Vazio!"
}
return lista;
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
