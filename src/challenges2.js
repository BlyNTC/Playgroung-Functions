// Desafio 10
function techList(array, name) {
  if (array.length === 0) {
    return 'Vazio!';
  }

  if (array.length === 5) {
    let technologies = [];
    let sortedArray = array.sort();
    let user = name;
    // Próximas linhas inspiradas em https://stackoverflow.com/questions/2383484/how-to-create-a-dynamic-object-in-a-loop
    for (let i = 0; i < array.length; i += 1) {
      technologies[i] = {
        tech: sortedArray[i],
        name: user,
      };
    }
    return technologies;
  }
}

// console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas"));

// Desafio 11
function generatePhoneNumber(array) {
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let i = 0; i < array.length; i += 1) {
    let count = 0;
    for (let j = 0; j < array.length; j += 1) {
      if (array[i] === array[j]) {
        count += 1;
      }
    }
    if (array[i] < 0 || array[i] > 9 || count >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }

  let number = '';

  for (let item of array) {
    number += item;
  }

  return `(${number.slice(0, 2)}) ${number.slice(2, 7)}-${number.slice(7)}`;
}

console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

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
