function getNumberOfPlants(fieldSize, unit, crop) {
  let result;
  let plantSpace ={
    corn: 1,
    wheat: 0.1,
    soybeans: 0.5,
    tomatoes: 0.25,
    lettuce: 0.2
  }
  if(unit ==="acres"){
    

   result =  fieldSize * 4046.86
   
    
  }else if(unit ==="hectares"){
  result =   fieldSize * 10000 
  }
  console.log(Math.floor(result))

  return Math.floor(result/plantSpace[crop]);
}


getNumberOfPlants(1, "acres", "corn")// should return 4046

getNumberOfPlants(2, "hectares", "lettuce") //  