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
  let repete = 0;
  let arrayDDD = [arrayComOnzeNumeros[0]]+ [arrayComOnzeNumeros[1]];
  let arrayPhoneParte1 = [arrayComOnzeNumeros[2]] + [arrayComOnzeNumeros[3]] + [arrayComOnzeNumeros[4]] + [arrayComOnzeNumeros[5]] + [arrayComOnzeNumeros[6]];
  let arrayPhoneParte2 = [arrayComOnzeNumeros[7]] + [arrayComOnzeNumeros[8]] + [arrayComOnzeNumeros[9]] + [arrayComOnzeNumeros[10]];
  let phoneNumber= '';

  if (arrayComOnzeNumeros.length != 11) {
    return 'Array com tamanho incorreto.'; 
  } 
  for (let numero of arrayComOnzeNumeros) {
    if (numero < 0 || numero > 9 || repete >= 3 ) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    repete = 0;
    for (let numeroCompara of arrayComOnzeNumeros){
      if (numeroCompara === numero){
        repete += 1;   
      }  
    }
  } 
  phoneNumber = '(' + arrayDDD + ')' + ' ' + arrayPhoneParte1 + '-' + arrayPhoneParte2;
  return phoneNumber;
}
//console.log(generatePhoneNumber(1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1));

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