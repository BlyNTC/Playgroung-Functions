// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true) {
    return true;
  } else {
    return false;
  } 
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height)/2;
  return area;
}

// Desafio 3
//Fonte do split: https://www.devmedia.com.br/javascript-split-dividindo-separando-strings/39254
function splitSentence(frase) {
  return frase.split(" ");
}

// Desafio 4
function concatName(nome) {
  n = nome.length;
  return nome[n - 1]+','+' '+nome[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = 0;
  pontos = (wins*3) + (ties*1);
  return pontos;
}

// Desafio 6
/*Recebi ajuda do Luan Peres, que me mostrou a lógica que usou. Ele usou o "array.forEach". Poŕem, eu não faço a mínima ideia de como usar isso. Tentei adaptar a mesma lógica usando o for of.*/
let contador = 0;
function highestCount(numeros) {
  let maior = 0;
  let contador = 0;
  for(numero of numeros) {
      if (numero === numeros[0]) { // Inicia a variável maior guardando o primeiro número do array "numeros".
        maior = numero;
      }
      if (numero > maior){ 
        maior = numero; /*Bloco que, no 1º loop, faz a variável "maior" guardar o 1º numero e que inicializa a variavel "contador" guardando o valor"1". Nos seguintes loops, faz a mesma variável guardar o maior valor do array.*/
        contador = 1;
      } else
      if (numero === maior) {
        contador = contador +1; /*Bloco que garante a contagem da quantidade de vezes que o maior valor dentro do array "numeros" se repete.*/
      }
  }
  return contador;
}

// Desafio 7
//Fonte do Math.abs: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math
function catAndMouse(mouse, cat1, cat2) {
  let d1 = Math.abs(mouse - cat1);
  let d2 = Math.abs(mouse - cat2);
  if (d1 < d2) {
    return "cat1";
  } else 
  if (d2 < d1) {
    return "cat2";
  } else
  if (d1 === d2) {
    return "os gatos trombam e o rato foge";
  }
}

// Desafio 8
function fizzBuzz(numeros) {
  let palavras = []; //Cria um array para receber as palavras conforme a divisibilidade do número
  for (numero of numeros) { //Comando que faz o código analisar elemento por elemento do array recebido
    if ((numero % 3 === 0) && (numero % 5 === 0)){
      palavras.push('fizzBuzz');
    } else 
    if (numero % 5 === 0) {
      palavras.push('buzz');
    } else
    if (numero % 3 === 0) {
      palavras.push('fizz');
    } else {
      palavras.push('bug!');
    }
        
  }
  return palavras;
  }  

// Desafio 9
/* Recebi ajuda da Anna Hamann, que me mandou o link https://www.w3schools.com/jsref/jsref_replace.asp
- Eu Estava com dificuldade de usar o replace. No código que eu tinha feito, com "if" minha variável nao guardava todas as modificações, apenas a última. 
- Tentei utilizar o switch case, com a sugestão do Thiago Oshiro, mas tive dificuldades em várias estruturas do tipo "for" e "if"
- Com o uso do str.replace(/caracter-a-ser-mudado/g, 'caracter-que-quero-inserir') consigo armazenar todas as mudanças feitas em uma mesma variável.*/
function encode(sentenca) {
  sentenca = sentenca.replace (/a/g, '1'); 
  sentenca = sentenca.replace (/e/g, '2');
  sentenca = sentenca.replace (/i/g, '3');
  sentenca = sentenca.replace (/o/g, '4');
  sentenca = sentenca.replace (/u/g, '5');
  return sentenca;
}

function decode(sentenca) {
  sentenca = sentenca.replace (/1/g, 'a');
  sentenca = sentenca.replace (/2/g, 'e');
  sentenca = sentenca.replace (/3/g, 'i');
  sentenca = sentenca.replace (/4/g, 'o');
  sentenca = sentenca.replace (/5/g, 'u');
  return sentenca;
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
