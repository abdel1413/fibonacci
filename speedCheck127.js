function speedCheck(speedMph, speedLimitKph) {
  // 1 => 1.60934k
  //30 => ?  
  //30 * 1.609
  // compare the result to speedLimit
  // if it is less then we return No Speeding
  // if is less or equal to  speedLimit + 5 then return warnig
  // if it greather than speeLimit + 5 then ticket
const speed = speedMph *  1.60934;
console.log(speed)
if(speed < speedLimitKph){
  return "Not Speeding"
}else if( speed > speedLimitKph && speed <= speedLimitKph +5){
     return "Warning"
}else{
  return "Ticket"
}
  
}


// Example usage:   
console.log(speedCheck(30, 50)) // Not Speeding
console.log(speedCheck(40, 60)) // Warning
console.log(speedCheck(50, 70)) // Ticket   

 speedCheck(30, 70)