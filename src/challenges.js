// Desafio 1
function compareTrue(param1, parem2) {
  return param1 && parem2;
}

// Desafio 2
function calcArea(base, heigt) {
  return base * heigt / 2;
}

// Desafio 3
function splitSentence(nome) {
  return nome.split(" ");
}

// Desafio 4
function concatName(par) {
  return `${par[par.length -1]}, ${par[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return  (wins * 3) + ties;
}

// Desafio 6
function highestCount(a) {

  let vezesQueSeRepete = 0;
  let guardaValor = a[0];

  for ( let i = 0; i < a.length; i += 1 ){
    if ( a[i] >= guardaValor){
      guardaValor = a[i]
    }
  }
  for (let i = 0; i < a.length; i += 1){
    if (a[i] >= guardaValor){
       vezesQueSeRepete += 1;
     }
  }
  return vezesQueSeRepete;
}
// Desafio 7
//Fonte metodo math.abs https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
function catAndMouse(mouse, cat1, cat2) { 

  let absolutCat1 = Math.abs(cat1 - mouse);
  let absolutCat2 = Math.abs(cat2 - mouse);

  if (absolutCat1 === absolutCat2){
    return 'os gatos trombam e o rato foge';
  }else if (absolutCat2 < absolutCat1){
    return "cat2";
  }else{
    return "cat1";
  }
}

// Desafio 8
function fizzBuzz(arr) {
// seu código aqui
 let fizzBuzz = [];

 for ( x of arr){

   if ( x % 5 === 0 && x % 3 === 0 ){
    fizzBuzz.push("fizzBuzz");
   }else if ( x % 5 === 0 ){
    fizzBuzz.push("buzz");
   }else if ( x % 3 === 0 ){
    fizzBuzz.push("fizz");
   }else{
    fizzBuzz.push("bug!");
   }
}
return fizzBuzz;
}

// Desafio 9
function encode(entradaDeString) {
  // seu código aqui

  let vogais = ["a", "e", "i", "o", "u"];
  let codifica;

  for (i = 0; i < entradaDeString.length; i += 1){
    for (let indice = 0; indice < vogais.length; indice += 1){
      if (entradaDeString[i] === vogais[indice]){
         switch (entradaDeString[i]){
           case "a":
             codifica = entradaDeString.replace(/a/gi, "1");
             entradaDeString = codifica;
             break
            case "e":
              codifica = entradaDeString.replace(/e/gi, "2");
              entradaDeString = codifica;
              break
            case "i":
              codifica = entradaDeString.replace(/i/gi, "3");
              entradaDeString = codifica;
              break
            case "o":
              codifica = entradaDeString.replace (/o/gi, "4");
              entradaDeString = codifica;
              break
            case "u":
              codifica = entradaDeString.replace(/u/gi, "5");

         }
      }
    }
  }

  
return codifica;
}

function decode(stringDescodifica) {

  let vogais = ["1", "2", "3", "4", "5"];
  let descodifica;

  for (i = 0; i < stringDescodifica.length; i += 1){
    for (let indice = 0; indice < vogais.length; indice += 1){
      if (stringDescodifica[i] === vogais[indice]){
         switch (stringDescodifica[i]){
           case "1":
             descodifica = stringDescodifica.replace(/1/gi, "a");
             stringDescodifica = descodifica;
             break
            case "2":
              descodifica = stringDescodifica.replace(/2/gi, "e");
              stringDescodifica = descodifica;
              break
            case "3":
              descodifica = stringDescodifica.replace(/3/gi, "i");
              stringDescodifica = descodifica;
              break
            case "4":
              descodifica = stringDescodifica.replace(/4/gi, "o");
              stringDescodifica = descodifica;
              break
            case "5":
              descodifica = stringDescodifica.replace(/5/gi, "u");

         }
      }
    }
  }

  
return descodifica;
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
