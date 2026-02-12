function groundhogDayPrediction(appearance) {
   let result; 
  if(appearance === true){
    result = "Looks like we'll have six more weeks of winter."
  }else if(appearance === false){
    result = "It's going to be an early spring."
  }else {
    result = "No prediction this year."
  }
  return result;
}


groundhogDayPrediction(true) // should return "Looks like we'll have six more weeks of winter."
groundhogDayPrediction(false) // should return "It's going to be an early spring."
groundhogDayPrediction(null) // should return "No prediction this year."