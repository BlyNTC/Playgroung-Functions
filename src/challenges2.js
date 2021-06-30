// Desafio 10
function techList(array, nome) {
  // seu código aqui
  let arrayObj = [];
  let arrayOrd = array.sort();

  for (let key of arrayOrd) {
    let object = {
      tech: key,
      name: nome,
    };
    arrayObj.push(object);
  }
  if (array.length === 0) {
    return 'Vazio!';
  }
  return arrayObj;

}

// Desafio 11
function generatePhoneNumber(array) {
  // seu código aqui
  let numero = '(';
  let cont = 0;
  if (array.length != 11) {
    return 'Array com tamanho incorreto.';
  }


  for (let index = 0; index < 11; index += 1) {
    if (array[index] < 0 || array[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    cont = 0;
    for (let index2 = 0; index2 < 11; index2 += 1) {
      if (array[index] === array[index2]) {
        cont += 1
      }
    }
    if (cont >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    numero += array[index]
    if (index === 1) {
      numero += ') ';
    } else if (index === 6) {
      numero += '-';
    }
  }

  return numero;

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
