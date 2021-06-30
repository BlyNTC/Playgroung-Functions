// Desafio 10
function techList(techArray, name) {
  let vazio = [];
  let arrayObjeto = [];
  let techAprender = techArray.sort();
  for (let index of techAprender) {
    vazio = {
        tech: index,
        name: name
    }
      arrayObjeto.push(vazio);
    } 
    if (arrayObjeto.length === 0) {
      return ('Vazio!');
    } else{
      return (arrayObjeto);
    }

} 


// Desafio 11
function generatePhoneNumber(array11N) {
 
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
