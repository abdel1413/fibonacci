function isLeapYear(year) {
  if((year %400 === 0) ||(year %100 !==0 && year%4 ===0)) {
  return true;
  }else{

  return false;
  }
    

 
}

isLeapYear(2024) // should return true
isLeapYear(1900) // should return false
