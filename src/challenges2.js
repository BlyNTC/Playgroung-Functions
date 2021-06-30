// Desafio 10
function techList(listaDesordenada, name) {

  let resultado;

  if (listaDesordenada.length === 0) {
    resultado = "Vazio!";
  } else {

    listaOrdenada = listaDesordenada.sort();
    let arrayDeObjetos = [];
    let n = 0;
    let objetoTech = {

    }

    for (let tecnologia of listaOrdenada) {
      arrayDeObjetos[n] = objetoTech = {
        name: name,
        tech: tecnologia
      }
      n += 1;
    }
    resultado = arrayDeObjetos;
  }
  return resultado;
}

// Desafio 11
//Função que recebe como parâmetro um número e uma lista de números, depois retorna a quantidade de vezes que ele se repete.
function repete(numero, lista) {
  let quantidade = 0;
  for (let digito of lista) {
    if (numero === digito) {
      quantidade += 1;
    }
  }
  return quantidade;
}

function generatePhoneNumber(listaDeNumeros) {

  let resultado;
  if (listaDeNumeros.length === 11) {
    //Verifica se os numeros de cada posicao é menor ou igual a 9 e maior que 0
    let vaiNaFe = false;
    for (let numero of listaDeNumeros) {
      //garate que o número não se repete mais que 2 vezes.
      let contador = repete(numero, listaDeNumeros);
      if ((numero >= 0) && (numero <= 9) && (contador < 3)) {
        vaiNaFe = true;
      } else {
        vaiNaFe = false
        break;
      }
    }
    if (vaiNaFe) {
      let ddd = '';
      let primeiraParte = '';
      let segundaParte = '';
      let n = 0;
      for (let digito of listaDeNumeros) {
        if (n < 2) {
          //Resolve DDD
          ddd = ddd.concat(listaDeNumeros[n])
        } else if (n >= 2 && n <= 6) {
          //Resolve primeiros 5 digitos
          primeiraParte = primeiraParte.concat(listaDeNumeros[n])
        } else {
          //Resolve ultimos 4 digitos
          segundaParte = segundaParte.concat(listaDeNumeros[n])
        }
        n += 1;
      }
      resultado = "(" + ddd + ")" + " " + primeiraParte + "-" + segundaParte;
    } else {
      resultado = "não é possível gerar um número de telefone com esses valores";
    }
  } else {
    resultado = "Array com tamanho incorreto."
  }
  return resultado;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  //verifica se um lado é menor que a soma dos outros dois.
  let condicao1 = ((lineA < (lineB + lineC)) && (lineB < (lineA + lineC)) && (lineC < (lineB + lineA)));
  //verifica se um lado é maior que o valor absoluto da diferença dos outros dois.
  let condicao2 = ((lineA > Math.abs(lineB - lineC)) && (lineB > Math.abs(lineA - lineC)) && (lineC > Math.abs(lineB - lineA)));

  return (condicao1 && condicao2);
}

// Desafio 13
function hydrate(sentence) {
  let lista = sentence.split('').filter(n => (Number(n)));
  let soma = 0;
  for (let numero of lista) {
    soma = soma + parseInt(numero);
  }
  if (soma > 1){
  return (soma + " copos de água");
  } else {
    return (soma + " copo de água")
  }
}

console.log(hydrate("1 cerveja e 2 caipirinhas"));
module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
