// Desafio 10
function techList(tech, name) {
  // seu código aqui
  let obj = [];
  tech.sort();
  if (tech.length === 5) {
    for (let i of tech) {
      obj.push({
        tech: i,
        name: name
      })
    }
  } else if (tech.length === 0) {
    return 'Vazio!'
  }
  return obj
}

// Desafio 11
function generatePhoneNumber(nums) {
  // seu código aqui
  if (nums.length !== 11) {
    return 'Array com tamanho incorreto.'
  }
  for (let i of nums) {
    if (i < 0 || i > 9) {
      return 'não é possível gerar um número de telefone com esses valores'
    }
  }
  let contRepetido = 0;
  let contNumero = 0;
  for (let index in nums) {
    let verificaNumero = nums[index];
    for (let index2 in nums) {
      if (verificaNumero === nums[index2]) {
        contNumero += 1;
      }
    }
    if (contNumero > contRepetido) {
      contRepetido = contNumero;
    }
    contNumero = 0
    if (contRepetido >= 3) {
      return 'não é possível gerar um número de telefone com esses valores'
    }
  }
  nums.splice(0, 0, '(')
  nums.splice(3, 0, ')')
  nums.splice(4, 0, ' ')
  nums.splice(10, 0, "-")

  return nums.join('')
}
// Fontes desafio 11: 

// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/join

// https://www.mundojs.com.br/2018/08/31/adicionando-elementos-em-uma-lista-array-javascript/

// Exercício 5 - JavaScript 4.4 - Trybe



// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  if (lineA < (lineB + lineC) && lineA > (Math.abs(lineB - lineC))) {
    return true
  } 
  else if (lineB < (lineA + lineC) && lineB > (Math.abs(lineA - lineC))) {
    return true
  }
  else if (lineC < (lineB + lineA) && lineC > (Math.abs(lineB - lineA))) {
    return true
  } else {
    return false
  }
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
