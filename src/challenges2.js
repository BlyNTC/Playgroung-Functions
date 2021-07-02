// Desafio 10
let techNome;
function techList(techs, nome) {
  // seu código aqui
  if(techs.length > 0) {
    techNome = techs;
    techNome.sort()
    let listaObjetos =[];
    for(let i = 0; i < techs.length; i +=  1) {
      let Objetos = {
      tech: techs[i],
      name: nome,
     
      };

      listaObjetos.push(Objetos);

    }
    
  console.log(listaObjetos);
  return listaObjetos;
  } else return "Vazio!";
  
}

techList(["HTML","CSS","Javascript","React"],"Lucas");


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
