// Desafio 1
function compareTrue(parametro1, parametro2){
  if(parametro1 && parametro2 === true){
    return true}
    else{
      return false}
    }
 
 
 // Desafio 2
 function calcArea(base, altura) {
  return base*altura/2
 }
 
 // Desafio 3
 function splitSentence(fraseSeparar) {
  var fraseSeparada = fraseSeparar.split(" ")
  return fraseSeparada
 }

 
 // Desafio 4
 function concatName(array) {
   var primeiroNome = array[0];
   var segundoNome = array[array.length-1];
 
  return segundoNome + ', ' + primeiroNome
 }
 console.log(concatName(['batata', 'maca', 'cenoura']))
 // Desafio 5
 function footballPoints(wins, ties) {
   return 3*wins + ties
 }
 
 
 // Desafio 6
 function highestCount(arrayNumeros) {
  let max= Math.max(...arrayNumeros);
var count = arrayNumeros.reduce(function(counter, value) {
    return counter + (value === max);
}, 0);
return count
}
 // Desafio 7
 function catAndMouse(mouse, cat1, cat2) {
  let posicaoGato1 = Math.abs(mouse - cat1);
  let posicaoGato2 = Math.abs(mouse - cat2);
  if (posicaoGato1 < posicaoGato2) {
    return "cat1";
} else if (posicaoGato2 < posicaoGato1) {
    return "cat2";
} else {
    return "os gatos trombam e o rato foge";
}
 }

 
 // Desafio 8
 function fizzBuzz() {
   // seu código aqui
 }
 
 // Desafio 9
 function encode(tiraVogais) {
  
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