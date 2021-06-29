// Desafio 10
function techList(arrayTech, nomeString) {
  if (arrayTech.length === 0) {
    return 'Vazio!';
  }
  arrayTech = arrayTech.sort();
  let newArray = [];
  for (let index in arrayTech) {
    if (Object.prototype.hasOwnProperty.call(arrayTech, index)) {
      newArray.push({
        tech: arrayTech[index],
        name: nomeString,
      });
    }
  }
  return newArray;
}

console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'Javascript'], 'Lucas'));

// Desafio 11
function generatePhoneNumber(inputArray) {
  let myPhoneNumber = '';
  const error = 'não é possível gerar um número de telefone com esses valores';
  let sorted = inputArray.slice().sort((a, b) => a - b);
  if (inputArray.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  if (sorted[0] < 0 || sorted[sorted.length - 1] > 9) {
    return error;
  }
  // Se eu soubesse separar um array em arrays de valores repetidos, eu poderia usar o .length para checar se nenhum numero se
  // repete 3 ou mais vezes e diminuir a complexity e cognitive complexity do meu codigo. - Mas eu não sei! Achei um codigo que
  // faz isso na internet e não entendi.
  for (let index in inputArray) {
    if (inputArray.hasOwnProperty.call(inputArray, index)) {
      let counter = 0;
      inputArray.forEach(function (value) {
        if (value === inputArray[index]) {
          counter += 1;
        }
      });
      if (counter > 2) {
        return error;
      }
      myPhoneNumber += inputArray[index];
    }
  }
  return '('.concat(myPhoneNumber.substr(0, 2)).concat(')')
    .concat(' ').concat(myPhoneNumber.substr(2, 5))
    .concat('-')
    .concat(myPhoneNumber.substr(7));
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let lado = [];
  lado[0] = lineA;
  lado[1] = lineB;
  lado[2] = lineC;
  lado.sort((a, b) => a - b);
  if ((lado[2] < lado[0] + lado[1]) || (lado[1] > lado[2] - lado[0])) {
    return true;
  }
  return false;
}

triangleCheck(16, 9, 2);

// Desafio 13
function hydrate(string) {
  let reg = /\d/g;
  let qtdCopos = string.match(reg).reduce((accumulator, currentValue) =>
    parseInt(accumulator, 10) + parseInt(currentValue, 10));
  if (qtdCopos === '1') {
    return '1 copo de água';
  }
  return qtdCopos.toString().concat(' copos de água');
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
