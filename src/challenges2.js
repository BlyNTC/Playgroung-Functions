// Desafio 10
function techList(tecnologias, name) {
  tecnologias.sort();
  let result;
  let myItem;
  if (tecnologias.length === 0) {
    result = 'Vazio!';
  } else {
    let arrObject = [];
    for (let index = 0; index < tecnologias.length; index += 1) {
      myItem = { tech: tecnologias[index], name: `${name}` };
      arrObject = [...arrObject, myItem];
    }
    result = arrObject;
  }
  return result;
}

// Desafio 11
function generatePhoneNumber(fullNumber) {
  let myAnswer;
  let validaNumero = true;
  let numberSize = 0;
  for (let index = 0; index < fullNumber.length; index += 1) {
    if ((fullNumber[index] > 9) || (fullNumber[index] < 0)) { numberSize += 1; }
  }
  if (numberSize === 0) { validaNumero = true; } else { validaNumero = false; }
  let validaRepetido = false;
  let currentNumberAll = 0;
  for (let indexFull = 0; indexFull < fullNumber.length; indexFull += 1) {
    let currentNumber = 0;
    for (let indexLinha = 0; indexLinha < fullNumber.length; indexLinha += 1) {
      if (fullNumber[indexFull] === fullNumber[indexLinha]) { currentNumber += 1; }
    }
    if (currentNumber > 2) { currentNumberAll += 1; currentNumber = 0; }
  }
  if (currentNumberAll > 0) { validaRepetido = true; } else { validaRepetido = false; }
  if (fullNumber.length !== 11) {
    myAnswer = 'Array com tamanho incorreto.';
  } else if ((validaNumero === false) || (validaRepetido === true)) {
    myAnswer = 'não é possível gerar um número de telefone com esses valores';
  } else {
    let myPhone = fullNumber.join('');
    myAnswer = myPhone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  }
  return myAnswer;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let myAnswer;
  if (((lineA + lineB) < lineC) || ((lineC + lineB) < lineA)
     || ((lineA + lineC) < lineA)) {
    myAnswer = false;
  } else if (((Math.abs(lineA - lineB) > lineC) || (Math.abs(lineC - lineB) > lineA)
            || (Math.abs(lineA - lineC) > lineA))) {
    myAnswer = false;
  } else {
    myAnswer = true;
  }
  return myAnswer;
}

// Desafio 13
function hydrate(meuBar) {
  let total = 0;
  let myAnswer;
  if (meuBar.match(/\d+/g)) {
    for (let index = 0; index < meuBar.match(/\d+/g).length; index += 1) {
      total += parseInt(meuBar.match(/\d+/g)[index], 10);
    }
    if (total === 0) {
      myAnswer = 'Vazio!';
    } else if (total === 1) {
      myAnswer = `${total} copo de água`;
    } else {
      myAnswer = `${total} copos de água`;
    }
  }
  return myAnswer;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
