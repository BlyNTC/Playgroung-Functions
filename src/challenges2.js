// Desafio 10
function techList(lista, name) {
	let array = [];
	let objeto = {};
	let listaDeTecnologias = lista.sort();
	if(listaDeTecnologias.length === 0){
	return "Vazio!";
}
for(let i = 0; i < listaDeTecnologias.length; i += 1){
	objeto = {};
	objeto.tech = listaDeTecnologias[i];  
	objeto.name = name;
	array.push(objeto);
}
return array;
}


// Desafio 11
function generatePhoneNumber(numeroDeTelefone) {
	let resultado = "(" + numeroDeTelefone[0] + numeroDeTelefone[1] + ") " + numeroDeTelefone[2] + numeroDeTelefone[3] + numeroDeTelefone[4] + numeroDeTelefone[5] + numeroDeTelefone[6] + "-" + numeroDeTelefone[7] + numeroDeTelefone[8] + numeroDeTelefone[9] + numeroDeTelefone[10];
	if(numeroDeTelefone.length !== 11){
	return "Array com tamanho incorreto."
}
	for(let i = 0; i < numeroDeTelefone.length; i += 1){
	let resultado2 = 0;
		if(numeroDeTelefone[i] < 0 || numeroDeTelefone[i] > 9){
			return "não é possível gerar um número de telefone com esses valores"
		}
	for(let i2 = 1; i2 < numeroDeTelefone.length; i2 += 1){
		if(numeroDeTelefone[i] === numeroDeTelefone[i2]){
		resultado2 += 1;
		}
		if(resultado2 >= 3){
			return "não é possível gerar um número de telefone com esses valores"
		}
		}
	}
	return resultado;   
	}


// Desafio 12
function triangleCheck(lineA, lineB, lineC) { 
	if (lineA + lineB < lineC || lineB + lineC < lineA || lineA + lineC < lineB){
		return false;
	 }
	else
	return true;
	}

// Desafio 13
function hydrate() {
	let numero = parseInt.Match(/\d+/g);
	let soma = 0;
	let proposto = "";
	for(let i = 0; index < numero.length; i += 1){ 
		soma +=  numero[i];
		
}
	proposto += soma + " copos de água"
	return proposto; 	
}
	parseInt = "1 cerveja, 2 cachaças"; 
let numero = String.match(/\d+/g);

	

module.exports = {
	generatePhoneNumber,
	techList,
	hydrate,
	triangleCheck,
};
