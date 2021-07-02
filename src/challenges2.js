// Desafio 10
function sortList(listObjects) {
  listObjects.sort(function (obj1, obj2) {
    if (obj1.tech < obj2.tech) {
      return -1;
    } else if (obj1.tech > obj2.tech) {
      return 1;
    } else {
      return 0;
    }
  });
}
function techList(array, name) {
  let listObjects = [];
  let answer;
  if (array.length === 0) {
    answer = 'Vazio!';
  }
  else {
    for (let elem of array) {
      let object = {
        'tech': elem,
        'name': name
      };
      listObjects.push(object);
    }
    sortList(listObjects);
    answer = listObjects;
  }
  return answer;
}

// Desafio 11

function checkArray(array) {
  let answer;
  let qt = 0;
  if (array.length !== 11) {
    answer = 0;
  }
  for (let i = 0; i < array.length; i += 1) {
    for (let b = 0; b < array.length; b += 1) {
      if (array[i] === array[b] && i !== b ){
        qt += 1;
      }
    }
    if (array[i] < 0 || array[i] > 9 || qt >= 3){
      answer = 1;
    }
  }
  return answer;
}

function generatePhoneNumber(array) {
  let answer;
  let phoneNumber = '';
  let returnCheckArray = checkArray(array);
  if (returnCheckArray === 0) {
    answer = 'Array com tamanho incorreto.';
  }
  else if (returnCheckArray === 1){
    answer = 'não é possível gerar um número de telefone com esses valores';
  }
  else {
    for (let i = 0; i < array.length; i += 1) {
      if (i === 0) {
        phoneNumber += '(' + array[i];
      } else if (i === 1) {
        phoneNumber += array[i] + ') ';
      } else if (i === 6) {
        phoneNumber += array[i] + '-';
      } else {
        phoneNumber += array[i];
      }
    } 
    answer = phoneNumber;
  }

  return answer;
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
