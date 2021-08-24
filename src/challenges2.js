// Desafio 10
function techList(array, name) {
  array.sort();
  const tecnologias = [];
  array.forEach((tecnologia) => {
    const tech = {
      tech: tecnologia,
      name,
    };
    tecnologias.push(tech);
  });
  return array.length === 0 ? 'Vazio!' : tecnologias;
}

// Desafio 11
function generatePhoneNumber(numeros) {
// Calcula o numero de repetição e retorna se o número for superado
  let vezesRepetido = 0;
  for (let index = 0; index < numeros.length; index += 1) {
    for (let i = 0; i < numeros.length; i += 1) {
      if (numeros[i] === numeros[index]) {
        vezesRepetido += 1;
      }
      if (vezesRepetido >= 3) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
    vezesRepetido = 0;
  }
  // Faz os outros testes
  if (numeros.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  let numeroTelefone = '(';
  for (let index = 0; index < numeros.length; index += 1) {
    if (numeros[index] < 0 || numeros[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    if (index === 2) {
      numeroTelefone += ') ';
    } else if (index === 7) {
      numeroTelefone += '-';
    }
    numeroTelefone += numeros[index];
  }
  return numeroTelefone;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  return lineA < (lineB + lineC) && lineB < (lineA + lineC) && lineC && lineC < (lineA + lineB);
}

// Desafio 13
function hydrate(string) {
  let numerosNaString = string.match(/\d+/g);
  let somaNumeros = 0;
  numerosNaString.forEach((numero) => {
    somaNumeros += parseInt(numero, 10);
  });
  return somaNumeros === 1 ? `${somaNumeros} copo de água` : `${somaNumeros} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
