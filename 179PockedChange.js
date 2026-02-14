function countChange(change) {
    let amount = change.reduce((sum, next)=> sum + next,0)
  
    let dollors = Math.floor(amount/100); 
    console.log(dollors)
    let cents = amount%100;
    console.log(cents)
   
  return `$${dollors}.${cents.toString().padStart(2,0)}`;
}

countChange([100, 25, 100, 1000, 5, 500, 2000, 25])
 countChange([25, 10, 5, 1])