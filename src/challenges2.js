// Desafio 10
function techList(skill, name) {
  let skillSort = skill.sort();
  if (skill.length === 0) { return ('Vazio!'); }
  let listObjects = [{ tech: skillSort[0], name }, {
    tech: skillSort[1], name }, { tech: skillSort[2], name }, { tech: skillSort[3], name },
  { tech: skillSort[4], name },
  ];
  return listObjects;
}

techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas');

// Desafio 11
function generatePhoneNumber(telephoneArray) {

// let telephoneNumber = 2193458768;

// for ( i = 0; i < telephoneArray.length; i += 1)

// if ( telephoneNumber  )


}

generatePhoneNumber([ 1, 2, 3, 4, 5, 6 ,7, 8, 9, 0, 1 ]);

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {

  

  if ( lineA > lineB + lineC  || lineB > lineA + lineC || lineC > lineA + lineB ) {
  
    return false;
  
  }

  else if ( lineA < (lineB + lineC)  ===  true && lineA >  Math.abs( lineB - lineC) === true ) {

    return true;

  } else if ( lineB < (lineC + lineA)  ===  true && lineB >  Math.abs( lineA - lineC) === true ) { 

    return true; 

  } else if  ( lineC < (lineB + lineA)  ===  true && lineC >  Math.abs( lineB - lineC) === true ) { 

    return true; 

   }  else {

    return false;
  }

}

triangleCheck( 30, 23, 10);

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
