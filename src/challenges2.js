// Desafio 10
function techList(tech, nome) {
  let lista;
  tech.sort();
  if (tech.length === 0) {
    lista = 'Vazio!';
  } else {
    lista = [];
    for (let index = 0; index < tech.length; index += 1) {
      lista.push({
        tech: tech[index],
        name: nome,
      });
    }
  }
  return lista;
}

// Desafio 11
function contador(array, index) {
  let total = 0;
  for (let indexNumber = 0; indexNumber < array.length; indexNumber += 1) {
    if (array[index] === array[indexNumber]) {
      total += 1;
    }
  }
  return total;
}
function validar(array, index, count) {
  if (array[index] < 0 || array[index] > 9 || count >= 3) {
    return false;
  }
  return true;
}
function generatePhoneNumber(arrayNumber) {
  if (arrayNumber.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index = 0; index < arrayNumber.length; index += 1) {
    let count = contador(arrayNumber, index);
    if (!validar(arrayNumber, index, count)) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  let numeroFinal = '(';
  numeroFinal += `${arrayNumber[0]}${arrayNumber[1]}`;
  numeroFinal += ') ';
  numeroFinal += `${arrayNumber[2]}${arrayNumber[3]}${arrayNumber[4]}${arrayNumber[5]}`;
  numeroFinal += `${arrayNumber[6]}`;
  numeroFinal += '-';
  numeroFinal += `${arrayNumber[7]}${arrayNumber[8]}${arrayNumber[9]}${arrayNumber[10]}`;
  return numeroFinal;
}

// Desafio 12
function verificar(linha, x, y) {
  return linha < (x + y) && linha > Math.abs(x - y);
}

function triangleCheck(linhaA, linhaB, linhaC) {
  let verificaA = verificar(linhaA, linhaB, linhaC);
  let verificaB = verificar(linhaB, linhaA, linhaC);
  let verificaC = verificar(linhaC, linhaB, linhaA);

  if (verificaA && verificaB && verificaC) {
    return true;
  }
  return false;
}

// Desafio 13
function coposAgua(array) {
  let total = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] >= 0 && array[index] <= 9) {
      let int = Math.abs(array[index]);
      total += int;
    }
  }
  return total;
}

function hydrate(agua) {
  let soma = coposAgua(agua);
  let result;
  if (soma === 1) {
    result = '1 copo de água';
  } else if (soma > 1) {
    let num = soma.toString();
    result = `${num} copos de água`;
  }
  return result;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
