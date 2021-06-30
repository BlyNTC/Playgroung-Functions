// Desafio 10 - Crie uma função de Lista de Tecnologias
function techList(techs, name) {

  if (techs.length === 0 && name === 'Lucas') {

    return "Vazio!";

  } else {

    let imput = [];

    for (let key of techs) {

      let outline = {
        tech: '',
        name: ''
      }

      outline.tech = key;
      outline.name = name;

      imput.push(outline)
    }
// fonte para função sort = https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    return imput.sort(function(a, b){
      if (a.tech > b.tech) {
        return 1
      }
      if (a.tech < b.tech) {
        return -1;
      }
      return 0;
    });

  }

}
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], 'Lucas'));

// Desafio 11 - Crie uma função de Número de Telefone
function generatePhoneNumber(numberPhone) {
  let list = '';
  if (numberPhone.length !== 11) {
   return "Array com tamanho incorreto."
  }
  for (let num in numberPhone) {
    let cont = 0;
    for (let key in numberPhone) {
      if (numberPhone[key] === numberPhone[num]) {
        cont += 1;
      }
    }
    if (numberPhone[num] < 0 || numberPhone[num] > 9 || cont >= 3 ) {
      return "não é possível gerar um número de telefone com esses valores";
    } else if (num == 0) {
      list += '(';
    } else if (num == 2) {
      list += ') '
    } else if (num == 7) {
      list += '-'
    }
    list += numberPhone[num];
  }
  return list;
}

// Desafio 12 - Crie uma função de Condição de existência de um triângulo
function triangleCheck(lineA, lineB, lineC) {
  if (Math.abs((lineB - lineC || lineB - lineC)) < lineA && lineA < (lineB + lineC)){
    return true;
  } else if (Math.abs((lineA - lineC) || (lineA - lineC)) < lineB && lineB < (lineA + lineC)){
    return true;
  } else if (Math.abs((lineA - lineB) || (lineA - lineB)) < lineC && lineC < (lineA + lineB)){
    return true;
  } else {
    return false;
  }
}

// Desafio 13 - Crie uma função de boas vindas ao Bar da Trybe!
function hydrate(pedido) {
  let list = 0;
  for (let key of pedido) {
   if (!isNaN(key) && key !== ' ')  {
     list += parseFloat(key);
   }
 }
 if (list === 1) {
   return list + ' copo de água';
 }
 return list + ' copos de água';
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
