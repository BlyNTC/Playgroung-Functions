// Desafio 10
function techList(array, name) {
  if (array.length == 0) {
    return "Vazio!"
  } else {
    array = array.sort();
    let obj = {};
    let newArray = [];
    for (let tech of array) {
      obj['tech'] = tech;
      obj['name'] = name;
      newArray.push(obj);
      obj = {};
    };

    return newArray;
  };
}

// Desafio 11
function generatePhoneNumber(array) {
  let negativo = 0;
  let maior = 0;
  let repete = false;
  let obj = {
    '0': 0,
    '1': 0,
    '2': 0,
    '3': 0,
    '4': 0,
    '5': 0,
    '6': 0,
    '7': 0,
    '8': 0,
    '9': 0
  }

  for (let number of array) {
    if (obj.hasOwnProperty(number)) {
      obj[number] += 1;
    }

    if (number < 0) {
      negativo += 1;
    }

    if (number > 9) {
      maior += 1;
    }
  }

  for (let key in obj) {
    if (obj[key] >= 3) {
      repete = true;
      break;
    }
  }

  if (array.length != 11) {
    return "Array com tamanho incorreto."
  } else if (negativo > 0 || maior > 0 || repete) {
    return "não é possível gerar um número de telefone com esses valores"
  } else {
    array.splice(0, 0, '(');
    array.splice(3, 0, ')');
    array.splice(4, 0, ' ');
    array.splice(10, 0, '-');
    array = array.toString();
    array = array.replace(/,/g, '');
  }
  return array;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA > Math.abs(lineB + lineC) || lineB > Math.abs(lineA + lineC) || lineC > Math.abs(lineA + lineB)) {
    return false;
  } else if (lineA < Math.abs(lineB - lineC) || lineB < Math.abs(lineA - lineC) || lineC < Math.abs(lineA - lineB)) {
    return false
  } else {
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
