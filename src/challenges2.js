// Desafio 10 OK
function techList(lista, name) {
  // seu código aqui
  lista.sort();
  let array = [];

  if (lista.length === 0) {
    return 'Vazio!';
  }
  for (let index = 0; index < lista.length; index += 1) {
    let object = { tech: lista[index], name: name };
    array.push(object);
  }
  return array;
}

// Desafio 11 OK
function generatePhoneNumber(arrayPhoneNumber) {
  // seu código aqui
  if (arrayPhoneNumber.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  let ddd = [arrayPhoneNumber[0]] + [arrayPhoneNumber[1]];
  let prefixo = [arrayPhoneNumber[2]] + [arrayPhoneNumber[3]] + [arrayPhoneNumber[4]] + [arrayPhoneNumber[5]] + [arrayPhoneNumber[6]];
  let numero = [arrayPhoneNumber[7]] + [arrayPhoneNumber[8]] + [arrayPhoneNumber[9]] + [arrayPhoneNumber[10]];
  let repete = 0;
  let numeroPronto;

  for (let number of arrayPhoneNumber) {
    if (number < 0 || number > 9 || repete >= 3) {
      return "não é possível gerar um número de telefone com esses valores";
    }
    repete = 0;
    for (let numberCheck of arrayPhoneNumber) {
      if (number === numberCheck) {
        repete += 1;
      }
    }
  }

  numeroPronto = '(' + ddd + ')' + ' ' + prefixo + '-' + numero;
  return numeroPronto;
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
  if (lineA + lineB < lineC || lineB + lineC < lineA || lineA + lineC < lineB) {
    return false;
  }
  else {
    return true;
  }
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
