// Desafio 10
function techList(array, nome) {
  if (array.length == 0) {
    return 'Vazio!';
  }
  array.sort();
  let lista = [];
  for (let i in array) {
    lista[i] = new Object();
    lista[i].name = nome;
    lista[i].tech = array[i];
  }
  return lista;
}

// Desafio 11
function generatePhoneNumber(array) {
  let cont = 0;
  let vetor = [];
  for (let i = 0; i < array.length; i += 1) {
    cont = 0; //seta para nao acumular
    for (let rep = 0; rep < array.length; rep += 1) {
      if (array[i] == array[rep]) { //verifica se sao iguais
        cont += 1;
      }
    }
    vetor.push(cont);
  }
  if (array.length != 11) {
    return 'Array com tamanho incorreto.';
  } else if (Math.min.apply(null, array) < 0 || Math.max.apply(null, array) > 9 || Math.max.apply(null, vetor) >= 3) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  let string = '';
  for (let i in array) {
    if (i == 0) {
      string += '(' + array[0];
    } else if (i == 1) {
      string += array[1] + ')' + ' ';
    } else if (i == 6) {
      string += array[6] + '-';
    } else {
      string += array[i];
    }
  }
  return string;

}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let a = false;
  if (Math.abs(lineB - lineC) < lineA && lineA < lineB + lineC) {
    if (Math.abs(lineA - lineC) < lineB && lineB < lineA + lineC) {
      if (Math.abs(lineA - lineB) < lineC && lineC < lineA + lineB) {
        a = true;
      } else {
        a = false;
      }
    } else {
      a = false;
    }
  } else {
    a = false;
  }
  return a;
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
