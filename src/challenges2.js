// Desafio 10
function techList(tecnologia, name) {
  tecnologia.sort();
  for (let i = 0; i < tecnologia.length; i += 1) {
    tecnologia[i] = {
      tech: tecnologia[i],
      name: name,
    };
  }
  if (tecnologia.length > 0) {
    return tecnologia;
  }
  return 'Vazio!';
}

// Desafio 11
function generatePhoneNumber(numeros) {
  let quantidadeRepeticao = 0;
  if (numeros !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let valor1 of numeros) {
    for (let valor2 of numeros) {
      if (valor1 === valor2) {
        quantidadeRepeticao += 1;
      }
    }
    if (valor1 < 0 || valor1 > 9 || quantidadeRepeticao >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    quantidadeRepeticao = 0;
  }
}
console.log();

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let bMenosC = Math.abs(lineB - lineC);
  let aMenosC = Math.abs(lineA - lineC);
  let aMenosB = Math.abs(lineA - lineB);
  if (bMenosC < lineA && lineA < lineB + lineC || aMenosC < lineB && lineB < lineA + lineC || aMenosB < lineC && lineC < lineA + lineB)
  {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(string) {
  let retornaString = '';
  let totalNumero = string.match(/\d+/g);
  if (totalNumero == 1) {
    retornaString = retornaString.concat(totalNumero, ' copo de água');
  }
  for (let i = 0; i < totalNumero.length; i += 1) {
    if (totalNumero[i] >= 1) {
      totalNumero += totalNumero[i];
      retornaString = retornaString.concat(totalNumero, ' copos de água');
    }
  }
  return retornaString;
}
console.log(hydrate('1 cerveja e 4 cerveja'));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
