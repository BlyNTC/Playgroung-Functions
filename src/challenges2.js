// Desafio 10
function techList(techs1, name) {
  let techs = []; //  nova lista
  techs1.sort(); //  lista de objetos ordenada 
  for (let index of techs1) {
    techs.push({
      tech: (index),
      name: name
    }); // objetos devem ser inseridos em uma nova lista em ordem crescente a partir do campo tech
  }
  if (techs1.length === 0) {
    return "Vazio!"; // array venha vazio sua função deve retornar 'Vazio!'
  }
  return techs;
}


function generatePhoneNumber(fone) { 

   if (fone.length !== 11) {
    return "Array com tamanho incorreto."
  } else {
    for (let index of fone) { 
        if (index < 0 || index > 9) {
        return "não é possível gerar um número de telefone com esses valores";
      } 
      let contador = 0;
      for (let key of fone) {  
        if (key === index) {
          contador += 1; 
        }
        if (contador >= 3) {
          return "não é possível gerar um número de telefone com esses valores";
        }
      }
    }
    return "(" + fone[0] + fone[1] + ")" + " " + fone[2] + fone[3] + fone[4] + fone[5] + fone[6] + "-" + fone[7] + fone[8] + fone[9] + fone[10];
  }
}


// Desafio 12
function triangleCheck() {
 
  
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
