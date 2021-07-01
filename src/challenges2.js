// Desafio 10
let arrayTech = ["React", "Jest", "HTML", "CSS", "JavaScript"];

function techList(arrayTech, name) {
  // seu código aqui
  let arrayTechSort = arrayTech.sort();
  let arrayObj = [];
  for (let i = 0; i < arrayTech.length; i++) {
    let obj = {
      tech: arrayTech[i],
      name: name,
    };
    arrayObj.push(obj);
  };

  if (arrayObj.length === 0) {
    return "Vazio!";
  } else {
    return arrayObj;
  }
}

// Desafio 11
let arrayDeNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1];
// let arrayDeNumeros = [0, 2, 1, 3, 4, 1, 4, 2, 7, 8, 1, 9, 9, 4];
// let arrayDeNumeros = [1, 2, 18, 0, 5, 3, 17, 8, 9, 1, 8];
// let arrayDeNumeros = [1, 2, 12, 4, 15, 5, 2, 8, 9, 10, 11];
// let arrayDeNumeros = [0, 2, 3, 14, 5, 7, 71, 1, 9, 0, 7];

function generatePhoneNumber(arrayTel) {
  // seu código aqui
  // Recebendo o DDD
  let ddd = [];
  let firstNumbers = [];
  let lastNumbers = [];
  let arrayDeConferencia = [];
  arrayDeConferencia = arrayTel;
  let nRepetidos = 0;

  if (arrayTel.length != 11) {
    return 'Array com tamanho incorreto.';
  } else {
    for (let a = 0; a < arrayTel.length; a++) {
      if (arrayTel[a] < 0) {
        return 'não é possível gerar um número de telefone com esses valores';
      } else if (arrayTel[a] > 9) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
  }
  for (let b = 0; b < arrayDeConferencia.length; b++) {
    for (let c = 0; c < arrayTel.length; c++) {
      if (arrayDeConferencia[b] === arrayTel[c]) {
        nRepetidos += 1;
      }
    }
    if (nRepetidos < 3) {
      nRepetidos = 0;
    } else if (nRepetidos >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }

  for (let i = 0; i <= 1; i++) {
    ddd.push(arrayTel[i]);
  }
  let dddFinal = '(' + ddd.join('') + ')';

  for (let j = 2; j < 7; j++) {
    firstNumbers.push(arrayTel[j]);
  }
  let firstNumbersFinal = ' ' + firstNumbers.join('') + '-';

  for (let k = 7; k < 11; k++) {
    lastNumbers.push(arrayTel[k]);
  }
  let lastNumbersFinal = lastNumbers.join('');

  return dddFinal + firstNumbersFinal + lastNumbersFinal;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {

  let diferencaMedidasA = lineB - lineC;
  let valorAbsolutoA = Math.abs(diferencaMedidasA);
  let diferencaMedidasB = lineA - lineC;
  let valorAbsolutoB = Math.abs(diferencaMedidasB);
  let diferencaMedidasC = lineB - lineA;
  let valorAbsolutoC = Math.abs(diferencaMedidasC);

  //lineA
  if ((lineA < (lineB + lineC)) && (lineA > (valorAbsolutoA))) {
    return true;
  } else if ((lineB < (lineA + lineC)) && (lineB > (valorAbsolutoB))) {
    return true;
  } else if ((lineC < (lineA + lineB)) && (lineC > (valorAbsolutoC))) {
    return true;
  } else {
    return false;
  }
}

// Desafio 13
function hydrate(frase) {
  // seu código aqui
  let arrayNumbers = [];
  let numberFilter = '';
  let contadorCopoDagua = 0;
  numberFilter = frase.replace(/[^0-9]/g, '');

  for (let i = 0; i < numberFilter.length; i++) {
    arrayNumbers.push(numberFilter[i]);
    contadorCopoDagua += parseInt(arrayNumbers[i]);
  }
  if (contadorCopoDagua <= 1) {
    return contadorCopoDagua + ' copo de água';
  } else {
    return contadorCopoDagua + ' copos de água';
  }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
