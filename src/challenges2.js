// Desafio 10
function techList(lista,name) {
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


// Desafio 11
function generatePhoneNumber(array) {
  let cont=0
  let numeroTelefone=''
  let numeroTelefone2=''
  let ddd=''
  if (array.length === 11){ 
    for(let i=0;i<array.length;i+=1){
      for(let j=0;j<array.length;j+=1){
        if (array[i]===array[j]){
          cont+=1
        }
      }
        if (cont>=3){
          return('não é possível gerar um número de telefone com esses valores')
        }
        cont=0
      
      if (array[i]<0 || array[i]>9){
        return "não é possível gerar um número de telefone com esses valores"
      }
      
    }
    

  }else{
    return ('Array com tamanho incorreto.')
  }
  


  for(let m=0;m<array.length-9;m+=1){
    ddd+=array[m]
  }
  for(let k=2;k<array.length-4;k+=1){
    numeroTelefone+=array[k]
  }
  for(let l=7;l<array.length;l+=1){
    numeroTelefone2+=array[l]
  }
  return('('+ddd+')'+' '+numeroTelefone+'-'+numeroTelefone2)
}  



// Desafio 12
function triangleCheck(line1,line2,line3) {
  //let dif=Math.abs(line3-line2-line1)
  if ((line1<(line2-line3)) || (line2<(line1-line3)) || (line3<(line1-line2))){
    return false  
  }else if((line1+line2)<line3 && (line1+line3)<line2 && (line2+line3)<line1){
    return false
  }else{
    return true
  }
   
  
  
    
  
  }
  

  


console.log(triangleCheck(10,14,8))



// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
