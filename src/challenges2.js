// Desafio 10
function techList(listaTech, name) {
  // seu código aqui
  let listaOrdenados; // variavel que vai receber os objetos.
  listaTech.sort(); // ordenar as informações do array recebido.
  // verifica se é vazio.
  if (listaTech.length === 0) {
    listaOrdenados = 'Vazio!';
  } else {
    listaOrdenados = [];
    for (let index in listaTech) {
      listaOrdenados.push({
        tech: listaTech[index],
        name: name,
      });
    }
  }
  return listaOrdenados;
}
// console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], 'Lucas'));

// Desafio 11
function generatePhoneNumber(numeros) {
  // seu código aqui
  let retorno = '(';
  if (numeros.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index = 0; index < numeros.length; index += 1) {
    if (numeros[index] < 0 || numeros[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  for (let n in numeros) {
    let cont = 0;
    for (let m in numeros) {
      if (numeros[m] === numeros[n]) {
        cont += 1;
      }
    }
    if (cont >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  for (let idx in numeros) {
    if (idx == 2) {
      retorno += ') ';
      retorno += numeros[idx];
    } else if (idx == 7) {
      retorno += '-';
      retorno += numeros[idx];
    } else {
      retorno += numeros[idx];
    }
  }
  return retorno;
}
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

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
