// Desafio 10
function techList(array, name) {
  if(array.length === 0) return "Vazio!";
  array = array.sort();
  let result = [];
  for(let tech of array){
    result.push({
      tech: tech,
      name: name
    });
  };
  return result;
};

// Desafio 11 RandomNumber
function generateRandomPhoneNumber(array) {
  if(array.length === 11){
    let cache = {};
    for(let num of array){
      cache[num]? cache[num] += 1 : cache[num] = 1;
      if(num < 0 || num > 9 || cache[num] >= 3) return "não é possível gerar um número de telefone com esses valores";
    };
    cache = [];
    for(let i = 11; i > 0; i -= 1){
      let randomIndex = Math.floor(Math.random() * i);
      cache.push(array[randomIndex]);
      array.splice(randomIndex, 1);
    };
    let result = "(";
    for(let i = 0; i < 2; i += 1){
      result += cache[0];
      cache.shift();
    };
    result += ")";
    for(let i = 0; i < 5; i += 1){
      result += cache[0];
      cache.shift();
    };
    result += "-"
    for(let i = 0; i < 4; i += 1){
      result += cache[0];
      cache.shift();
    };
    return result;
  }else return "Array com tamanho incorreto.";
};

// Desafio 11
function generatePhoneNumber(array) {
  if(array.length === 11){
    let cache = {};
    for(let num of array){
      cache[num]? cache[num] += 1 : cache[num] = 1;
      if(num < 0 || num > 9 || cache[num] >= 3) return "não é possível gerar um número de telefone com esses valores";
    };
    let result = "(";
    for(let i = 0; i < 2; i += 1){
      result += array[0];
      array.shift();
    }
    result += ") "
    for(let i = 0; i < 5; i += 1){
      result += array[0];
      array.shift();
    }
    result += '-'
    for(let i = 0; i < 4; i += 1){
      result += array[i];
    }
    return result;
  }else return "Array com tamanho incorreto.";
};

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
};

// Desafio 13
function hydrate() {
  // seu código aqui
};

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
