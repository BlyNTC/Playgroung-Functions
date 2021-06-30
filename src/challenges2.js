// Desafio 10
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
function techList(array, name) {
  // seu código aqui
  let arrayResposta = [];
  if (array.length != 0) {
    for (let i of array) {
      let objeto = {
        tech: i,
        name: name
      };
      arrayResposta.push(objeto);
    }
    arrayResposta.sort(function (x, y) {
      if (x.tech > y.tech) {
        return 1;
      }
    });
    return arrayResposta;
  } else {
    return "Vazio!";
  }

}

// Desafio 11
function generatePhoneNumber(array) {
  // seu código aqui
  let newArray = [];
  let erro = 0;
  let n0 = 0; let n1 = 0;
  let n2 = 0; let n3 = 0;
  let n4 = 0; let n5 = 0; 
  let n6 = 0; let n7 = 0;
  let n8 = 0; let n9 = 0;
  
  if (array.length != 11) {
    return "Array com tamanho incorreto.";
  } else {
    for (i of array) {
      if (i > 9 || i < 0) {
        erro += 1;
        break;
      } else {
        if (i === 0) {
          n0 += 1;
        } else if (i === 1) {
          n1 += 1;
        } else if (i === 2) {
          n2 += 1;
        } else if (i === 3) {
          n3 += 1;
        } else if (i === 4) {
          n4 += 1;
        } else if (i === 5) {
          n5 += 1;
        } else if (i === 6) {
          n6 += 1;
        } else if (i === 7) {
          n7 += 1;
        } else if (i === 8) {
          n8 += 1;
        } else if (i === 9) {
          n9 += 1;
        }
      }
    }
    if (n0 >= 3 || n1 >= 3 || n2 >= 3 || n3 >= 3 || n4 >= 3 || n5 >= 3 || n6 >= 3 || n7 >= 3 || n8 >= 3 || n9 >= 3) {
      return "não é possível gerar um número de telefone com esses valores";
    } else if (erro >= 1) {
      return "não é possível gerar um número de telefone com esses valores";
    } else {
      newArray.push("(");
      for (let i = 0; i < 2; i += 1) {
        newArray.push(array[i]);
      }
      newArray.push(") ");
      for (let i = 2; i < 7; i += 1) {
        newArray.push(array[i]);
      }
      newArray.push("-");
      for (let i = 7; i < 11; i += 1) {
        newArray.push(array[i]);
      }
      let telefone = newArray.join("");
      return telefone;
    }
  }
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
