function cast(spells) {
 const spellsCode ={
    f: { category: "destruction", score: 3 },
    l: { category: "destruction", score: 3 },
    i: { category: "control", score: 2 },
    w: { category: "control", score: 2 },
    h: { category: "restoration", score: 1 },
    s: { category: "restoration", score: 1 },
 }
let totalScore = 0; 
let multiplier = 1;
let previousCategory = null;

for(let code of spells){
  const currentSpell = spellsCode[code]
  console.log(currentSpell.category)
  if( currentSpell.category !== previousCategory && previousCategory !== null){

    multiplier +=1;
    
  }else{
    multiplier =1;
  }
 
 totalScore += currentSpell.score * multiplier;
 previousCategory = currentSpell.category;
}
  console.log('pre',previousCategory)
  console.log('tot', totalScore)
  return totalScore;
}

cast("fihwl")