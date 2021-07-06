// 10 - Crie uma função de Lista de Tecnologias
// Crie uma função que recebe um array de nomes de tecnologias que você quer aprender. Essa função deve receber também um segundo parâmetro chamado name com um nome.

// Para cada tecnologia no array, crie um objeto com a seguinte estrutura:

// {
//   tech: "NomeTech",
//   name: name
// }
// Estes objetos devem ser inseridos em uma nova lista em ordem crescente a partir do campo tech no objeto.

// A saída da sua função deve ser uma lista de objetos ordenada pelo campo tech dos objetos com o formato acima.

// Exemplo:

// Entradas da função:

// ["React", "Jest", "HTML", "CSS", "JavaScript"]
// "Lucas"

// // Saída:

// [
//   {
//     tech: "CSS",
//     name: "Lucas"
//   },
//   {
//     tech: "HTML",
//     name: "Lucas"
//   },
//   {
//     tech: "JavaScript",
//     name: "Lucas"
//   },
//   {
//     tech: "Jest",
//     name: "Lucas"
//   },
//   {
//     tech: "React",
//     name: "Lucas"
//   }
// ]
// Caso o array venha vazio sua função deve retornar 'Vazio!'

// O que será verificado:

// Retorne uma lista de objetos ordenados quando é passada uma lista com 5 tecnologias

// Retorne a mensagem de erro 'Vazio!' quando a lista não tiver tecnologias

function techList(tec,name) {
  let arr = [];

  if(tec.length === 0){

    return 'Vazio!';
  }

  for(let tech of tec.sort()){

    arr.push({tech,name,});     
  }
  return arr;

}//creditos ao italo ajudou a enchergar como fazer.
//-------------------------------------------------------------------------------------//

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}
//-------------------------------------------------------------------------------------//

// Desafio 12
function triangleCheck() {
  // seu código aqui
}
//-------------------------------------------------------------------------------------//

// Desafio 13
function hydrate() {
  // seu código aqui
}
//-------------------------------------------------------------------------------------//

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
