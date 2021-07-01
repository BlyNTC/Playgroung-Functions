// Desafio 10
function techList(technologies, name) {
  let output = [];
  if (technologies.length === 0) {
    return 'Vazio!';
  }
  for (let tech of technologies.sort()) {
    output.push({
      tech,
      name,
    });
  }
  return output;
}

// Desafio 11

function numberCounter(numbers) { // validation for generatePhoneNumber function
  let numberCount = {};
  for (let value of numbers) { // count how many times the value appears
    if (numberCount[value] === undefined) {
      numberCount[value] = 1;
    } else {
      numberCount[value] += 1;
    }
  }
  let repeated = 0;
  for (let count in numberCount) { // determines how many times the value appears
    if (numberCount[count] > repeated) {
      repeated = numberCount[count];
    }
  }
  return repeated;
}

function generatePhoneNumber(numbers) {
  if (numbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  let repeated = numberCounter(numbers);
  for (let value of numbers) {
    if (value < 0 || value > 9 || repeated >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return numbers.join('').replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3'); // Beseado no Exemplo 4 em <https://www.devmedia.com.br/javascript-replace-substituindo-valores-em-uma-string/39176>
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (((lineA < lineB + lineC) && lineA > Math.abs(lineB - lineC))
    || ((lineB < lineA + lineC) && lineB > Math.abs(lineA - lineC))
    || ((lineC < lineA + lineB) && lineC > Math.abs(lineA - lineB))) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(sentence) {
  let output = 0;
  let numbers = sentence.replace(/[^0-9]/g, '').split(''); // Referência em <https://stackoverflow.com/questions/1623221/how-to-find-a-number-in-a-string-using-javascript/30160994>
  for (let value of numbers) {
    output += Number(value);
  }
  if (output === 1) {
    output += ' copo de água';
    return output;
  }
  output += ' copos de água';
  return output;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
