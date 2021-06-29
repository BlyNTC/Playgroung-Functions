// Desafio 10
function techList(arrayT, oneName) {
  arrayObj = [];
  if (arrayT.length !== 0) {
    for (let valor of arrayT.sort()) {

      let obj = {
        tech: valor,
        name: oneName
      };
      arrayObj.push(obj);
    }
    return arrayObj;
  }
  else return 'Vazio!';
}

// Desafio 11
function generatePhoneNumber(arrayN) {
  if (arrayN.length === 11) {
    let umNumero = true;
    let number = null;
    let counting = null;
    let arrayNew = [...arrayN]
    for (let valor of arrayNew.sort()) {
      if (!umNumero) {
        break;
      } else if (valor > 9 || valor < 0) {
        umNumero = false;
      } else if (counting === 3) {
        umNumero = false;
      } else if (number < valor || number === null) {
        counting = 1;
        number = valor;
      } else if (number === valor) {
        counting += 1;

      }
    }

    if (!umNumero) {
      return "não é possível gerar um número de telefone com esses valores";
    } else return `(${arrayN[0]}${arrayN[1]}) ${arrayN[2]}${arrayN[3]}${arrayN[4]}${arrayN[5]}${arrayN[6]}-${arrayN[7]}${arrayN[8]}${arrayN[9]}${arrayN[10]}`;

  } else return "Array com tamanho incorreto.";

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
