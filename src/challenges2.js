// Desafio 10
const techList = (array, name) => {
  if (array.length === 0) return 'Vazio!';
  return array.sort().map((element) => ({ tech: element, name }));
};

// Desafio 11
const checkValidNumber = (phoneNumber) => {
  if (phoneNumber.length !== 11) return 'Array com tamanho incorreto.';
  if (phoneNumber.find((number) => number < 0 || number > 9)
  ) return 'não é possível gerar um número de telefone com esses valores';
};

const checkRepeatNumber = (phoneNumber) => {
  for (let compareNumber of phoneNumber) {
    if (phoneNumber.filter((number) => number === compareNumber).length
    >= 3) return 'não é possível gerar um número de telefone com esses valores';
  }
};

const generatePhoneNumber = (n) => {
  if (checkValidNumber(n)) return checkValidNumber(n);
  if (checkRepeatNumber(n)) return checkRepeatNumber(n);
  return `(${n[0]}${n[1]}) ${n[2]}${n[3]}${n[4]}${n[5]}${n[6]}-${n[7]}${n[8]}${n[9]}${n[10]}`;
};

// Desafio 12

const compareLineToSum = (a, b, c) => !(a > b + c || b > a + c || c > a + b);
const compareLineToSub = (a, b, c) =>
  !(a < Math.abs(b - c) || b < Math.abs(a - c) || c < Math.abs(b - a));

const triangleCheck = (lineA, lineB, lineC) =>
  compareLineToSum(lineA, lineB, lineC) && compareLineToSub(lineA, lineB, lineC);

// Desafio 13
function hydrate(string) {
  /**
 * Consultei o vídeo do canal 'All Things JavaScript, LLC'no YouTube. Para resolver esta parte
 * https://www.youtube.com/watch?v=pfkkdzeyx6U
 */
  let waterString = string.match(/\d+/g);
  let waterNumber = waterString.reduce((acc, quant) => acc + parseInt(quant, 10), 0);
  const moreThanOne = waterNumber > 1 ? 's' : '';
  return `${waterNumber} copo${moreThanOne} de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
