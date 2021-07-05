function catAndMouse(mouse, cat1, cat2) {
  
  // Transforma distâncias negativas em positivas:
  function makePositive(realNumbers) {
    let naturalNumbers = [realNumbers]
    let posNumber = [];
    for (let number of naturalNumbers) {
      if (number < 0) {
        number = number * -1;
        posNumber.push(number);
      }
      else if (number >= 0) {
        posNumber.push(number);
      }
    } 
    console.log(posNumber);
  }


  let firstCat = makePositive(cat1 - mouse);
  let secondCat = makePositive(cat2 - mouse); 

  if (firstCat < secondCat)  {
    return "cat1";
  } 
  else if (firstCat > secondCat) {
    return "cat2";
  }
  else if (firstCat == secondCat) {
    return "os gatos trombam e o rato foge";
  }
}

catAndMouse(1,0,2)
