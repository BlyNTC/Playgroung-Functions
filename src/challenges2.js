// Desafio 10
function techList(techs, name) {
  if(techs.length===0){
  return 'Vazio!';
  } 
  techs.sort();
  let a = [];
  for (let i in techs) {
  a[i] = new Object();
  [i].tech = techs[i];
  a[i].name = name;
  }
  return a;
}
// Desafio 11
function generatePhoneNumber(numeros) {
  if (numeros.length !== 11) {
  return "Array com tamanho incorreto.";
  }
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
