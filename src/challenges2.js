// Desafio 10
function techList(arr, name) {
  if (arr.length === 0) {
    return 'Vazio!';
  }
  arr.sort();
  let tec = [];
  for (let j in arr) {
    tec.push({ tech: '', name: '' });
  }
  for (let i in arr) {
    tec[i].tech = arr[i];
    tec[i].name = name;
    arr[i] = tec[i];
  }
  return arr;

  // seu código aqui
}

// Desafio 11
function generatePhoneNumber(arr) {
  let arrTel = ['(', arr[0], arr[1], ') ', arr[2], arr[3], arr[4], arr[5], arr[6], '-', arr[7], arr[8], arr[9], arr[10]];
  let print = '';
  let repeticao = 0;

  if (arr.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let k in arr) {
    for (let m in arr) {
      if (arr[k] === arr[m]) {
        repeticao += 1;
      }
    }
    if (repeticao >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    repeticao = 0;
  }
  for (let i in arr) {
    if (arr[i] < 0 || arr[i] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  for (let j in arrTel) {
    print += arrTel[j];
  }

  // seu código aqui
  return print;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let result = true;
  let posA = Math.abs(lineA);
  let posB = Math.abs(lineB);
  let posC = Math.abs(lineC);

  if (posA > posB + posC || posB > posA + posC || posC > posA + posB) {
    result = false;
  }
  return result;
  // seu código aqui
}

// Desafio 13
function hydrate(string) {
  let result;
  let number = string.match(/\d+/g); // fonte de consulta: https://stackoverflow.com/questions/1623221/how-to-find-a-number-in-a-string-using-javascript/30160994
  let x = 0;
  for (let i in number) {
    let convert = parseInt(number[i]); // fonte de consulta: https://www.w3schools.com/jsref/jsref_parseint.asp
    x += convert;
  }
  if (x > 2) {
    result = `${x} copos de água`;
  } else {
    result = `${x} copo de água`;
  }
  return result;
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
