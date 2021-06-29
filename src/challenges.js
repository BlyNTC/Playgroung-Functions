// Desafio 1
function compareTrue(n1,n2) {
  if(n1===false && n2===true){
    return false
  }else if(n1===true && n2===false){
    return false
  }else if(n1===false && n2===false){
    return false
  }else if(n1===true && n2===true){
    return true
  }
}


// Desafio 2
function calcArea(base,height) {
  let area=((base*height)/2)
  return area
}


// Desafio 3
function splitSentence(string) {
  let texto=string.split(" ")
  return texto
}



// Desafio 4
function concatName(array) {
  for(let i=0;i<array.length;i+=1)
    var primeiro=array[0]
    var ultimo=array[array.length-1]
  return ultimo+','+ ' ' + primeiro  
}


// Desafio 5
function footballPoints(wins,ties) {
  let resultado=((wins*3)+(ties*1))
  return resultado
}


// Desafio 6
function highestCount(arrayNumeros) {
  let maiorNumero=0
  let contador=0
  for(let i=0;i<arrayNumeros.length;i+=1){
    if(arrayNumeros[i]>maiorNumero){
      maiorNumero=arrayNumeros[i]
    }
  }
  for(let j=0;j<arrayNumeros.length;j+=1){
    if (maiorNumero===arrayNumeros[j]){
        contador+=1
      }
    }
  return contador
}


// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
  if((Math.abs(cat1-mouse))<(Math.abs(cat2-mouse))){
    return('cat1')
  }else if((Math.abs(cat2-mouse))<(Math.abs(cat1-mouse))){
    return('cat2')
  }else if((Math.abs(cat1-mouse))===(Math.abs(cat2-mouse))){
    return('os gatos trombam e o rato foge')
  }
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
