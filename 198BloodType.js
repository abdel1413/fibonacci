function canDonate(donor, recipient) {
  console.log(donor, recipient)
  let dLetter = donor.slice(0,-1)
  console.log(dLetter)
  let dRh = donor.slice(-1)
  console.log(dRh)
  let recLetter = recipient.slice(0,-1)
  let recRh = recipient.slice(-1)
   const letters ={
     A: ["A","AB"],
     B:["B","AB"],
     O:["A","AB","B","AB","O"],
     "AB":["AB"]

   }
   console.log(letters[dLetter])
   let matchLetter = letters[dLetter].includes(recLetter)
   let matchRh = dRh ==='-'|| recRh ==='+'
  return  matchLetter && matchRh;
}
canDonate("O-", "AB-")