// Desafio 10
function techList(techs, nome) {
  // seu código aqui
  let techNome;
  if (techs.length > 0) {
    techNome = techs;
    techNome.sort();
    let listaObjetos = [];
      for (let indice = 0; indice < techs.length; indice += 1) {
        let Objetos = {
        tech: techs[indice],
        name: nome,
        };
      listaObjetos.push(Objetos);
      }    
    return listaObjetos;
  }
  return "Vazio!";  
}


// Desafio 11
function generatePhoneNumber(numeroTel) {
  // seu código aqui
  let ddd = [numeroTel[0]] + [numeroTel[1]]
  let inicial = [numeroTel[2]] + [numeroTel[3]] + [numeroTel[4]] + [numeroTel[5]] + [numeroTel[6]];
  let final = [numeroTel[7]] + [numeroTel[8]] + [numeroTel[9]] + [numeroTel[10]];
  let repete = 0;
  let numeroCompleto = "";
 
  if (numeroTel.length != 11) {
    return "Array com tamanho incorreto.";  
  } 

  for (let numb of numeroTel) {
    if (repete >= 3 || numb < 0 || numb > 9) {
      return "não é possível gerar um número de telefone com esses valores";                 
    }
    repete = 0;
    for (let numero of numeroTel) {
      if( numb === numero) { 
          repete += 1;
      }
    }  
  }
  numeroCompleto = "(" + ddd + ")" + " " + inicial + "-" + final;  
  return numeroCompleto;
}

// Desafio 12
function triangleCheck(a, b, c) {
  // seu código aqui
  if (a < b + c &&  a > Math.abs(b - c) && c < b + a && c > Math.abs(b - a) && b < a + c && b > Math.abs(a - c)) {
    return true;
  } 
  return false;
}

// Desafio 13
function hydrate(bebidas) {
  // seu código aqui
  let quantidade = 0;
  let soma = 0;
  quantidade = bebidas.match(/[0-9]/g);
  for (let i = 0; i < quantidade.length; i += 1) { 
    soma = soma + parseInt(quantidade[i]);
  }
    
  if (soma === 1) {
    return (soma + " copo de água");
  } 
  return (soma + " copos de água");
  
}


module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
