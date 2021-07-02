// Desafio 10
function techList(array, stringName) {
  let arrayOutPut = [];
  for (let index of array) {
    let objeto = {
      tech: index,
      name: stringName
    }
    arrayOutPut.push(objeto)
  }
  if (array.length === 0) {
    return "Vazio!";
  } else {
    return arrayOutPut.sort(function (a, b) {
      return (a.tech > b.tech) ? 1 : ((b.tech > a.tech) ? -1 : 0) // encontrei essa solução para ordenanar objetos em um array no site https://www.edsonemiliano.com.br/blog
    })
  }
}
// Desafio 11
function generatePhoneNumber(array) {
  let output = ''
  let qtdRepeticoes = 0;
  if (array.length === 11) {
    for (let i of array) {
      if (i < 0 || i > 9) {
        output = "não é possível gerar um número de telefone com esses valores";
        break;
      }
    }
    if (output === '') {
      for (let index = 0; index < array.length; index += 1) {
        for (let index2 = index; index2 < array.length; index2 += 1) {
          if (array[index] === array[index2]) {
            qtdRepeticoes += 1;
          }
        }
        if (qtdRepeticoes >= 3) {
          output = "não é possível gerar um número de telefone com esses valores";
          break;
        } else {
          qtdRepeticoes = 0;
        }
      }
      if (qtdRepeticoes < 3) {
        output = array.toString();
        output = output.replace(/,/g, '');
        output = output.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3"); //pesquisei sobre RegEx para essa solução
      }
    }
  } else {
    output = "Array com tamanho incorreto.";
  }
  return output;
}
// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA > lineB + lineC) {
    return false;
  } else if (lineB > lineC + lineA) {
    return false;
  } else if (lineC > lineB + lineA) {
    return false;
  } else {
    return true;
  }
}
// desafio 13
function hydrate(string) {
  let onlyNumbers;
  let quantidadeDeBebidas = 0;
  let numeroASerSomado = 0;
  onlyNumbers = string.replace(/([^\d])+/gim, '');
  for (let i of onlyNumbers) {
    numeroASerSomado = Number(i);
    quantidadeDeBebidas = quantidadeDeBebidas + numeroASerSomado;
  }
  if (quantidadeDeBebidas < 2 && quantidadeDeBebidas > 0) {
    return quantidadeDeBebidas + " copo de água"
  } else {
    return quantidadeDeBebidas + " copos de água"
  }
}
module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
