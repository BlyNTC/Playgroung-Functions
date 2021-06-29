// Desafio 10
function techList(arr, name) {
  let result = [];
  if (arr.length === 0) {
    return "Vazio!"
  } else {
    for (let i = 0; i < arr.length; i++) {
      var obj = {
        tech: arr[i],
        name: name
      }
      result.push(obj);
    }
  }
  console.log(result);
  //Funcao compare para o metodo sort adaptada do link https://www.sitepoint.com/sort-an-array-of-objects-in-javascript/
  function compare(a, b) {

    const techA = a.tech;
    const techB = b.tech;

    let comparison = 0;
    if (techA > techB) {
      comparison = 1;
    } else if (techA < techB) {
      comparison = -1;
    }
    return comparison;
  }
  return result.sort(compare);
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
