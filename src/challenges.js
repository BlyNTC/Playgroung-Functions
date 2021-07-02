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

compareTrue(true, true);

// Desafio 2
function calcArea(a, b) {
  // seu código aqui
  let area = (a * b) / 2;
  return area;
}

// Desafio 3
function splitSentence(frase) {
  // seu código aqui
  let quebrada = frase.split(" ");
  return quebrada;
  
}
splitSentence("Vamo que vamo");

// Desafio 4
function concatName(lista) {
  // seu código aqui
  let result = lista[lista.length - 1] + "," + " " + lista[0];
  console.log(result);
  return result;  
}

let arraial = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
concatName(arraial);


// Desafio 5
function footballPoints(v,e) {
  // seu código aqui
  let pontos = 3*v + e;
  console.log(pontos);
  return pontos;

}

footballPoints(1,2)

// Desafio 6

function highestCount(numeros) {
  // seu código aqui
  let maior = -10;
  let repete = 0;
  for(let i = 0; i <= numeros.length; i += 1) {

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

  } else 
    if (dcat1 < dcat2) {
      return 'cat1';
    } else 
        if (dcat2 < dcat1) {
          return 'cat2';
        }
    
}
catAndMouse(1, 0, 2)

// Desafio 8
function fizzBuzz(numbers) {
  // seu código aqui
  let marcados = [];
  for (index = 0; index < numbers.length; index += 1){
    if (numbers[index] % 3 === 0 && numbers[index] % 5 != 0) {
      marcados.push('fizz');
    }

    if (numbers[index] % 5 === 0 && numbers[index] % 3 != 0){
      marcados.push('buzz')
    }

    if (numbers[index] % 5 === 0 && numbers[index] % 3 === 0){
      marcados.push('fizzBuzz')
    }

    if (numbers[index] % 3 != 0 && numbers[index] % 5 != 0){
      marcados.push('bug!')
    }

    
  }
  return marcados;
}
let coisas = [9, 25];
fizzBuzz(coisas);

// Desafio 9
function encode(estranho) {
  // seu código aqui
  let sopa = [];
  for(let letras of estranho){
    sopa.push(letras);
  }

  for(let i = 0; i < sopa.length; i += 1){
    switch (sopa[i]){
      case 'a':
        sopa[i] = 1;
        break;
      case 'e':
        sopa[i] = 2;
        break;
      case 'i':
        sopa[i] = 3;
        break;
      case 'o':
        sopa[i] = 4;
        break;
      case 'u':
        sopa[i] = 5;
        break;
            
    }
    
  }
  let codigo = sopa.join("");
  console.log(codigo);
  return codigo;
  
}
encode('aranha');

function decode(convem) {
  // seu código aqui
  let caos = [];
  for (pecas of convem){
    caos.push(pecas);
  }

  for (let i = 0; i < convem.length; i += 1){
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
