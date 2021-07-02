// Desafio 10
function techList(tecnologia, name) {
  tecnologia.sort();
  for (let i = 0; i < tecnologia.length; i += 1) {
    tecnologia[i] = {
      tech: tecnologia[i],
      name: name
    };
  }
  if (tecnologia.length > 0) {
    return tecnologia;
  }
  return 'Vazio!';
}

// Desafio 11
function generatePhoneNumber(numeros) {
  let contadorRepeticao;
  let resultado = "";
  if (numeros.length != 11) {
    return 'Array com tamanho incorreto';
  }
  for (let i of numeros) {
    for (let j of numeros)
      if (numeros[j] === numeros[i]) {
        contadorRepeticao += 1;
    }
    if (numeros[i] < 0 || numeros[i] > 9 || contadorRepeticao >= 3) {
    return 'não é possível gerar um número de telefone com esses valores';
    }
    resultado.push(numeros[i])
  }
} console.log();

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
