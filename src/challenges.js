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
  let maiorNumero=-100
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
function fizzBuzz(arrayDeNumeros) {
  let retorno=[]
  for(let i=0;i<arrayDeNumeros.length;i+=1){
    if((arrayDeNumeros[i]%3===0)&&(arrayDeNumeros[i]%5===0)){
      arrayDeNumeros[i]='fizzBuzz'
      retorno.push(arrayDeNumeros[i])
    }else if(arrayDeNumeros[i]%3===0){
      arrayDeNumeros[i]='fizz'
      retorno.push(arrayDeNumeros[i])
    }else if(arrayDeNumeros[i]%5===0){
      arrayDeNumeros[i]='buzz'
      retorno.push(arrayDeNumeros[i])
    }else{
      arrayDeNumeros[i]='bug!'
      retorno.push(arrayDeNumeros[i])
    }
  }
  return(retorno)
}

// Desafio 9
function encode(string) {
  for(let i=0;i<string.length;i+=1){
    if(string[i]==='a'){
      string=string.replace('a','1')
    }else if(string[i]==='e'){
      string=string.replace('e','2')
    }else if(string[i]==='i'){
      string=string.replace('i','3')
    }else if(string[i]==='o'){
      string=string.replace('o','4')
    }else if(string[i]==='u'){
      string=string.replace('u','5')
    }

  }
  return(string)
}


function decode(codigo) {
  for(let i=0;i<codigo.length;i+=1){
    if(codigo[i]==='1'){
      codigo=codigo.replace('1','a')
    }else if(codigo[i]==='2'){
      codigo=codigo.replace('2','e')
    }else if(codigo[i]==='3'){
      codigo=codigo.replace('3','i')
    }else if(codigo[i]==='4'){
      codigo=codigo.replace('4','o')
    }else if(codigo[i]==='5'){
      codigo=codigo.replace('5','u')
    }
  }
  return(codigo) 
}

function tecnologia(lista,name){
  let listaFinal=[];
  let arraySort=lista.sort();
  let cont=0
  for(let i=0;i<lista.length;i+=1){
    let obj= {
      tech:arraySort[i],
      name:name,
    }
    listaFinal.push(obj)
    cont+=1
  }
  if(cont==0){
    return 'Vazio!'
  }else{
    return(listaFinal)
  }
}
console.log(tecnologia(['React','Jest','HTML','CSS','JavaScript'],'Lucas'))


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
