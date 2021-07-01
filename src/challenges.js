// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true) {
    return true;
  }else{
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height)/2;
  // seu código aqui
}

// Desafio 3
function splitSentence(string) {
  let array = string.split(' ');
  return array;
}
//console.log(splitSentence('vamos que vamos'));

// Desafio 4
function concatName(array) {
  let ultimoItem = array[array.length-1];
  let primeiroItem = array [0];
  
  return ultimoItem + ', ' + primeiroItem;
  
  // seu código aqui
}
//console.log(concatName(['lucas', 'cassio', 'jose']));

// Desafio 5
function footballPoints(wins, ties) {
  let pontos;
  
  pontos= wins*3 +ties*1;
  return pontos;
}
//console.log(footballPoints(1, 2))

// Desafio 6
function highestCount(array) {
  // seu código aqui

  let repete= 0;
  let maiorNumero = array[0];

  for(let numero = 0; numero < array.length; numero +=1){
    if(maiorNumero < array[numero]){
      maiorNumero = array[numero];
    }
  }
  for(let numero = 0; numero < array.length; numero +=1){
    if(maiorNumero === array[numero]){
      repete += 1;
    }  
  }  
  return repete;
}
///console.log(highestCount([0,0,0]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distancia1;
  let distancia2;
  distancia1 = Math.abs(mouse - cat1);
  distancia2 = Math.abs(mouse - cat2);
  if (distancia2 > distancia1){
    return "cat1";
  }else if (distancia2 < distancia1){
    return "cat2";
  }
  return "os gatos trombam e o rato foge";
}
//console.log(catAndMouse(0, 3, 2));

// Desafio 8
function fizzBuzz(array) {
  let string = [];
  for(let n = 0; n < array.length; n += 1){
    if (array[n] % 3 === 0 && array[n] %5 === 0){
      string.push("fizzBuzz");
    }else if (array[n] %3 === 0){
      string.push("fizz");
    }else if (array[n] %5 === 0){
      string.push("buzz");
    }else{
      string.push("bug!");
    } 
  }
  return string;
}
//console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
function encode(string) {
let stringCodificada =''; 

  for (let cont =0; cont < string.length; cont += 1){
    if (string[cont] === 'a'){
      stringCodificada = stringCodificada + '1';  
    }else if (string[cont] === 'e'){
      stringCodificada = stringCodificada + '2';
    }else if (string[cont] === 'i'){
      stringCodificada = stringCodificada + '3';
    }else if (string[cont] === 'o'){
      stringCodificada = stringCodificada + '4';
    }else if (string[cont]=== 'u'){
      stringCodificada = stringCodificada +'5';
    }else {
      stringCodificada = stringCodificada + string[cont];
    }  
  }
  return stringCodificada;
}
//console.log(encode('h iii there!')); 

// seu código aqui

function decode(stringNumeros) {

let stringCodNumeros =''; 

  for (let cont =0; cont < stringNumeros.length; cont += 1){
    if (stringNumeros[cont] === '1'){
      stringCodNumeros = stringCodNumeros + 'a';  
    }else if (stringNumeros[cont] === '2'){
      stringCodNumeros = stringCodNumeros + 'e';
    }else if (stringNumeros[cont] === '3'){
      stringCodNumeros = stringCodNumeros + 'i';
    }else if (stringNumeros[cont] === '4'){
      stringCodNumeros = stringCodNumeros + 'o';
    }else if (stringNumeros[cont]=== '5'){
      stringCodNumeros = stringCodNumeros +'u';
    }else {
      stringCodNumeros = stringCodNumeros + stringNumeros[cont];
    }  
  }
  return stringCodNumeros;
  // seu código aqui
}
//console.log(decode('h3 th2r2!'));

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
