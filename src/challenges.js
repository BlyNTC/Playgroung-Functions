// Desafio 1
function compareTrue(boo1, boo2) {
  let resultado;
  if(boo1 === true && boo2 === true){
    resultado = true
} else if(boo1 === true && boo2 === false){
    resultado = false
} else {
    resultado = false
}
    return resultado
}

// Desafio 2
function calcArea(base, height) {
  let resultado = base * height / 2;
  return resultado;
}

// Desafio 3
function splitSentence(string) {
  let divisor = ' ';
  let divideArray = string.split(divisor);

  return divideArray;
}

// Desafio 4
function concatName(arraystring) {
  let resultado;
  string0 = arraystring[0];
  string1 = arraystring[arraystring.length - 1]
  resultado = string1 + ', ' + string0

  return resultado
}

// Desafio 5
function footballPoints(win, ties) {  
  let resultado = 0;
  winpoints = 3;
  tiespoints = 1;
  win = win * winpoints
  ties = ties * tiespoints
  resultado = win + ties
  return resultado
}
  console.log(footballPoints(14, 8))

    // Aprendido novo jeito de fazer
    // let point = win * 3
    // let points = point + ties;
    // return points;

// Desafio 6
function highestCount(numeros) {
  let maiorValor = -Infinity;

  for(let numero of numeros){
    if(maiorValor < numero){
      maiorValor = numero;
    }
  }

  let arrayTodos = []
  let maiorNum = maiorValor
  let idx = numeros.indexOf(maiorNum)
  while (idx != -1) {
    arrayTodos.push(idx)
    idx = numeros.indexOf(maiorNum, idx + 1)
  }

  return arrayTodos.length
}

// Desafio 7
function catAndMouse(cat1, cat2, mouse) {
  let retorno;
  cato1 = cat1  - mouse;
  cato2 = cat2 - mouse;
  cato1 = Math.abs(cato1);
  cato2 = Math.abs(cato2);
  Math.abs(cato2)
  if (cato1 < cato2 && cato1 != cato2){
    retorno = 'cat1'
  } else if (cato2 < cato1 && cato2 != cato1) {
    retorno = 'cat2'
  } else {
    retorno = "os gatos trombam e o rato foge"
  }

  return retorno
}
// REFERENCIA AO FILIPE ANDRADE - TURMA 14 - TRIBO A


// Desafio 8
function fizzBuzz(retornoString) {
  let resultado = []

  for(let i = 0; i < retornoString.length; i++){
    if(retornoString[i] % 3 === 0 && retornoString[i] % 5 === 0){
      retornoString[i] = 'fizzBuzz'
    } else if(retornoString[i] % 5 === 0){
      retornoString[i] = 'buzz'
    } else if(retornoString[i] % 3 === 0){
      retornoString[i] = 'fizz'
    } else {
      retornoString[i] = 'bug!'
    }

  }
  return retornoString;

}
console.log(fizzBuzz([2, 15, 7, 9, 45]))

// Desafio 9
function encode(criptografar) {

  let resultado = '';
 for (let value of criptografar){
   switch (value) {
     case "a": 
     resultado += '1'
     break
     case "e":
    resultado += '2';
     break
     case "i":
       resultado += '3'
      break
      case "o":
        resultado += '4'
      break
      case "u":
        resultado += '5'
      break
     default:
    resultado += value;
   }
 }
 return resultado;
  
}
console.log(encode("hia there a"))

function decode(descriptografar) {
  let resultado = '';
  for (let value of descriptografar){
    switch (value) {
      case "1": 
      resultado += 'a'
      break
      case "2":
     resultado += 'e';
      break
      case "3":
        resultado += 'i'
       break
       case "4":
         resultado += 'o'
       break
       case "5":
         resultado += 'u'
       break
      default:
     resultado += value;
    }
  }
  return resultado;
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
