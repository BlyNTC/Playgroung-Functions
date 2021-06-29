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

console.log(generatePhoneNumber([1,1,0,4,5,6,7,8,9,2,3]))
// Desafio 11
function generatePhoneNumber(array) {
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

// Desafio 12
function triangleCheck() {
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
