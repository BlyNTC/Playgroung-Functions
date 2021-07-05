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
function generatenumTelephone(numeroArray) {
  let repeteCont = numeroArray.filter((e, i, a) => a.indexOf(e) !== i);
  repeteCont.sort(function (a, b) { return a - b; });
  let contagem = 0;
  let checagem = 0;
  for (let i = 0; i < repeteCont.length; i += 1) {
    if (repeteCont[i] === repeteCont[i + 1] || repeteCont[i] === 
    repeteCont[i + 2]) {
    contagem = 3;
    }
  }
  for (let i in numeroArray) {
    if (numeroArray[i] > 9 || numeroArray[i] < 0) {
      checagem += 1;
    }
  }
  if (numeroArray.length !== 11) {
    return 'Array com tamanho incorreto.';
  } else if (contagem >= 3 || checagem !== 0) {
    return 'não é possível gerar um número de telefone com esses valores';
}
  numeroArray.splice(0, 0, '(');
  numeroArray.splice(3, 0, ')');
  numeroArray.splice(4, 0, ' ');
  numeroArray.splice(10, 0, '-');
  return numeroArray.join('');
}

generatenumTelephone([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]);



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
