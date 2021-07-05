// Desafio 10
function techList(listaTech, name) {
  // seu código aqui
  let listaOrdenados; // variavel que vai receber os objetos.
  listaTech.sort(); // ordenar as informações do array recebido.
  // verifica se é vazio.
  if (listaTech.length === 0) {
    listaOrdenados = 'Vazio!';
  } else {
    listaOrdenados = [];
    for (let index in listaTech) {
      listaOrdenados.push({
        tech: listaTech[index],
        name: name,
      });
    }
  }
  return listaOrdenados;
}
// console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], 'Lucas'));

// Desafio 11
function generatePhoneNumber(numeros) {
  // seu código aqui
  let retorno = '(';
  if (numeros.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index = 0; index < numeros.length; index += 1) {
    if (numeros[index] < 0 || numeros[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  for (let n in numeros) {
    let cont = 0;
    for (let m in numeros) {
      if (numeros[m] === numeros[n]) {
        cont += 1;
      }
    }
    if (cont >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  for (let idx in numeros) {
    if (idx == 2) {
      retorno += ') ';
      retorno += numeros[idx];
    } else if (idx == 7) {
      retorno += '-';
      retorno += numeros[idx];
    } else {
      retorno += numeros[idx];
    }
  }
  return retorno;
}
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

// Desafio 12
function triangleCheck(lineA,lineB,lineC) {
  // seu código aqui
  let status; // variável que vai armazenar o valor booleano.
  let verificaA = false;
  let verificaB = false;
  let verificaC = false;
  if(lineA > Math.abs(lineB-lineC) && lineA < lineB + lineC) {
    verificaA = true;
  } 
  if (lineB > Math.abs(lineA-lineC) && lineB < lineA + lineC) {
    verificaB = true;
  }
  if (lineC > Math.abs(lineA-lineB) && lineC < lineA + lineB) {
    verificaC = true;
  }
  if (verificaA === true && verificaB === true && verificaC === true){
    status = true;
  } else {
    status = false;
  }
  return status
}
console.log(triangleCheck(10, 14, 8));

// Desafio 13
function hydrate(string) {
  // seu código aqui
let reg = /\d+/g;
let result = string.match(reg);
let array = [];
let cont = 0;
let saida;
for (let index = 0; index < result.length; index += 1) {
  array.push(parseInt(result[index]));
}
for (let i = 0; i < array.length; i += 1){
  cont += array[i];
}
if (cont > 1) {
  saida = cont + ' copos de água';
} else {
  saida = cont + ' copo de água';
}
return saida;
}
console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
