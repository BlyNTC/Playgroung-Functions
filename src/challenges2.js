// Desafio 10
function techList(array,name) {
  if(array.length === 0){
    return 'Vazio!';
  }else{
  array = array.sort();
  let object = {};
  let arrayResp = [];
  for (let index in array){
    object.tech = array[index];
    object.name = name;
    arrayResp.push(object);
    object = {};
  }
  return arrayResp;
}
}
// }


// Desafio 11
function generatePhoneNumber(array) {
  let phoneNumber = null;
  let cont = 0;
  if (array.length !== 11){
    return 'Array com tamanho incorreto.';
  }
  for (let index in array){
    cont = 0;
    for (let indexCont in array){
      if (array[index] === array[indexCont]){
        cont += 1;
      }
      if (array[index] < 0 || array[index] > 9 || cont >= 3){
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
  }
    phoneNumber = ('(' + array[0] + array[1] +') ');

    for (let index = 2; index <= 6; index += 1){
      phoneNumber += array[index];
    }

    phoneNumber += '-';

    for (let index = 7; index <= 10 ; index += 1){
      phoneNumber += array[index];
    }
    return phoneNumber;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  
  if ( lineA > lineB + lineC || lineB > lineA + lineC || lineC > lineA + lineB){
    return false;
  }else if(lineA < Math.abs(lineB-lineC) || lineB < Math.abs(lineA-lineC) || lineC < Math.abs(lineB-lineA)){
    return false;
  }
  return true;
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
