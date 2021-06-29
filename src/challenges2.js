// Desafio 10
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
function techList(array, name) {
  // seu código aqui
  let arrayResposta = [];
  if (array.length != 0)
  {
    for (let i of array)
    {
      let objeto = 
      {
        tech: i,
        name: name
      };
      arrayResposta.push(objeto);
    }
    arrayResposta.sort(function (x, y) 
    {
      if (x.tech > y.tech)
      {
        return 1;
      }
    }
    );
    return arrayResposta;
  }
  else
  {
    return "Vazio!";
  }
  
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
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
