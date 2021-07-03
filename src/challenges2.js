// Desafio 10
function techList(lista, name) {
  let result = [];
	for (let index = 0; index < lista.length; index += 1) {
		let objeto = {
			tech: "",
			name: name,
		}
		objeto.tech = lista[index];
		result.push(objeto);
	}

	result.sort(function(a,b){  //Através do sort o resultado vai obedecer o padrão de ordenação estabelecido dentro da função.
		if(a.tech < b.tech){      // O método sorte faz uma verificação entre os elementos como se fosse um for e faz a comparação
			return false;                     
		}else{
			return true;
		}
	}); 

	if (result.length > 0) {
	return result;
	} else {
		return'Vazio!';
	}         
	
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

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
