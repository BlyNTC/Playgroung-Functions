// Desafio 10
function techList(lista,name) {
  let listaFinal=[];
  let arraySort=lista.sort();
  let cont=0
  for(let i=0;i<lista.length;i+=1){
    let obj= {
      tech:arraySort[i],
      name:name,
    }
    listaFinal.push(obj)
    cont+=1
  }
  if(cont==0){
    return 'Vazio!'
  }else{
    return(listaFinal)
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
