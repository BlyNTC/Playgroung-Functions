// Desafio 10
function techList(techList,name) {
  // seu código aqui
  let listaOrdenados; // variavel que vai receber os objetos.
  techList.sort(); // ordenar as informações do array recebido.
  // verifica se é vazio.
  if (techList.length === 0){
    listaOrdenados = 'Vazio!';
  }
  else{
    listaOrdenados = [];
    for (let index in techList){
      listaOrdenados.push({
        tech: techList[index],
        name: name,
      })
    }
  }
  return listaOrdenados
}
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], 'Lucas'));

// Desafio 11
function generatePhoneNumber(numeros) {
  // seu código aqui
//   let retorno;
//   let contador = 0;
//   // se receber um array com tamanho diferente de 11, retorna "Array com tamanho incorreto".
//   if(numeros.length != 11){
//     retorno = 'Array com tamanho incorreto.'
//   }
//   // verifica se é menor que zero ou maior que 9
//   for (let index in numeros) {
//     if (numeros[index] < 0 || numeros[index] > 9){
//       retorno = "não é possível gerar um número de telefone com esses valores."
//     } 
//   }

//  return retorno;
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
