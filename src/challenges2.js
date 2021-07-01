// Desafio 10
//  https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// function techList(array, name) {
//   // seu código aqui
//   let arrayResposta = [];
//   if (array.length != 0) {
//     for (let i of array) {
//       let objeto = {
//         tech: i,
//         name: name
//       };
//       arrayResposta.push(objeto);
//     }
//     arrayResposta.sort(function (x, y) {
//       if (x.tech > y.tech) {
//         return 1;
//       }
//     });
//     return arrayResposta;
//   } else {
//     return "Vazio!";
//   }
// }
// let array = ["React", "Jest", "HTML", "CSS", "JavaScript"];
// let name = "Gabriel";
// console.log(techList(array, name));

function techList(array, name) {
  // seu código aqui
  let arrayResposta = [];
  array.sort();
  if (array.length !== 0) {
    for (let i of array) {
      let objeto = {
        tech: i,
        name: name,
      };
      arrayResposta.push(objeto);
    }
    return arrayResposta;
  }
  return 'Vazio!';
}
// let array = ["React", "Jest", "HTML", "CSS", "JavaScript"];
// let name = "Gabriel";
// console.log(techList(array, name));

// Desafio 11
function generatePhoneNumber(array) {
  // seu código aqui
  let newArray = [];
  let erro = 0;
  let n = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let i of array) {
    if (i > 9 || i < 0) {
      erro += 1;
      break;
    }
    if (i === 0) {
      n[0] += 1;
    } else if (i === 1) {
      n[1] += 1;
    } else if (i === 2) {
      n[2] += 1;
    } else if (i === 3) {
      n[3] += 1;
    } else if (i === 4) {
      n[4] += 1;
    } else if (i === 5) {
      n[5] += 1;
    } else if (i === 6) {
      n[6] += 1;
    } else if (i === 7) {
      n[7] += 1;
    } else if (i === 8) {
      n[8] += 1;
    } else if (i === 9) {
      n[9] += 1;
    }
  }
  for (let i of n) {
    if (i >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  if (erro >= 1) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  newArray.push('(');
  for (let i = 0; i < 2; i += 1) {
    newArray.push(array[i]);
  }
  newArray.push(') ');
  for (let i = 2; i < 7; i += 1) {
    newArray.push(array[i]);
  }
  newArray.push('-');
  for (let i = 7; i < 11; i += 1) {
    newArray.push(array[i]);
  }
  let telefone = newArray.join('');
  return telefone;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  let lineAB = lineA + lineB;
  let lineAC = lineA + lineC;
  let lineBC = lineB + lineC;
  let absoluteAB = Math.abs(lineA - lineB);
  let absoluteAC = Math.abs(lineA - lineC);
  let absoluteBC = Math.abs(lineB - lineC);
  if (lineA < lineBC && lineB < lineAC && lineC < lineAB && lineA > absoluteBC && lineB > absoluteAC && lineC > absoluteAB) {
    return true;
  }
  return false;
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
