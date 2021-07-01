// Desafio 1
function compareTrue(a,b) { //a=false b=true
  if (a === true && b === true) { 
    return true;
  }
  return false;
  }

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height)/2
}
calcArea(10, 50)
calcArea(5,2)
calcArea(51,1)


// Desafio 3
function splitSentence(frase) {
  // seu código aqui
  
return frase.split(' ');
}
splitSentence('go Trybe')
splitSentence('vamo que vamo')
splitSentence('foguete')

// Desafio 4
function concatName(palavras) {
  // seu código aqui
  let ultimaPalavra = palavras[palavras.length - 1];
  let primeiraPalavra = palavras[0];
  
  return ultimaPalavra + ', ' + primeiraPalavra;
}
concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'])
concatName(['foguete', 'não', 'tem', 'ré'])
concatName(['captain', 'my', 'captain'])

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let valor1 = 3;
  let valor2 = 1;
  let resultadoWins = valor1 * wins;
  let resultadoTies = valor2 * ties;
  let resultadoFinal = resultadoWins + resultadoTies;
    
    return resultadoFinal;
}
footballPoints(14,8)
footballPoints(1,2)
footballPoints(0,0)

// Desafio 6
function highestCount(numeros) {
  // seu código aqui
  let numeroMaior = 0;
  let repeticaoNumeroMaior = 0;
  for (let indice = 0; indice < numeros.length; indice += 1) {
    if (numeros[indice] > numeroMaior) { //numeros[1] > 0
      numeroMaior = numeros[indice];
      repeticaoNumeroMaior = 0;
    }
    if (numeros[indice] === numeroMaior){
      repeticaoNumeroMaior = repeticaoNumeroMaior + 1;
    }
  }

return repeticaoNumeroMaior;
}
highestCount([9, 1, 2, 3, 9, 5, 7])
highestCount([0, 4, 4, 4, 9, 2, 1])
highestCount([0, 0, 0])

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  if (cat2 < cat1){
  
    return 'cat2';
  } 
  if (cat1 < cat2){
  
    return 'cat1';
  } 
  if (cat1 == cat2) {
    
    return 'os gatos trombam e o rato foge';
  }
}
catAndMouse(0, 3, 2)
catAndMouse(0, 6 , 12)
catAndMouse(0, 0, 0)

// Desafio 8
function fizzBuzz(arrays) {
  // seu código aqui
  let fizzBuzz= []
  for (let i = 0; i < arrays.length; i += 1) {
    if (arrays[i] % 3 === 0 && arrays[i] % 5 == 0) {
      fizzBuzz.push('fizzBuzz');
    } else if (arrays[i] % 3 == 0){
      fizzBuzz.push('fizz'); 
    } else if (arrays[i] % 5 == 0) {
      fizzBuzz.push('buzz')
    } else {
      fizzBuzz.push('bug')
    }

    }
    
    return fizzBuzz;
}
fizzBuzz([2, 15, 7, 9, 45])
fizzBuzz([7, 9])
fizzBuzz([9, 25])



// Desafio 9
function encode(string) {
  // seu código aqui
  function encode(string) {
    let codigo = '';
    let vogais = ['a', 'e', 'i', 'o', 'u'];
  
    for (let i = 0; i < string.length; i += 1) {
      if (vogais.includes(string[i])) {
      codigo += (vogais.indexOf(string[i]) + 1);
      } else {
        codigo += string[i];
      }
    }
    
    return codigo;
  }
  console.log(encode('hi there'));
}
function decode() {
  // seu código aqui
  function decode(code) {
    let string = '';
    let lista = ['1', '2', '3', '4', '5'];
    let vogais = ['a', 'e', 'i', 'o', 'u'];
  
    for (let i = 0; i < code.length; i += 1) {
      if (lista.includes(code[i])) {
        string += vogais[lista.indexOf(code[i])];
      } else {
        string += code[i];
      }
    }
    return string;
  }
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
}

