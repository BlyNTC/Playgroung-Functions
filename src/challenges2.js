// Desafio 10
const techList = (array, name) => {
  if (array.length === 0) return 'Vazio!';
  return array.sort().map((element) => ({ tech: element, name }));
};

// Desafio 11
const generatePhoneNumber = (a) => {
  if (a.length !== 11) return 'Array com tamanho incorreto.';
  if (a.find((number) => number < 0 || number > 9)
  ) return 'não é possível gerar um número de telefone com esses valores';
  for (let numberToCompare of a) {
    if (a.filter((number) => number === numberToCompare).length
      >= 3) return 'não é possível gerar um número de telefone com esses valores';
  }
  return `(${a[0]}${a[1]}) ${a[2]}${a[3]}${a[4]}${a[5]}${a[6]}-${a[7]}${a[8]}${a[9]}${a[10]}`;
};

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA > lineB + lineC || lineB > lineA + lineC || lineC > lineA + lineB) {
    return false;
  } if (lineA < Math.abs(lineB - lineC) || lineB < Math.abs(lineA - lineC) || lineC < Math.abs(lineB - lineA)) {
    return false;
  }
  return true;
}

// Desafio 13
function hydrate(string) {
  /**
 * Consultei o vídeo do canal 'All Things JavaScript, LLC'no YouTube. Para resolver esta parte
 * https://www.youtube.com/watch?v=pfkkdzeyx6U
 */
  let waterString = string.match(/\d+/g);
  let waterNumber = 0;
  for (let index in waterString) waterNumber += parseInt(waterString[index]);
  if (waterNumber > 1) {
    return `${waterNumber} copos de água`;
  }
  return `${waterNumber} copo de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
