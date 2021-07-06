// Desafio 10
function techList(arrayTech, nome) {
  let objTech = [];
  let arraySort = arrayTech.sort();
  for (let index = 0; index < arrayTech.length; index += 1) {
    let objeto = {
      tech: arraySort[index],
      name: nome,
    };
    objTech.push(objeto);
  }
  if (objTech.length === 0) {
    return 'Vazio!';
  } return objTech;
}

// Desafio 11
function generatePhoneNumber() {
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < lineB + lineC && lineB < lineA + lineC && lineC < lineA + lineB) {
    return true;
  } return false;
}

// Desafio 13
// referencia https://stackoverflow.com/questions/1623221/how-to-find-a-number-in-a-string-using-javascript/30160994 e code review
function hydrate(string) {
  let resultado = 0;
  let numeros = string.replace(/[^0-9]/g, '').split('');
  for (let valor of numeros) {
    resultado += Number(valor);
  }
  if (resultado === 1) {
    return `${resultado} copo de água`;
  } return `${resultado} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
