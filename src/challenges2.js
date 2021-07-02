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
function numberCounter(numbers) {
  let numberCount = {}; // Stores repetitions
  for (let value of numbers) { // Counts repetitions
    if (!numberCount[value]) {
      numberCount[value] = 1;
    } else {
      numberCount[value] += 1;
    }
  }
  return numberCount;
}

function counter(numbers) {
  let numberCount = numberCounter(numbers);
  for (let count in numberCount) {
    if (numberCount[count] >= 3) {
      return true;
    }
  }
}

function validation(numbers) {
  let threeOrMore = counter(numbers);
  for (let value of numbers) {
    if (value < 0 || value > 9 || threeOrMore) {
      return true;
    }
  }
  return false;
}

function generatePhoneNumber(numbers) {
  if (numbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  if (validation(numbers)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return numbers.join('').replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3'); // Based in 4th example <https://www.devmedia.com.br/javascript-replace-substituindo-valores-em-uma-string/39176>
}

// Desafio 12
function higherThanDiff(lineA, lineB, lineC) {
  return lineA > Math.abs(lineB - lineC)
    && lineB > Math.abs(lineA - lineC)
    && lineC > Math.abs(lineA - lineB);
}

function triangleCheck(lineA, lineB, lineC) {
  let absoluteDiff = higherThanDiff(lineA, lineB, lineC);
  return (lineA < lineB + lineC)
    && (lineB < lineA + lineC)
    && (lineC < lineA + lineB)
    && absoluteDiff;
}

// Desafio 13
function hydrate(sentence) {
  let output = 0;
  let numbers = sentence.replace(/[^0-9]/g, '').split(''); // Reference: <https://stackoverflow.com/questions/1623221/how-to-find-a-number-in-a-string-using-javascript/30160994>
  for (let value of numbers) {
    output += Number(value);
  }
  if (output === 1) {
    return `${output} copo de água`;
  }
  return `${output} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
