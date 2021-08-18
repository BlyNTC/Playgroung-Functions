// Desafio 10
const techList = (arr, nome) => {
  if (arr.length === 0) return 'Vazio!';
  const arrayOfTech = arr.sort().map((element) => {
    return {
      tech: element,
      name: nome,
    };
  });
  return arrayOfTech;
};

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
const hydrate = (str) => {
  // seu código aqui
  let counter = 0;
  const strToArr = str.split('');
  strToArr.forEach((char) => {
    // eslint-disable-next-line no-restricted-globals
    if (!isNaN(char) && char !== ' ') {
      counter += parseInt(char, 0);
    }
  });
  if (counter === 1) return '1 copo de água';
  return `${counter} copos de água`;
};

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
