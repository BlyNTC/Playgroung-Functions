// Desafio 10
function techList(techArray, name) {
  let vazio = [];
  let arrayObjeto = [];
  let techAprender = techArray.sort();
  for (let index of techAprender) {
    vazio = {
      tech: index,
      name: name,
    };
    arrayObjeto.push(vazio);
  }
  if (arrayObjeto.length === 0) {
    return ('Vazio!');
  } 
  return (arrayObjeto);
}

// Desafio 11
function generatePhoneNumber(array11N) {
  let guardar = 0;
  let valor = 0;
  let armazenar = 0;
  let telefone = '';

  for (let conferir of array11N) {
    for (let conferindo of array11N)
      if (conferir === conferindo) {
        guardar += 1;
      }
    if (guardar >= 3) {
      armazenar += guardar;
    } guardar = 0;
  }
  for (let maiorMenor of array11N) {
    if (maiorMenor < 0 || maiorMenor > 10) {
      valor += 1;
    }
  }
  if (array11N.length > 11 || array11N.length < 11) {
    return 'Array com tamanho incorreto.';
  } else if (armazenar >= 3 || valor > 0) {
    return 'não é possível gerar um número de telefone com esses valores';
  } else {
    for (let index = 0; index < 11; index += 1) {
      if (index === 0) {
        telefone += '(';
      } else if (index === 2) {
        telefone += ') ';
      } else if (index === 7) {
        telefone += '-';
      }
      telefone += array11N[index];
    } return telefone;
  }
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA + lineB > lineC) {
    if (lineC > Math.abs(lineA - lineB)) {
      return true;
    }
  } else if (lineA + lineC > lineB) {
    if (lineB > Math.abs(lineA - lineC)) {
      return true;
    }
  } else if (lineC + lineB > lineA) {
    if (lineA > Math.abs(lineC - lineB)) {
      return true;
    }
  }
  return false;
}

// Desafio 13
function hydrate(bebidas) {
  let numeros = bebidas.match(/\d/g);
  let somar = 0;
  for (let percorrer of numeros) {
    somar += parseInt(percorrer)
  } 
  if (somar != 1) {
    return somar + ' copos de água';
  }
  return somar + ' copo de água';
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};