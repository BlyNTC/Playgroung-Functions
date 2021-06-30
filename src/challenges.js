// Desafio 1 - Começando agora
function compareTrue(num1, num2) {
  if (num1 === true && num2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, altura) {
  return (base * altura) / 2;  
}

// Desafio 3
function splitSentence(string) {
  let array = string.split(' ');
  return array;  
}

// Desafio 4
function concatName(nomes) {
  return nomes[nomes.length-1] + ', ' + nomes[0];
} 

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(numeros) {
  let repeticao = 0;
  let maiorNumero;
  for (let index in numeros) {
    if(index == 0) {
      maiorNumero = numeros[index]
    } else if (maiorNumero < numeros[index]) {
      maiorNumero = numeros[index]
    }
  }
  for (let index of numeros) {
    if (maiorNumero === index){
      repeticao += 1;

    }
  }
  return repeticao;
}


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaGato1 = Math.abs(cat1 - mouse);
  let distanciaGato2 = Math.abs(cat2 - mouse);
  if (distanciaGato1 < distanciaGato2) {
    return "cat1";
  } else if (distanciaGato2 < distanciaGato1) {
    return "cat2"; 
  } else {
    return "os gatos trombam e o rato foge"
  }

}

// Desafio 8
function fizzBuzz(array) {
  let string = [];
  for (let index of array) {
    if (index % 3 === 0 && index % 5 !== 0) {
      string.push("fizz");
    } else if (index % 5 === 0 && index % 3 !== 0) {
      string.push("buzz");
    } else if (index % 3 === 0 && index % 5 === 0) {
      string.push("fizzBuzz");
    } else {
      string.push("bug!");
    }
  } 
   return string;
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
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
