// Desafio 10
function techList(array, name) {
  let objectArray = [];
  array.sort();
  for (let i of array) {
    objectArray.push({
      tech: i, name: name,
    });
  }
  if (objectArray.length === 0) {
    return 'Vazio!';
  }
  return objectArray;
}

// Desafio 11
function generatePhoneNumber(array) {
  let arrayMaxNumber = Math.max(...array);
  let contador = 0;
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let i = 0; i < array.length; i += 1) {
    contador = 0;
    for (let h = 0; h < array.length; h += 1) {
      if (array[i] === array[h]) {
        contador += 1;
      }
      if (array[i] < 0 || arrayMaxNumber > 9 || contador >= 3) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
  }
  let numero = `(${array[0]}${array[1]}) ${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}-${array[7]}${array[8]}${array[9]}${array[10]}`
  return numero;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let absA = Math.abs(lineB - lineC);
  let absB = Math.abs(lineA - lineC);
  let absC = Math.abs(lineA - lineB);
  if (lineA < absA || lineB < absB || lineC < absC) {
    return false;
  }
  if (lineA > lineB + lineC || lineB > lineA + lineC || lineC > lineA + lineB) {
    return false;
  }
  return true;
}

// Desafio 13
function hydrate(string) {
  let stringArray = string.split('');
  let agua = 0;
  for (let i of stringArray) {
    if (isNaN(i) === false) {
      let number = Number(i);
      agua += number;
    }
  }
  if (agua === 1) {
    return `${agua} copo de água`;
  }
  return `${agua} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
