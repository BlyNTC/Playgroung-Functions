// Desafio 10
function techList(array, name) {
  let techlist = [];
  array.sort();
  for (var i = 0; i < array.length; i++) {
    let object = {
      tech: array[i],
      name: name
    }
    techlist.push(object);
  }
  if (techlist == "") {
    return "Vazio!";
  } else {
  return techlist;
  }
}

// Desafio 11
function generatePhoneNumber(array) {
 
  var number = "(" + array[0] + array[1] + ") " + array[2] + array[3] + array[4] + array[5] + array[6] + "-" + array[7] + array[8] + array[9] + array[10];
  
  let count = 0;

  for (let a = 0; a <= 9; a++) {
    for (let b = 0; b < array.length; b++) {
      if (array[b] == a) {
        count = count + 1;
      }
      if (count > 2) {
        number = "não é possível gerar um número de telefone com esses valores";  
      }
    }
    count = 0;

  }

  for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      number = "não é possível gerar um número de telefone com esses valores";
    } else if (array[i] > 9) {
      number = "não é possível gerar um número de telefone com esses valores";
    }
  }

  if (array.length != 11) {
    number = "Array com tamanho incorreto."
  }

  return number;
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
