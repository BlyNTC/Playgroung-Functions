function techList(array,nome){  

  if (array.length === 0){
  return "Vazio!";
  } else {
  for (let i = 0; i < array.length; i += 1){
    if (array[i] === "React"){
      array[i] = {
        tech: "React",
        name: nome,
      }
    }else if (array[i] === "Jest"){
      array[i] = {
        tech: "Jest",
        name: nome,
      }
    }else if (array[i] === "HTML"){
      array[i] = {
        tech: "HTML",
        name: nome,
      }
    }else if (array[i] === "CSS"){
      array[i] = {
        tech: "CSS",
        name: nome,
      }
    }else if (array[i] === "JavaScript"){
      array[i] = {
        tech: "JavaScript",
        name: nome,
      }
    } 
    
  }
}
 
  array.sort(function(a,b) {
      if(a.tech < b.tech) return -1;
      if(a.tech > b.tech) return 1;
      return 0;
    });
    
  
  return array;
  
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
