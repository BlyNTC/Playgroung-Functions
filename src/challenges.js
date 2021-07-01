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
 function splitSentence() {
   // seu código aqui
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
 function highestCount() {
 
 }
 
 // Desafio 7
 function catAndMouse() {
   // seu código aqui
 }
 
 // Desafio 8
 function fizzBuzz() {
   // seu código aqui
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