// Desafio 10
function techList(array, name) {
  if (array.length === 0) {
    return 'Vazio!';
  } else {
    array.sort();
    for (let index in array) {
      array[index] = {
        tech: array[index],
        name: name,
      };
    }
    return array;
  }
}

// Desafio 11
function generatePhoneNumber(array) {
  if (array.length != 11){
    return "Array com tamanho incorreto.";
  } else{
    for (let index of array) {
      if (index < 0 || index > 9) {
        return "não é possível gerar um número de telefone com esses valores"
      }
    }
    let repete = 0;
    for (let index of array) {
      for (let i of array){
        if (index === i) {
          repete +=1
        }
      }
      if (repete >= 3){
        return "não é possível gerar um número de telefone com esses valores";
      } else {
        repete = 0
      }
    }
    return '(' + array[0] + array[1] + ') ' + array[2] + array[3] + array[4] + array[5] + array[6] + '-' + array[7] + array[8] + array[9] + array[10]
  }
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA > (lineB + lineC) || lineA < Math.abs(lineB - lineC) || lineB > (lineA + lineC) || lineB < Math.abs(lineA - lineC) || lineC > (lineA + lineB) || lineC < Math.abs(lineA - lineB)) {
    return false
  }
  else {
    return true
  }
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
