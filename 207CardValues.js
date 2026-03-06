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