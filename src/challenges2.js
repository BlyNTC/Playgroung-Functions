// Desafio 10
function techList(array, nome) {
  if (array.length == 0) {
    return 'Vazio!';
  }
  array.sort();
  let lista = [];
  for (let i in array) {
    lista[i] = new Object();
    lista[i].name = nome;
    lista[i].tech = array[i];
  }
  return lista;
}

// Desafio 11
function generatePhoneNumber(array) {
  // seu código aqui
  function rep(array2) {
    let cont = 0;
    let vetor = [];

    for (let i = 0; i < array2.length; i += 1) {
        cont = 0; //seta para nao acumular
        for (let rep = 0; rep < array2.length; rep += 1) {
            if (array2[i] == array2[rep]) { //verifica se sao iguais
                if (i != rep) { // verifica se os indices sao iguais
                    cont += 1;
                }
            }
        }
        vetor.push(cont);
    }
    return Math.max.apply(null, vetor);
}
function erro(array1) {
    let a = false;
    if (array1.length != 11) {
        return 'Array com tamanho incorreto.';
    } else if (Math.min.apply(null, array1) < 0 || Math.max.apply(null, array1) > 9 || rep(array1) >= 3) {
        return 'não é possível gerar um número de telefone com esses valores';
    } else {
        a = true;
        return a;
    }
}
let y = erro(array);
if (y != true) {

    return y;
}
let string = '';
function teste(index) {
    if (index == 0) {
        return '(' + array[0];
    } else if (index == 1) {
        return array[1] + ')' + ' ';
    } else if (index == 6) {
        return array[6] + '-';
    }
}
for (let i in array) {
    if (teste(i) != null) {
        string += teste(i);
    } else {
        string += array[i];
    }
}
return string;
}

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
