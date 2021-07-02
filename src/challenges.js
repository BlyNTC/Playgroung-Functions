// Desafio 1
function compareTrue(a, b) {
  // seu código aqui
  if (a === true && b === true) {
    return true
  } else { return false }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return base * height / 2;
}

// Desafio 3
function splitSentence(frase) {
  // seu código aqui
  return frase.split(" ");
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  let ultimo = array.length - 1;
  return array[ultimo] + ", " + array[0];
}

// Desafio 5
function footballPoints(wins,ties) {
  // seu código aqui
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(vezes) {
  // seu código aqui
  let maior = Math.max.apply(null,vezes);
  let numeroDeVezes = 0;
  for(let index = 0;index < vezes.length;index += 1){
    if(vezes[index] === maior){
      numeroDeVezes += 1
    }
  }
  return numeroDeVezes;
}

// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
  // seu código aqui
  if(mouse - cat1 == mouse - cat2 || cat1 - mouse == cat2 - mouse || mouse - cat1 == cat2 - mouse || mouse - cat2 == cat1 - mouse){
    return "os gatos trombam e o rato foge"
  }else if(cat2 <= mouse && cat2 > cat1 || cat2 >= mouse && cat2 < cat1 || cat2 <= mouse && cat2 < cat1){
    return "cat2"
  }else if(cat1 <= mouse && cat1 > cat2 || cat1 >= mouse && cat1 < cat2 || cat1 <= mouse && cat1 < cat2){
    return "cat1"
  }
}

// Desafio 8
function fizzBuzz(arrayDivisiveis) {
  // seu código aqui
  let armazenador = [];
  for(let index = 0;index < arrayDivisiveis.length;index += 1){
    if(arrayDivisiveis[index]%3 === 0 && arrayDivisiveis[index]%5 !== 0){
       armazenador.push("fizz")
    }else if(arrayDivisiveis[index]%5 === 0 && arrayDivisiveis[index]%3 !== 0){
      armazenador.push("buzz")
    }else if(arrayDivisiveis[index]%3 === 0 && arrayDivisiveis[index]%5 === 0){
      armazenador.push("fizzBuzz")
    }else{armazenador.push ("bug!")}
  }
  return armazenador;
}

// Desafio 9
function encode(fraseCodificada) {
  // seu código aqui
  let fraseCod = "";
  for(let index = 0;index < fraseCodificada.length;index += 1)
  if(fraseCodificada[index] === "a"){
    fraseCod += "1"
  }else if(fraseCodificada[index] === "e"){
    fraseCod += "2"
  }else if(fraseCodificada[index] === "i"){
    fraseCod += "3"
  }else if(fraseCodificada[index] === "o"){
    fraseCod += "4"
  }else if(fraseCodificada[index] === "u"){
    fraseCod += "5"
  }else{fraseCod += fraseCodificada[index]}
  return fraseCod
}
function decode(fraseDecodificada) {
  // seu código aqui
  let fraseDecod = "";
  for(let index = 0;index < fraseDecodificada.length;index += 1)
  if(fraseDecodificada[index] === "1"){
    fraseDecod += "a"
  }else if(fraseDecodificada[index] === "2"){
    fraseDecod += "e"
  }else if(fraseDecodificada[index] === "3"){
    fraseDecod += "i"
  }else if(fraseDecodificada[index] === "4"){
    fraseDecod += "o"
  }else if(fraseDecodificada[index] === "5"){
    fraseDecod += "u"
  }else{fraseDecod += fraseDecodificada[index]}
  return fraseDecod
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
