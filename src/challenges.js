// Desafio 1
function compareTrue(param1, param2) {
  return param1 && param2;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}
//console.log(calcArea(5,2));

// Desafio 3
function splitSentence(funcao) {
  let resultado = funcao.split(' ');
  return resultado;
}

// Desafio 4
function concatName(nomes) {
  let first = nomes[0];
  let last = nomes[nomes.length - 1];
  return (last + ', ' + first);
}

// Desafio 5
function footballPoints(wins, ties) {
  let vitoria = 0;
  let empate = 0;
  let pontos = 0;

  if (wins > 0) {
    vitoria += wins * 3;
    //console.log(wins * 3);
    }
    if (ties > 0) {
    empate += ties * 1;
    //console.log(ties * 1);
    }
    pontos += vitoria + empate;
    return(pontos);
} //footballPoints(1, 2);

// // Desafio 6
// function highestCount(numbers) {
//   let numbers = [];
//   let cont = 0;
//   let maior = Math.max.apply(null, numbers);
//     for (var i = 0; i < numbers.length; i++) {
//       if (maior == numbers[i]) {
//         cont++;
//       }   
//     }
//     return (cont);  
//} //console.log(highestCount([20, 15, 45, 84]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (cat1 > cat2) {
    return ('cat2');
  } else if (cat2 > cat1) {
    return ('cat1');
  } else if(mouse > (cat1 === cat2)) {
    return ('os gatos trombam e o rato foge');
  }
} //console.log(catAndMouse(0, 1, 1));

// // Desafio 8
function fizzBuzz() {
  let numbers = [];
  let divisivel;
  let tipo;
  let tiposString = [];
  for (var i = 0; i < numbers.length; i++) {
    divisivel = numbers[i];
    if (divisivel % 3 === 0 && divisivel % 5 === 0) {
      tipo = "fizzBuzz";
    } else if (divisivel % 3 === 0) {
      tipo = "fizz";
    } else if (divisivel % 5 === 0) {
      tipo = "buzz";
    } else {
      tipo = "bugg!";
    }
  }
  return tiposString;
}

// // Desafio 9
// function encode() {
//   // seu código aqui
// }
// function decode() {
//   // seu código aqui
// }

module.exports = {
  calcArea,
  // catAndMouse,
  compareTrue,
  concatName,
  // decode,
  // encode,
  // fizzBuzz
  footballPoints,
  // highestCount,
  splitSentence,
};
