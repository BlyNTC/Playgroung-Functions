// Desafio 10
function techList(array,name) {
  var listaDeTec = [];
  
  for (let index = 0; index < array.length; index += 1) {
    let objeto = {
      tech: array[index],
      name: name
    }
    listaDeTec.push(objeto);
  }  
  if (listaDeTec == "") {
    return "Vazio!";
  } else {
    return listaDeTec;
  }

}
console.log(techList("React", "Jest", "HTML", "CSS", "JavaScript"));


// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA,lineB,lineC) {
  if (Math.abs((lineA - lineB || lineA - lineB )) < lineC && lineC < (lineA + lineB)) {
    return true;
  } else if (Math.abs((lineA - lineC || lineA - lineC)) < lineB && lineB < (lineA + lineC)){
    return true;
  } else if (Math.abs((lineB - lineC || lineB - lineC)) < lineA && lineA < (lineB + lineC)){
    return true;
  } else {
    return false;
  }
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
