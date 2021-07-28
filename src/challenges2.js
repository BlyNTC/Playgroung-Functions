// Desafio 10
function techList(tech, name) {
  let lista;
  tech.sort();
  if (tech.length === 0) {
    lista = 'Vazio!';
  } else {
    lista = [];
    for (let index = 0; index < tech.length; index += 1) {
      lista.push({
        tech: tech[index],
        name: name,
      });
    }
  }
  return lista;
}

// Desafio 11
function generatePhoneNumber() {
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (Math.abs(lineA + lineB) <= lineC ||
  Math.abs(lineA + lineC) <= lineB ||
  Math.abs(lineB + lineC) <= lineA) {
  return false;
}
return true;
}

// Desafio 13
function hydrate(string) {
  let str = string.match(/\d/g, " ");
  let resultado;
  let coposDeAgua = 0;
  for (let index of str) {
    coposDeAgua += parseInt(index);
  }
  if (coposDeAgua === 1) {
    resultado = (coposDeAgua + ' copo de água');
  } else if (coposDeAgua > 1) {
    resultado = (coposDeAgua + ' copos de água');
  }
  return resultado;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
