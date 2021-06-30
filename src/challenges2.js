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
