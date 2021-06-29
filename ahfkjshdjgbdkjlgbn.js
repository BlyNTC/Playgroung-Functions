
// Desafio 9
function encode(frase) {
    return frase.replace(/a/ig,'1').replace(/e/ig,'2').replace(/i/ig,'3').replace(/o/ig,'4').replace(/u/ig,'5')
}
/*
function decode() {

}
*/
frase = "hi there!";
console.log(encode(frase));