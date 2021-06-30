// Desafio 10
function techList(array, name) {
  let objectArray = [];
  array.sort();
  for (let i of array) {
    objectArray.push({
      tech: i, name: name
    });
  }
  if (objectArray.length === 0) {
    return 'Vazio!';
  } else {
      return objectArray;
  }
}

// Desafio 11
function generatePhoneNumber(array) {
  let arrayMaxNumber = Math.max(...array);
    let contador = 0;
    if (array.length !== 11) {
        return "Array com tamanho incorreto.";
    } else {
        for (let i = 0; i < array.length; i += 1) {
            contador = 0;
            for (let h = 0; h < array.length; h += 1) {
                if (array[i] === array[h]) {
                    contador += 1;
                }
                if (array[i] < 0 || arrayMaxNumber > 9 || contador >= 3) {
                    return "não é possível gerar um número de telefone com esses valores";
                }
            }
        }
    }
    let numero = "(" + array[0] + array[1] + ")" + " " + array[2] + array[3] + array[4] + array[5] + array[6] + "-" + array[7] + array[8] + array[9] + array[10];
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
