function getLandingStance(startStance, rotation) {
  let turnsOf180 = Math.floor(Math.abs(rotation)/180)
  let shouldItFlip = turnsOf180 %2 ===1
   if(!shouldItFlip) return startStance

  return startStance ==="Regular"? "Goofy": "Regular";
}
