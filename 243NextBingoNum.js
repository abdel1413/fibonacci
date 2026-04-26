function getNextBingoNumber(n) {
  let letter = n[0]

  let num = Number(n.slice(1))
    num++; 
   
    if(num >=75) num = 1;
    console.log(num)
   if(num <=15) letter ="B"
   else if(num <=30) letter ="I"
   else if(num <=45)letter = "N"
   else if(num <= 60 )letter = "G"
   else letter = "O"
   console.log(letter, num)
   return letter + num
}

getNextBingoNumber("B10")
getNextBingoNumber("O75")
getNextBingoNumber("I30")