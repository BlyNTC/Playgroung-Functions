// Desafio 10
function techList(tech, name) {
  
  let listaObjeto = [];
  tech = tech.sort();
  
  if(tech.length == 0){
    return 'Vazio!';

  }else{
    for (let i = 0;i < tech.length; i += 1){
      listaObjeto.push( {tech:tech[i], name: name} );
    }
    return listaObjeto;
  }
}
console.log(techList(["React", "Bootstrap", "Typescript", "Angular.js", "JavaScript"], "Rabito" ))

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
