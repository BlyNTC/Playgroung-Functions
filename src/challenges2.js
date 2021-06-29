// Desafio 10
function sortList(listObjects) {
  listObjects.sort(function (obj1, obj2) {
    if (obj1.tech < obj2.tech) {
      return -1;
    } else if (obj1.tech > obj2.tech) {
      return 1;
    } else {
      return 0;
    }
  });
}
function techList(array, name) {
  let listObjects = [];
  let answer;
  if (array.length === 0) {
    answer = 'Vazio!';
  }
  else{
    for (let elem of array) {
      let object = 
      {
        'tech': elem,
        'name': name
      };
      listObjects.push(object);
    }
    sortList(listObjects);
    answer = listObjects;
  }
  return answer;
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
