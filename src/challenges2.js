// Desafio 10
function techList(list, name) {
  // seu código aqui
  let lista;
  list.sort();
  if (list.length === 0) {
    lista = 'Vazio!';
  } else {
    lista = [];
    for (let index = 0; index < list.length; index += 1) {
      lista.push({
        tech: list[index],
        name: name,
      });
    }
  }
  return lista;
}

// Desafio 11
function generatePhoneNumber(numbers) {
  // seu código aqui
  let ddd = '(';
  let numPart1 = ' ';
  let numPart2 = '-';
  let phoneNumber = '';
  let verificaCondicoes = false;
  if (numbers.length !== 11) {
    phoneNumber = 'Array com tamanho incorreto.';
  } else {
    let count = 0;
    for (let indice of numbers) {
      for (let index of numbers) {
        if (indice === index) {
          count += 1;
        }
      }
      if (count >= 3 || indice < 0 || indice > 9) {
        verificaCondicoes = true;
        break;
      }
      count = 0;
    }
    if (verificaCondicoes) {
      phoneNumber = 'não é possível gerar um número de telefone com esses valores';
    } else {
      for (let index = 0; index < 2; index += 1) {
        ddd += numbers[index];
      }
      ddd += ')';
      for (let index = 2; index < 7; index += 1) {
        numPart1 += numbers[index];
      }
      for (let index = 7; index < 11; index += 1) {
        numPart2 += numbers[index];
      }
      phoneNumber = ddd + numPart1 + numPart2;
    }
  }
  return phoneNumber;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  let triangulo;
  //função que verifica se um lado é menor que a soma dos outros lados
  function verificaSoma(a, b, c) {
    let condicao;
    if (a < (b + c) && b < (a + c) && c < (a + b)) {
      condicao = true;
    }
    return condicao
  }
  //função que verifica se um lado é maior que a diferença entre os outos lados
  function verificaDiferenca(a, b, c) {
    let condicao = false;
    if (Math.abs(a > (b - c)) && Math.abs(b > (a - c)) && Math.abs(c > (a - b))) {
        condicao = true;
      }
      return condicao;
    }
    if (verificaSoma(lineA, lineB, lineC) && verificaDiferenca(lineA, lineB, lineC)){
      triangulo = true;
    }else{
      triangulo = false;
    }
    return triangulo;
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
