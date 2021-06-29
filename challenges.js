// Ex1

function compareTrue (numA,numB){
    if (numA > 5 && numB > 7){
      return true;
    }
    else {
      return false;
    }
}
console.log(compareTrue(6,8))

// Ex2

function calcArea (base,height){
  return (base*height)/2;
}
console.log(calcArea(10,50));

// Ex3

function splitSentence (stringSplit){
  return stringSplit.split(' ');
}
console.log(splitSentence('Vamo que vamo'))

// Ex4

function concatName (arrayNomes) {
  return arrayNomes[arrayNomes.length-1]+', '+arrayNomes[0]
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo','Juca']))

// Ex5

function footballPoints (wins,ties) {
  return (wins*3)+ties
}
console.log(footballPoints(14,8))

// Ex6

function highestCount (arrayMaior){
  let quantos = 0;
  let somanum = -1;
  for (i=0 ; i<arrayMaior.length; i++){
    if(arrayMaior[i] > somanum){
      somanum = arrayMaior[i]
    }
  }
  for (i2=0 ; i2<arrayMaior.length; i2++){
    if(somanum == arrayMaior[i2]){
      quantos++
    }
  }
  return quantos
}
console.log(highestCount([0, 4, 4, 4, 9, 2, 1]))

// Ex7

function catAndMouse (cat1,cat2,mouse){
  if(Math.abs(cat1-mouse) < Math.abs(cat2-mouse)) {
  return cat1
  }
  else if(Math.abs(cat2-mouse) < Math.abs(cat1-mouse)) {
    return cat2
  }
  else if(Math.abs(cat2-mouse) == Math.abs(cat1-mouse)) {
    return "os gatos trombam e o rato foge"
  }
}
console.log(catAndMouse(2,8,5))

// Ex8


function fizzBuzz (arrayFizz){
  let arrayBuzz = [];
  for (i3 = 0;i3 < arrayFizz.length; i3++){
    if (arrayFizz[i3]%3 == 0 && arrayFizz[i3]%5 == 0){
      arrayBuzz.push('fizzBuzz');
    }
    else if (arrayFizz[i3]%5 == 0){
      arrayBuzz.push('Buzz');
    }
    else if (arrayFizz[i3]%3 == 0){
      arrayBuzz.push('fizz');
    }
    else{
      arrayBuzz.push('bug!')
    }
  }
  return arrayBuzz
}
console.log(fizzBuzz([2, 15, 7, 9, 45]))

// Ex9

function encode (stringEncode) {
  let encodeString = '';
  for (i4 = 0; i4 < stringEncode.length; i4++){
    if (stringEncode[i4] === 'a'){
    encodeString += 1;
    }
    else if (stringEncode[i4] === 'e'){
      encodeString += 2;
    }
    else if (stringEncode[i4] === 'i'){
      encodeString += 3;
    }
    else if (stringEncode[i4] === 'o'){
      encodeString += 4;
    }
    else if (stringEncode[i4] === 'u'){
      encodeString += 5;
    }
    else {
      encodeString += stringEncode[i4];
    }
  }
  return encodeString
}
console.log(encode('hi there!'))

function decode (stringEncode) {
  let decodeString = '';
  for (i5 = 0; i5 < stringEncode.length; i5++){
    if (stringEncode[i5] === '1'){
      decodeString += 'a';
    }
    else if (stringEncode[i5] === '2'){
      decodeString += 'e';
    }
    else if (stringEncode[i5] === '3'){
      decodeString += 'i';
    }
    else if (stringEncode[i5] === '4'){
      decodeString += 'o';
    }
    else if (stringEncode[i5] === '5'){
      decodeString += 'u';
    }
    else {
      decodeString += stringEncode[i5];
    }
  }
  return decodeString
}
console.log(decode('h3 th2r2!'))
// Ex10

