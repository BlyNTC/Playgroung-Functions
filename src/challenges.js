// Desafio 1
function compareTrue(x, y) {
  if (x && y === true) {
  return true;
  } else {
  return false;
  }
}

// Desafio 2
  function calcArea(base, height) {
    let area = 0;
    area = (base * height) / 2;
    return area; 
}

// Desafio 3
function splitSentence(string) {
  //Método split
  //https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split
  return(string.split(' '));
}

// Desafio 4
function concatName(nomes) {
  return(nomes[nomes.length-1] + ', ' + nomes[0]);
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3 + ties);
}

// Desafio 6
function highestCount(values) {
  let count = 0;
  for (let i of values) {
    if (i == Math.max(...values)) {
      count++;
    }
  }
  return (count);
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  //Referência ao operador condicional ternário 
  //https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
  if (Math.abs(mouse - cat1) === Math.abs(mouse - cat2)) {
    return ("os gatos trombam e o rato foge");
  } else {
    return Math.abs(mouse - cat1) < Math.abs(mouse - cat2) ? 'cat1' : 'cat2';
  }
}

// Desafio 8
function fizzBuzz(arrayDeNumeros) {
  let arrayTexto = [];
  for (let index of arrayDeNumeros) {
    if (index % 3 === 0 && index % 5 == 0){
      arrayTexto.push("fizzBuzz");
    } else if (index % 3 == 0){
      arrayTexto.push("fizz");
    } else if (index % 5 == 0) {
      arrayTexto.push("buzz");
    } else {
      arrayTexto.push("bug!");
    }
  } return (arrayTexto);
}

// Desafio 9
function encode(string) {
  let encodedString = '';
  for (let index of string) {
  switch (index) {
    case 'a':
      encodedString += 1;
      break;
  
    case 'e':
      encodedString += 2;
      break;
    
    case 'i':
      encodedString += 3;
      break;

    case 'o':
      encodedString += 4;
      break;
    
    case 'u':
      encodedString += 5;
      break;
    
    default:
      encodedString += index;
      break;
    }
  } return (encodedString);
}
function decode(strings) {
  let decodedString = '';
  for (let index of strings) {
  switch (index) {
    case '1':
      decodedString += 'a';
      break;
  
    case '2':
      decodedString += 'e';
      break;
    
    case '3':
      decodedString += 'i';
      break;

    case '4':
      decodedString += 'o';
      break;
    
    case '5':
      decodedString += 'u';
      break;
    
    default:
      decodedString += index;
      break;
    }
  } return (decodedString);
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
