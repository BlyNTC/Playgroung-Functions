//commit inicial

// Desafio 1
function compareTrue(valor1, valor2) {
  // seu código aqui
 
  if ( valor1 === true && valor2 === true ) {

    return true;

  } else { 

    return false;
    
  
  }

}


// Desafio 2
function calcArea(base, height) {
 triangulo = (base * height) / 2

 return triangulo
}

calcArea(10, 50);
calcArea(5, 2);
calcArea(51, 1);


// Desafio 3
function splitSentence(frase) {

  fraseDividida = frase.split(" ")

  return fraseDividida

  // seu código aqui
}

splitSentence('Go Trybe')

// Desafio 4
function concatName(nomes) {
  // seu código aqui
  for (let key in nomes) {

    if ( nomes[0] === nomes[2])
    {
        return (nomes[0] + ', ' + nomes[2]);
    } else {

    return (nomes[3] + ', ' + nomes[0]);
    }
  }

}

concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'])

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  wins = wins * 3;
  ties = ties * 1;
  let resultado = wins + ties 

  return resultado;

}

footballPoints(1, 2)

// Desafio 6
function highestCount(valores) {

  let maiorValor = valores[0];
  let numeroRepeticoes = 0;

  for ( indexMaiorValor = 0; indexMaiorValor < valores.length; indexMaiorValor += 1 ) {

    if ( valores[indexMaiorValor] > maiorValor ) { 

      maiorValor = valores[indexMaiorValor];

    } 

  }

  for ( indexRepeticao = 0; indexRepeticao < valores.length; indexRepeticao += 1 ) {

    if ( maiorValor === valores[indexRepeticao]) { 

      numeroRepeticoes += 1

    }

  }

  return numeroRepeticoes;
  // seu código aqui
}

highestCount([11, 9, 11, 11, 9, 11, 7]);

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  cat1AndMouseDistance = Math.abs(cat1 - mouse);
  cat2AndMouseDistance = Math.abs(cat2 - mouse);



  if (cat1AndMouseDistance === cat2AndMouseDistance) {

return "os gatos trombam e o rato foge";

} else if ( cat2AndMouseDistance < cat1AndMouseDistance ) {
  
  return "cat2"


} else if (cat1AndMouseDistance < cat2AndMouseDistance) {

    return "cat1"
}

}

catAndMouse(10, 8, 8)

// Desafio 8
function fizzBuzz(valores) {

  let resultado = [];

  for ( let index = 0; index < valores.length; index += 1 ) {


    if ( valores[index] % 3 === 0 && valores[index] % 5 === 0) {
    
      resultado.push("fizzBuzz")

    } else if ( valores[index] % 5 === 0 ) {

      resultado.push("buzz")
    } else if ( valores[index] % 3 === 0 ) {

      resultado.push("fizz")

    } else {
      resultado.push("bug!")

    }


  }
  return resultado;
  

  // seu código aqui
}

fizzBuzz([2, 15, 7, 9, 45]);

// Desafio 9
function encode(valor) {
  
let arrayValor = Array.from(valor);

for ( let index = 0; index < arrayValor.length; index += 1) {

  if ( arrayValor[index] === 'a' ) {

    arrayValor[index] = '1'

  } else if ( arrayValor[index] === 'e') {

    arrayValor[index] = '2'

  } else if ( arrayValor[index] === 'i') {

    arrayValor[index] = '3'

  } else if ( arrayValor[index] === 'o') {

    arrayValor[index] = '4'

  } else if ( arrayValor[index] === 'u') {

    arrayValor[index] = '5'

  } else { 

  arrayValor;
   
  }

}

let stringValor = arrayValor.join('');

return stringValor;

}

encode("hi there!")

function decode(valorDecode) {
  // seu código aqui

  let arrayValor = Array.from(valorDecode);
 
  for ( let index = 0; index < arrayValor.length; index += 1) {
  
    if ( arrayValor[index] === '1' ) {
  
      arrayValor[index] = 'a'
  
    } else if ( arrayValor[index] === '2') {
  
      arrayValor[index] = 'e'
  
    } else if ( arrayValor[index] === '3') {
  
      arrayValor[index] = 'i'
  
    } else if ( arrayValor[index] === '4') {
  
      arrayValor[index] = 'o'
  
    } else if ( arrayValor[index] === '5') {
  
      arrayValor[index] = 'u'
  
    } else { 
  
    arrayValor;
     
    }
  
  }
  
  let stringValor = arrayValor.join('');
  
  return stringValor;
  
}
decode("h3 th2r2!")

function techList(skill, name) {

    
  let skillSort = skill.sort();
  let techObject1 = {};
  let techObject2 = {};
  let techObject3 = {};
  let techObject4 = {};
  let techObject5 = {};
  let techObjectArray = [];


 if( skill.length < 5 ) {

  skill.push('Vazio!');
  
 } 

  for ( let i = 0; i < 5; i += 1) {

   techObject1 = {
      tech: skillSort[0],
      name: name
    }
    techObject2 = {
      tech: skillSort[1],
      name: name
    }
    techObject3 = {
      tech: skillSort[2],
      name: name
    }
    techObject4 = {
      tech: skillSort[3],
      name: name
    }
    techObject5 = {
      tech: skillSort[4],
      name: name
    }
} 

  techObjectArray = [techObject1, techObject2, techObject3, techObject4, techObject5];

  return techObjectArray;
 
}

techList(["React", "Jest", "HTML", "CSS"], "Pedro")

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
