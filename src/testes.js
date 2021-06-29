function splitSentence(string) {
let outputArray = [];
let palavra;
let indexDoEspacoDeRetomada = 0;
for (let index = 0; index < string.length; index += 1){
  if (string[index] === ' ' ){
    for ( let index2 = indexDoEspacoDeRetomada; index2 <= index; index2 += 1){
        palavra = palavra + string[index2];
    } 
    outputArray.push(palavra);
    indexDoEspacoDeRetomada = index + 1
} else if (index == string.length-1 ){
    for (let index2 = indexDoEspacoDeRetomada; index2 <= string.length-1; index2 += 1){
        palavra = palavra + string[index2];
    }
    outputArray.push(palavra);
}
palavra = '';
}
return outputArray;
} 
