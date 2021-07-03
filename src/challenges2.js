// Desafio 10
function techList(tech, name) {
  // seu código aqui

  let ordenados = tech.sort();
  let tecnologias = [];

  if ( tech.length > 0 ){

    for ( let y = 0; y < tech.length; y += 1 ){
  
      tecnologias.push(
        {
          tech: ordenados[y],
          name: name
        })
      }
    }else{
      return "Vazio!";
  }
  return tecnologias;
}

// Desafio 11
function generatePhoneNumber(numeroDeTelefone) {
  // seu código aqui


  // como classificar matriz sem altera a original https://stackoverflow.com/questions/9592740/how-can-you-sort-an-array-without-mutating-the-original-array/9592774#9592774
  let mutacao,
  numeroValidoSortt;
  mutacao = numeroDeTelefone;
  numeroValidoSortt = mutacao.slice().sort();
 // *************************************************************************************************************************************************************************

  let numeroFormaTado = ["(", 0, 0, ")", " ", 0, 0, 0, 0, 0, "-", 0, 0, 0, 0];

  if ( numeroDeTelefone.length !== 11 ){
    return "Array com tamanho incorreto.";
  }else{
    for ( let i = 0; i < numeroDeTelefone.length; i += 1 ){
      if (numeroDeTelefone[i] < 0 || numeroDeTelefone[i] > 9){
        return "não é possível gerar um número de telefone com esses valores";
      }
    }
  }

  for ( let i = 0; i < 11; i += 1 ){
    if (numeroValidoSortt[i] === numeroValidoSortt[i + 1] && numeroValidoSortt[ i + 2] === numeroValidoSortt[i]){
      return "não é possível gerar um número de telefone com esses valores";
  }
}

numeroFormaTado[1] = numeroDeTelefone[0];
numeroFormaTado[2] = numeroDeTelefone[1];
numeroFormaTado[5] = numeroDeTelefone[2];

  for ( let y = 6; y < 10; y += 1 ){
      numeroFormaTado[y] = numeroDeTelefone[ y - 3 ];
  }

  for ( let y = 11; y < 15; y += 1 ){
    numeroFormaTado[y] = numeroDeTelefone[ y - 4 ];
  }

    let resultado = numeroFormaTado.join('');
    return resultado;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui

  let somaDoisLados = lineC + lineB;
  let somaDoisB = lineA + lineC;
  let somaDoisC = lineA + lineB;

  if ( lineA > somaDoisLados || lineB > somaDoisB || lineC > somaDoisC ){
    return false
  }else if(lineA < Math.abs(lineA) || lineB < Math.abs(lineB) || lineC < Math.abs(lineC)){
    return false
  }else {
    return true
  }
}

// Desafio 13
function hydrate(string) {
  // seu código aqui
  // Busca por numero dentro de uma string obs o numero continua como string dentro de um array -> https://stackoverflow.com/questions/1623221/how-to-find-a-number-in-a-string-using-javascript/30160994
  let busca = /\d+/g;
  let guardaValorDeBebidas = string.match(busca);  // creates array from matches
  //*****************************************************************************************************************************************************************************************************

  let guardaValorDeBebidasNumber = [];
  let coposDeAgua = 0;

  for (let i = 0; i < guardaValorDeBebidas.length; i++){

      guardaValorDeBebidasNumber[i] = parseInt(guardaValorDeBebidas[i])
  }

  for ( indice in guardaValorDeBebidasNumber ) { 
    coposDeAgua = coposDeAgua + guardaValorDeBebidasNumber[indice];
  }
  if (coposDeAgua === 1){
    let sugestao = `${coposDeAgua} copo de água`;
    return sugestao;
  }else {
        let sugestao = `${coposDeAgua} copos de água`;
        return sugestao;
  }
}
module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
