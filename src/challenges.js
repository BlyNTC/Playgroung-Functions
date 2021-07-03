// Desafio 1
let boraPraia;
function compareTrue(fimDeSemana, temSol) {
  // seu código aqui

  if (fimDeSemana === true && temSol === true) {
    boraPraia = true;
  } else {

    boraPraia = false;
    
  }
  return boraPraia;

}

// Desafio 2
function calcArea(a, b) {
  // seu código aqui
  let area = (a * b) / 2;
  return area;
}

// Desafio 3
function splitSentence(frase) {
  // seu código aqui
  let quebrada = frase.split(' ');
  return quebrada;
}
splitSentence('Vamo que vamo');

// Desafio 4
function concatName(lista) {
  // seu código aqui
  let result = lista[lista.length - 1] + "," + " " + lista[0];
  console.log(result);
  return result;
}

// Desafio 5
function footballPoints(v, e) {
  // seu código aqui
  let pontos = 3 * v + e;
  console.log(pontos);
  return pontos;
}

// Desafio 6

function highestCount(numeros) {
  // seu código aqui
  let maior = -10;
  let repete = 0;
  for (let i = 0; i <= numeros.length; i += 1) {

    if (numeros[i] >= maior) {
      maior = numeros[i];
    }
  }
  for (let num of numeros) {

    if (maior === num) {
      repete = repete + 1;
    }
  }
  console.log(repete);
  return repete;
}

// let variados = [0, 0, 0];
// highestCount(variados);

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let dcat1 = Math.abs(cat1 - mouse);
  let dcat2 = Math.abs(cat2 - mouse);
  if (dcat1 === dcat2) {
    return 'os gatos trombam e o rato foge';
  }
  if (dcat1 < dcat2) {
    return 'cat1';
  } 
  if (dcat2 < dcat1) {
    return 'cat2';
  }
}

// Desafio 8
function fizzBuzz(numbers) {
  // seu código aqui
  let marcados = [];
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 3 === 0 && numbers[index] % 5 != 0) {
      marcados.push('fizz');
    }
    if (numbers[index] % 5 === 0 && numbers[index] % 3 != 0) {
      marcados.push('buzz');
    }
    if (numbers[index] % 5 === 0 && numbers[index] % 3 === 0) {
      marcados.push('fizzBuzz');
    }
    if (numbers[index] % 3 != 0 && numbers[index] % 5 != 0) {
      marcados.push('bug!');
    }
  }
  return marcados;
}

// Desafio 9
function encode(estranho) { //Alteração de código por explicação de Thiago de Oliveira e Flávio Pires; 
  // seu código aqui
  let stringQualquer = "";
  for (let letra of estranho) {
    switch (letra) {
      case 'a':
        stringQualquer += 1;
        break;
      case 'e':
        stringQualquer += 2;
        break;
      case 'i':
        stringQualquer += 3;
        break;
      case 'o':
        stringQualquer += 4;
        break;
      case 'u':
        stringQualquer += 5;
        break;
      default:
        stringQualquer += letra;

    }
  }

  console.log(stringQualquer);
  return stringQualquer;

}
encode('aranha');

function decode(convem) {
  // seu código aqui
  let caos = [];
  for (let pecas of convem) {
    caos.push(pecas);
  }

  for (let i = 0; i < convem.length; i += 1) {
    switch (caos[i]) {
      case '1':
        caos[i] = 'a';
        break;
      case '2':
        caos[i] = 'e';
        break;
      case '3':
        caos[i] = 'i';
        break;
      case '4':
        caos[i] = 'o';
        break;
      case '5':
        caos[i] = 'u';
        break;
    }
  }
  let decodigo = caos.join("");
  console.log(decodigo);
  return decodigo;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
