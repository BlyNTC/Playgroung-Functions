// Desafio 10
function techList(array, name) {
  // seu código aqui
  let sortedArray = array.sort();
  let techObject = [];
  if (array.length === 0) {
    return "Vazio!";
  }
  for (let i = 0; i < sortedArray.length; i += 1) {
    techObject.push({
    'tech': sortedArray[i],
    'name': name
    })
  }
  return techObject;
}

// Desafio 11
function generatePhoneNumber(array) {
  // seu código aqui
  let checkingForRep = 0;    
	let arrSaida = [];
	let arrString = "";
  if (array.length === 0) {
    return "Array com tamanho incorreto.";
  }
	for (let i = 0; i < array.length; i += 1){
		if (array[i] > 9 || array[i] < 0) {
			return "não é possível gerar um número de telefone com esses valores";
		} else if (array.length != 11 || array.length === 0) {
			return "Array com tamanho incorreto.";
		}
		for (let k = 0; k < array.length; k += 1){
			if (array[i] === array[k]) {
				checkingForRep += 1;
			}
			if (checkingForRep >= 3) {
				return "não é possível gerar um número de telefone com esses valores";
			}
		}	
		if (checkingForRep < 3) {
			checkingForRep = 0;
		}
}
if(checkingForRep < 3) {
	arrSaida[0] = "(";
	arrSaida[1] = array[0];
	arrSaida[2] = array[1];
	arrSaida[3] = ")";
	arrSaida[4] = " ";
	arrSaida[5] = array[2];
	arrSaida[6] = array[3];
	arrSaida[7] = array[4];
	arrSaida[8] = array[5];
	arrSaida[9] = array[6];
	arrSaida[10] = "-";
	arrSaida[11] = array[7];
	arrSaida[12] = array[8];
	arrSaida[13] = array[9];
	arrSaida[14] = array[10];
	arrJoined = arrSaida.join('');
	arrStringed = arrJoined.toString();
	return arrStringed; 
}
}

console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]))
















// Desafio 12
function triangleCheck() {
  // seu código aqui
}

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
