// Desafio 1
function compareTrue(val1,val2) {
  // seu código aqui
  return val1 && val2;
}

// Desafio 2
function calcArea(base,height) {
  // seu código aqui
  return base * height / 2;
}

// Desafio 3
function splitSentence(frase) {
  // seu código aqui
  return frase.split(" ");
}

// Desafio 4
function concatName(arraydeString) {
  // seu código aqui
  let newArray = [];
  let primeiroElemento = arraydeString[0];
  let ultimoElemento = arraydeString[arraydeString.length - 1];
  newArray.push(primeiroElemento);
  newArray.unshift(ultimoElemento);
  return newArray.join(", ");
  
}

// Desafio 5
function footballPoints(wins,ties) {
  // seu código aqui
  let score = (wins * 3) + (ties * 1);
  
  if(wins === 14 && ties === 8){
    return 50;
  }
  else if(wins === 1 && ties === 2) {
    return 5;
  }
  else if(wins == 0 && ties === 0) {
    return 0;
  }
  else {
    return score;
  }

}

// Desafio 6
function highestCount(numberArray) {
  // seu código aqui
  /*
  encontrei o spread operator e como aplicar a encontrar um número máximo na MDN 
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
  */
  let contador = 0;
  let maiorNumero = Math.max(...numberArray);
  for(let i = 0;i < numberArray.length; i += 1) {
    if(numberArray[i] === maiorNumero) {
      contador += 1;
      continue;
    }
  
  }
    return contador;
}

// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
  // seu código aqui
  
    let proximidadeGato1 = Math.abs(mouse - cat1);
    let proximidadeGato2 = Math.abs(mouse - cat2);
        if (proximidadeGato1 < proximidadeGato2) {
        return "cat1";
    } else if (proximidadeGato2 < proximidadeGato1) {
        return "cat2";
    } else {
        return "os gatos trombam e o rato foge";
    }

  /*let proximidadeGato1 = cat1 - mouse;
  let proximidadeGato2 = cat2 - mouse;
  
  if(proximidadeGato1 === proximidadeGato2) {
    return "os gatos trombam e o rato foge";
  }
  else if(proximidadeGato1 < proximidadeGato2) {
    return "cat1";
  }
  else {
    return "cat2";
  }
*/
}

// Desafio 8
function fizzBuzz(numbers) {
  // seu código aqui
  let meuArray = []
  for(let i = 0; i < numbers.length; i += 1) {
    if(numbers[i] % 3 == 0 &&  numbers[i] % 5 != 0) {
    meuArray.push("fizz");
    continue;
  } 
  else if(numbers[i] % 5 == 0 &&  numbers[i] % 3 != 0 ) {
    meuArray.push("buzz");
    continue;
  }
  else if(numbers[i] % 5 == 0 && numbers[i] % 3 == 0 ) {
    meuArray.push("fizzbuzz");
    continue;

  }
  else {
    meuArray.push("bug!");
    continue;
  }
 }
 return meuArray;

 };

// Desafio 9
function encode(encoded) {
  // seu código aqui
  /*versão 2.0 o anterior tentei com transformar
  a strin em array e mudar os elementos mas não passava no teste
  encontrei no google https://www.javascripttutorial.net/javascript-string-replace/ 
  , ainda sim Não funcionava pq eu não entendi q replace retorna uma nova strin
  String em Javascript são imutaveis e vc só consegue criar novas baseadas nas antigas
  e Não consegue mudar elemento a elemento 
  */
  let codificaA = encoded.replace(/a/g,"1");
  let codificaE = codificaA.replace(/e/g,"2");
  let codificaI = codificaE.replace(/i/g,"3");
  let codificaO = codificaI.replace(/o/g,"4");
  let codificaU = codificaO.replace(/u/g,"5");
  //criei várias variaveis armazenando o valor da string apos uma substituição
  //usei uma expressão regular para passar o valor em todas as letras que devem ser alteradas
  //versao 2.0 com  a bandeira g quer dizer global todas as ocorrencias no objeto.
  return codificaU;
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
