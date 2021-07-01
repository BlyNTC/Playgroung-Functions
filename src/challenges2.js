// Desafio 10
function techList(tech1, name) {
  let grupo = [];
  let grupo1 = { tech: '', name: '' };
  for (let index in tech1, name) {
    if (tech1.length === 0) {
      return 'Vazio!'
    } else {
      grupo1.tech = tech1.sort()[index]
      grupo1.name = name
      grupo.push(grupo1)
      grupo1 = { tech: '', name: '' };
    }
  }
  return grupo;
}

// Desafio 11
function generatePhoneNumber(array) {
  let y = 0;
  let cont = 0;
  if (array.length !== 11) {
    return "Array com tamanho incorreto.";
  }
  for (let x in array) {
    if (array[x] < 0 || array[x] > 9) {
      return "não é possível gerar um número de telefone com esses valores";
    }
  }
  for (let l = 0; l <= array.length; l += 1) {

    for (let c in array) {
      if (array[y] == array[c]) {
        cont += 1;
      }
    }
    y += 1;
    if (cont >= 3) {
      return "não é possível gerar um número de telefone com esses valores";
    }
    cont = 0;
  }
  let n = '('
  for (let p in array) {
    if (p == 2) {
      n += ') '
      n += array[p];
    } else if (p == 7) {
      n += '-';
      n += array[p];
    } else {
      n += array[p]
    }
  }
  return n;
}


// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let somaA = lineC + lineB;
  let somaB = lineC + lineA;
  let somaC = lineA + lineB;
  let diferencaA = Math.abs(somaA - lineA);
  let diferencaB = Math.abs(somaB - lineB);
  let diferencaC = Math.abs(somaC - lineC);

  let difA = Math.abs(lineA - lineB);
  let difA1 = Math.abs(lineA - lineC);

  let difB = Math.abs(lineB - lineA);
  let difB1 = Math.abs(lineB - lineC);

  let difC = Math.abs(lineC - lineB );
  let difC1 = Math.abs(lineC - lineA);

  if (lineA < difA || lineA < difA1){
    return false;
  }else if (lineB < difB || lineB < difB1){
    return false;
  } else if (lineC < difC || lineC < difC1){
    return false;
  }if (lineA < somaA && lineA > diferencaA) {
    return true;
  }else if (lineB < somaB && lineB > diferencaB) {
    return true;
  }else if (lineC < somaC && lineC > diferencaC) {
    return true;
  } else {
    return false;
  }
}

// Desafio 13
function hydrate(string) {
  let s = string;
  let y = s.match(/\d+/g).map(Number);
  i = 0;
  for (let b in y) {
    i += y[b];
  }
  if (i == 1) {
  return i + " copo de água";
  } else if (i > 1) {
    return i + " copos de água";
  }
 }

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
