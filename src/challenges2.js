// Desafio 10
function techList(array, name) {
  let obj = {};

  if(array.length <= 0){
    return 'Vazio!'
  }
  array = array.sort();
  for(let i = 0; i < array.length; i += 1) {
    obj[i] = {
      tech: array[i],
      nome: name
    }
  }
  for(let key in obj){
    return obj;
  }
  
}

// Desafio 11
function generatePhoneNumber(array) {
  if (array.length != 11) {
    return 'Array com tamanho incorreto.';
  } 

  
  for (let index = 0; index < array.length; index++) {
    let contador = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[index] === array[i]) {
        contador +=1;
      }
      
    }
    if (contador >= 3 || array[index] < 0 || array[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    contador = 0;
    
  }
 
  let numeroTelefone = '(' + array[0] + array[1] + ') ' + array[2] + array[3] + array[4] + array[5] + array[6] + '-' + array[7] + array[8] + array[9] + array[10];
  return numeroTelefone;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let a = Math.abs(lineA);
  let b = Math.abs(lineB);
  let c = Math.abs(lineC);
  let maior = 0;

  if( a > b && a > c){
    maior = a;
    if(a < b + c){
      return true;
    }
  }else if (b > a && b > c){
    maior = b;
    if(b < a + c){
      return true;
    }
  } else {
    maior = c;
    if(c < a + b){
      return true;
    }
  }
  return false;
}

// Desafio 13
/** referencia do código: 'https://codereview.stackexchange.com/questions/115885/extract-numbers-from-a-string-javascript' e 'https://www.horadecodar.com.br/2020/10/14/como-obter-apenas-os-numeros-de-uma-string-em-javascript/' */
function hydrate(string) {
  let qtd = string.match(/\d+/g).map(Number);
  let agua = 0;

  for (let index = 0; index < qtd.length; index++) {
    agua += qtd[index];    
  }
  return agua + ' copo de água';
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
