// Desafio 10
function techList(arrayTecNames, name) {
  // seu código aqui
  arrayTecNames.sort();
  let array = [];
  for (let i in arrayTecNames) {
    let object = {
      tech: arrayTecNames[i],
      name: name
    }
    array.push(object);    
  }if (arrayTecNames.length === 0){
    return 'Vazio!';
  }else{
    return array;
  }
}
// Desafio 11
function generatePhoneNumber(arrayNumbers) {
  // seu código aqui
  let cont = 0;
  let phoneDDD = [arrayNumbers[0], arrayNumbers[1]];
  let phonePar1 = [arrayNumbers[2], arrayNumbers[3], arrayNumbers[4], arrayNumbers[5], arrayNumbers[6]];
  let phonePart2 = [arrayNumbers[7],arrayNumbers[8],arrayNumbers[9],arrayNumbers[10]];
  let phoneNumber;
  if (arrayNumbers.length !== 11){
    return "Array com tamanho incorreto.";
  }
  for (let index in arrayNumbers){
    cont = 0;
    for (let indexN in arrayNumbers) {
      if (arrayNumbers[index] === arrayNumbers[indexN]){
        cont += 1;
      }
    }
    if (arrayNumbers[index] < 0 || arrayNumbers[index] > 9 || cont >= 3){
      return "não é possível gerar um número de telefone com esses valores";
    }
  }
  phoneNumber = '(' + phoneDDD.join('') + ')' + ' ' + phonePar1.join('') + '-' + phonePart2.join('');
  return phoneNumber; 
  console.log(phoneNumber);
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  let somaAB = lineA + lineB;
  let somaAC = lineA + lineC;
  let somaBC = lineB + lineC;
  if(lineA > somaBC || lineB > somaAC || lineC > somaAB){
    return false;
  }else if(lineA < Math.abs(lineB - lineC) || lineB < Math.abs(lineA - lineC) || lineC < Math.abs(lineA - lineB)){
    return false;
  }else{
    return true;
  }
}
 
// triangleCheck(10, 14, 8)

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
