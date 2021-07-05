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
function generatenumTelephone(telefone) {
  let numTelephone = '(';
  if  (telefone.length !== 11) {
    return "Array com tamanho incorreto.";
  } else {
    for (let i = 0; i < telefone.length; i += 1) {
      let contador = 0;
      if (telefone[i] < 0 || telefone[i] > 9) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
      for (let j = 0; j < 11; j += 1) {
        if (telefone[j] === telefone[j]) {
          contador += 1;
          if (contador === 3) {
            return 'não é possível gerar um número de telefone com esses valores';
          }
        }
      }
      if (i < 2) {
        numTelephone = numTelephone + telefone[i]; 
        if (i === 1) {
          numTelephone = numTelephone + ') ';
        } 
      }
      if (i <= 6 && i > 1) {
        numTelephone = numTelephone + telefone[i];
        if(i === 6) {
          numTelephone = numTelephone + '-';
        }
      }
      if (i > 6) {
        numTelephone = numTelephone + telefone[i];
    }
  }
  return numTelephone;
  }
}
console.log(generatenumTelephone([1, 2, 0]));



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
