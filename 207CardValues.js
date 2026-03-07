function cardValues(cards) {

  return cards.map(card =>{
    const value = card.slice(0,-1)
    console.log(value)
    if(value ==="A") return 1;
    if(["J","Q","K"].includes(value)) return 10

return Number(value)

  });
  
}
cardValues(["3H", "4D", "5S"])
cardValues(["AS", "KS"])

//using lookup object
function cardValues(cards) {
  const lookup = {
    "A": 1,
    "J": 10,
    "Q": 10,
    "K": 10
  }
  return cards.map(card =>{
    const value = card.slice(0,-1)
    console.log(value)
    return lookup[value] || Number(value)

  });
  
}
cardValues(["3H", "4D", "5S"])
cardValues(["AS", "KS"])
 //short version using object literal and implicit return

function cardValues(cards) {
  return  cards.map(card =>({"A": 1, "J": 10, "Q": 10, "K": 10}[card.slice(0,-1)] || +(card.slice(0,-1)))) 
}
