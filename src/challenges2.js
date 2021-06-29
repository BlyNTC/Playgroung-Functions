// Desafio 10
function techList(array, name) {
  if (array.length === 0) return 'Vazio!';
  const arrayObj = [];
  array.sort().forEach((element) => {
    arrayObj.push(
      {
        tech: element,
        name,
      },
    );
  });
  return arrayObj;
}

// Desafio 11
function generatePhoneNumber(array) {
  let qtd = array.reduce((acumulador, elemento) => {
    acumulador[elemento] = (elemento in acumulador ? acumulador[elemento] + 1 : 1);
    return acumulador;
  }, {});

  if (array.length !== 11) return 'Array com tamanho incorreto.';
  if (array.some((e) => e < 0 || e > 9 || qtd[e] >= 3)) return 'não é possível gerar um número de telefone com esses valores';

  const op = array.splice(0, 2).join('');
  const part1 = array.splice(0, 5).join('');
  const tel = `(${op}) ${part1}-${array.join('')}`;

  return tel;
}

// Desafio 12
function triangleCheck(l1, l2, l3) {
  if (l1 + l2 > l3 && l3 > Math.abs(l1 - l2)) return true;
  if (l1 + l3 > l2 && l2 > Math.abs(l1 - l3)) return true;
  if (l3 + l2 > l1 && l1 > Math.abs(l3 - l2)) return true;
  return false;
}

// Desafio 13
function hydrate(str) {
  let watter = 0;
  for (let i = 0; i < str.length; i++) {
    if (isFinite(str.charAt(i))) watter += Number(str.charAt(i));
  }

  if (watter === 1) return `${watter} copo de água`;
  if (watter > 1) return `${watter} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
