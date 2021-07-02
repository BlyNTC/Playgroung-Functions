// Desafio 10
function techList(arrayNomes, name) {
  let arraySaida = [];
  arrayNomes.sort();
  if (arrayNomes.length === 0) {
    return "Vazio!";
  } else {
    for (let index = 0; index < arrayNomes.length; index += 1) {
      let informacoes = {
        tech: "",
        name: name
      }
      informacoes.tech = arrayNomes[index];
      arraySaida.push(informacoes);
    }
    return arraySaida
  }
}

// Desafio 11
function generatePhoneNumber(numbers) {
  let phoneNumber = ["("];

  if (numbers.length != 11) {
    return "Array com tamanho incorreto.";
  }

  for (let j = 0; j < numbers.length; j += 1) {
    let contador = 0;
    for (let k = 0; k < numbers.length; k += 1) {
      if (numbers[j] === numbers[k]) {
        contador += 1;
      }
    }
    if (contador >= 3) {
    return "não é possível gerar um número de telefone com esses valores";
    break;
    }
  }

  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] < 0 || numbers[index] > 9) {
      return "não é possível gerar um número de telefone com esses valores";
    } else {
      switch (index) {
        case 2:
          phoneNumber.push(") ");
          phoneNumber.push(numbers[index]);
          break;

        case 7:
          phoneNumber.push("-");
          phoneNumber.push(numbers[index]);
          break;

        default:
          phoneNumber.push(numbers[index]);
      }
    }
  }
  return phoneNumber.join('');
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < (lineB + lineC) && lineA > Math.abs(lineB - lineC)) {
    return true;
  } else {
    if (lineB < (lineA + lineC) && lineB > Math.abs(lineA - lineC)) {
      return true;
    } else {
      if (lineC < (lineA + lineB) && lineC > Math.abs(lineA - lineB)) {
        return true;
      } else {
        return false;
      }
    }
  }
}

// Desafio 13
function hydrate(bebidas) {
  let coposStr = bebidas.replace(/[^0-9]/g,'');
  let coposAgua = 0;
  for (let index = 0; index < coposStr.length; index +=1) {
    coposAgua = coposAgua + parseInt(coposStr[index]);
  }
  if (coposAgua === 1) {
    return coposAgua + " copo de água";
  } else {
    return coposAgua + " copos de água";
  }
}
let st = "1 cachaças";
console.log(hydrate(st));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
