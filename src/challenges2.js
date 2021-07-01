// Desafio 10
function techList(arrayTech,name) {
  let arrrayJunta =[];
  let vazio = "Vazio!"
  for(i = 0; i < arrayTech.length; i += 1){
    let especificacoes = {
      tech: arrayTech[i],
      name: name
    };
    arrrayJunta.push(especificacoes);// seu código aqui
  }
  if(arrrayJunta.length === 0){
    return vazio;
  } else{
    return arrrayJunta.sort(function(a,b){
      if(a.tech < b.tech){
        return false;
      } else{
        return true;
      };
    });
  }
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
