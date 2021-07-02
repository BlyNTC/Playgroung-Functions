// Desafio 10
function techList() {
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber(tel) {
  if (tel.length == 11) {
    for (let index1 = 0; index1 < 11; index1++) {
      let point = 0;
      for (index2 = 0; index2 < 11; index2++) {
        if (tel[index1] === tel[index2]) {
          point++;
          if (point === 3) {
            return 'não é possível gerar um número de telefone com esses valores';
          }
        }
      }      
      if (tel[index1] < 0 || tel[index1] > 9) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
    return `(${tel[0]}${tel[1]}) ${tel[2]}${tel[3]}${tel[4]}${tel[5]}${tel[6]}-${tel[7]}${tel[8]}${tel[9]}${tel[10]}`;
  }
  else {
    return 'Array com tamanho incorreto.';
  }
}

let tel = [0, 4, 3, 4, 4, 2, 7, 8, 9, 9, 4];
console.log(generatePhoneNumber(tel));



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
