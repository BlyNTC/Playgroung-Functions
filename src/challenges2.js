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
function triangleCheck() {
  // seu código aqui
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
