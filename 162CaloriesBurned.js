function compareEnergy(caloriesBurned, wattHoursUsed) {

  let cal = caloriesBurned * 4184
  let wat = wattHoursUsed *3600 

  if(cal > wat){
    return "Workout"
  }else if(cal === wat){
    return  "Equal"
  }else{
    return "Devices"
  }


  
}

