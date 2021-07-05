// Desafio 10
function techList(tech, name) {
  
  let listaObjeto = [];
  tech = tech.sort();
  
  if (tech.length === 0) {
    return 'Vazio!';

  } else {
    for (let i = 0;i < tech.length; i += 1) {
      listaObjeto.push( {tech:tech[i], name: name} );
    }
    return listaObjeto;
  }
}
techList(['React', 'Bootstrap', 'Typescript', 'Angular.js', 'JavaScript'], 'Rabito');

// Desafio 11

function generatePhoneNumber(digitosFoneVetor) {
  let vezes = 0;
  let vetorDDD = [digitosFoneVetor[0]]+ [digitosFoneVetor[1]];
  let vetorNumParte1 = [digitosFoneVetor[2]] + [digitosFoneVetor[3]] + [digitosFoneVetor[4]] + [digitosFoneVetor[5]] + [digitosFoneVetor[6]];
  let vetorNumParte2 = [digitosFoneVetor[7]] + [digitosFoneVetor[8]] + [digitosFoneVetor[9]] + [digitosFoneVetor[10]];
  let numCompleto= '';

  if (digitosFoneVetor.length != 11) {
    return 'Array com tamanho incorreto.'; 
  } 
  for (let numero of digitosFoneVetor) {
    if (numero < 0 || numero > 9 || vezes >= 3 ) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    vezes = 0;
    for (let compare of digitosFoneVetor){
      if (compare === numero){
        vezes += 1;   
      }  
    }
  } 
  numCompleto = '(' + vetorDDD + ')' + ' ' + vetorNumParte1 + '-' + vetorNumParte2;
  return numCompleto;
}

console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));



// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let sumAB = lineA + lineB;
  let sumAC = lineA + lineC;
  let sumBC = lineB + lineC;
  let difAB = Math.abs(lineA - lineB);
  let difAC = Math.abs(lineA - lineC);
  let difBC = Math.abs(lineB - lineC);
  if (sumAB > lineC && lineC < difAB) {
    return false
  } else if(sumAC > lineB && lineB < difAC) {
    return false
  } else if(sumBC > lineA && lineA < difBC){
    return false
  } else {
    return true
  }
}
triangleCheck(10, 14, 8);


// Desafio 13
function hydrate(string) {
  let agua = string.match(/\d+/g);
  let cont = 0;
  for (let i = 0; i < agua.length; i += 1) {
    cont = cont + parseInt(agua[i]);
  }
  if (cont === 1) {
    return cont + ' copo de água'
  }
  if (cont > 1) {
    return cont + ' copos de água'
  }

}
hydrate('1 cachaça, 5 cervejas e 1 copo de vinho');


module.exports = {
  generatenumTelephone,
  techList,
  hydrate,
  triangleCheck,
};
