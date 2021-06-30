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
function generatePhoneNumber(arr) {
  let arrToStr = arr.join("");
  let reg = /(?=^\d{11}$)/

  function countDuplicate(a) {
    let counts = {}

    for (let i = 0; i < a.length; i++) {
      if (counts[a[i]]) {
        counts[a[i]] += 1
      } else {
        counts[a[i]] = 1
      }
    }
    for (let prop in counts) {
      if (counts[prop] >= 3) {
        return true;
      }
    }
  }

  if (arr.length !== 11) {
    return "Array com tamanho incorreto.";
  } else if (reg.test(arrToStr) === false || countDuplicate(arr) === true) {

    return "não é possível gerar um número de telefone com esses valores";

  } else {
    let ddd = arr.slice(0, 2);
    let firsts = arr.slice(2, 7);
    let lasts = arr.slice(7, 11);
    return "(" + ddd.join("") + ") " + firsts.join("") + "-" + lasts.join("");

  }
}

// Desafio 12
function triangleCheck(lineA, lineB, linec) {
  if (Math.abs(lineB - linec) < lineA && lineA < (lineB + linec) && Math.abs(lineA - linec) < lineB && lineB < (lineA + linec)&& Math.abs(lineA - lineB) < linec && linec < (lineA + lineB)) {
    return true;
  } else {
    return false;
  }
}

// Desafio 13
function hydrate(str) {
  let reg = /\d/g;
  let matchs = str.match(reg);
  if (Math.max(matchs) === 1 && matchs.length === 1){
    return matchs.join("") + " copo de água"
  }else {
    let sum = 0 ;
    for (let i of matchs){
      sum += Number(i);
    }
    return sum + " copos de água"
  }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
