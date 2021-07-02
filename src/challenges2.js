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
        output = output.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
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
// Desafio 13
function hydrate() {}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
