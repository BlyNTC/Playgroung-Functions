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
  if (numeros.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  let contadorDeRepeticoes = 0;
  for (let numero of numeros) {
    for (let numero2 of numeros) { 
      if (numero === numero2) {
        contadorDeRepeticoes += 1;
      }
    }
    if (numero < 0 || numero > 9 || contadorDeRepeticoes >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }  
    contadorDeRepeticoes = 0;  
  }
  let ddd = `(${numeros[0]}${numeros[1]})`;
  let primeiraSequencia = `${numeros[2]}${numeros[3]}${numeros[4]}${numeros[5]}${numeros[6]}`;
  let segundaSequencia = `${numeros[7]}${numeros[8]}${numeros[9]}${numeros[10]}`;
  return `${ddd} ${primeiraSequencia}-${segundaSequencia}`;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let bMenosC = Math.abs(lineB - lineC);
  let aMenosC = Math.abs(lineA - lineC);
  let aMenosB = Math.abs(lineA - lineB);
  if (bMenosC < lineA && lineA < lineB + lineC || aMenosC < lineB && lineB < lineA + lineC || aMenosB < lineC && lineC < lineA + lineB) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(string) {
  let retornaString = '';
  let contagem = 0;
  let totalNumero = string.match(/\d+/g).map(Number);
  for (let i = 0; i < totalNumero.length; i += 1) {
    if (totalNumero[i] >= 1) {
      contagem += totalNumero[i];
    }
  }
  if (contagem === 1) {
    retornaString = retornaString.concat(contagem, ' copo de água');
  } else if (contagem > 1) {
    retornaString = retornaString.concat(contagem, ' copos de água');
  }
  return retornaString;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
