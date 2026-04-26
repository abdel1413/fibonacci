function getNextBingoNumber(n) {
    // get letter and number from input
  let letter = n[0]

  let num = Number(n.slice(1))
    num++; 
   
    // reset number to 1 if it goes above 75
    if(num >=75) num = 1;
    console.log(num)
    // determine letter based on number
   if(num <=15) letter ="B"
   else if(num <=30) letter ="I"
   else if(num <=45)letter = "N"
   else if(num <= 60 )letter = "G"
   else letter = "O"
   console.log(letter, num)
   return letter + num
}


//2nd version
const getNextBingoNumber = n => {
  let l = n[0], num = +n.slice(1) + 1;
  if (num > 75) num = 1;
  if (num <= 15) l = "B";
  else if (num <= 30) l = "I";
  else if (num <= 45) l = "N";
  else if (num <= 60) l = "G";
  else l = "O";
  return l + num;
}
//3rd version
const getNextBingoNumber = n => {
  let num = (+n.slice(1) % 75) + 1;
  return (
    num <= 15 ? "B" :
    num <= 30 ? "I" :
    num <= 45 ? "N" :
    num <= 60 ? "G" : "O"
  ) + num;
};
getNextBingoNumber("B10")
getNextBingoNumber("O75")
getNextBingoNumber("I30")