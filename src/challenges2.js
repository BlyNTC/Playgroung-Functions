// Desafio 10
function techList(lista, name) {
  let array = [];
  //let objet= {tech:'', name:''}
  lista.sort();
  if(lista == 0){
    return 'Vazio!';
  }else{
    for (let cont = 0; cont < lista.length; cont +=1){
      let objeto= {tech: lista[cont], name: name}
      array.push(objeto);
    }
  }
  return array;
}
//console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas"));



// Desafio 11
function generatePhoneNumber(arrayComOnzeNumeros) {
  let retorno;
  let repete;

  if (arrayComOnzeNumeros.length != 11) {
    retorno = 'Array com tamanho incorreto.';  
  } 

  for (let numero of arrayComOnzeNumeros) {
    if (numero < 0 || numero > 9) {
      retorno = 'não é possível gerar um número de telefone com esses valores';
    }if (numero in arrayComOnzeNumeros === numero) {
      retorno = 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return retorno;
}
console.log(generatePhoneNumber(2, 6, 5, 9, 8));

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
