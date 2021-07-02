// Desafio 1
function compareTrue(a, b) {
if(a === true && b === true){
  return true;
}else{
  return false;
}


}

// Desafio 2
function calcArea(base, height) {

let area = (base * height) / 2;
return area;
}




// Desafio 3
function splitSentence(frase) {
let resultado = frase.split(" ");
return resultado;
}



// Desafio 4
function concatName(array) {
let ultimoValor = array[array.length -1];
let soma = ultimoValor;
let primeiroValor = array[0];
soma = soma + ', ' + primeiroValor;
return soma;

}



// Desafio 5
function footballPoints(wins,ties) {
let vitoria = 3;
let empate = 1;
let pontuacao = wins * vitoria + empate * ties;
return pontuacao;

}


// Desafio 6
function highestCount(array) {
let resultado = 0;  
let max = Math.max(...array);
for(let index = 0;index < array.length; index += 1){
      if(array[index] === max){
      resultado = resultado + 1;
      }  
      
  }
  return resultado; 
}



// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
let morteDoGatoCat1 = mouse - cat1;
let morteDeVerdadeCat1 = Math.abs(morteDoGatoCat1);
let morteDoGatoCat2 = mouse - cat2;
let morteDeVerdadeCat2 = Math.abs(morteDoGatoCat2);
  if(morteDeVerdadeCat1 === morteDeVerdadeCat2){
    return "os gatos trombam e o rato foge";
  }else if (morteDeVerdadeCat1 < morteDeVerdadeCat2){
    return 'cat1';
  }else{ 
    return 'cat2';
  }
}


// Desafio 8
function fizzBuzz(array) {
let strings = [];
for(let index = 0; index < array.length; index += 1){
  if(array[index] % 3 !== 0 && array[index] % 5 !== 0) {
    strings.push("bug!");
}else if(array[index] % 3 === 0 && array[index] % 5 !== 0) {
    strings.push('fizz');
}else if(array[index] % 3 !== 0 && array[index] % 5 === 0){
    strings.push('buzz');
}else if(array[index] % 3 === 0 && array[index] % 5 === 0){
    strings.push('fizzBuzz');
}

}
return strings;
}



// Desafio 9
function encode(string) {
let decodificacaoA = string.replace(/a/g, 1); 
let decodificacaoE = decodificacaoA.replace(/e/g, 2);
let decodificacaoI = decodificacaoE.replace(/i/g, 3);
let decodificacaoO = decodificacaoI.replace(/o/g, 4);
let decodificacaoU = decodificacaoO.replace(/u/g, 5);
 
return decodificacaoU;

} 

function decode(s){

let codificadorA = s.replace(/1/g, 'a');
let codificadorE = codificadorA.replace(/2/g, 'e');
let codificadorI = codificadorE.replace(/3/g, 'i');
let codificadorO = codificadorI.replace(/4/g, 'o');
let codificadorU = codificadorO.replace(/5/g, 'u');

return codificadorU;
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

let frase = "hiiiii";
let novaFrase = frase.replace(/i/g, 1);
console.log(novaFrase); 