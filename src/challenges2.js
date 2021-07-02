// Desafio 10
function techList(tecnologia, name) {
  tecnologia.sort();
  for (let i = 0; i < tecnologia.length; i += 1) {
    tecnologia[i] = {
      tech: tecnologia[i],
      name: name,
    };
  }
  if (tecnologia.length > 0) {
    return tecnologia;
  }
  return 'Vazio!';
}

// Desafio 11
function generatePhoneNumber(numeros) {
  let quantidadeRepeticao = 0;
  if (numeros !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let valor1 of numeros) {
    for (let valor2 of numeros) {
      if (valor1 === valor2) {
        quantidadeRepeticao += 1;
      }
    }
    if (valor1 < 0 || valor1 > 9 || quantidadeRepeticao >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  quantidadeRepeticao = 0;
  }

}
console.log();

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  
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
