function computeScore(judgeScores, ...penalties) {
 
    const sorted = judgeScores.sort((a,b)=> a-b)
    console.log(sorted)
     
  let baseScore =  judgeScores.slice(1,-1).reduce((acc,next)=> acc+next,0);
  const p =penalties.reduce((a,n)=> a+n,0)
  
  return baseScore -  p
}

computeScore([10, 8, 9, 6, 9, 8, 8, 9, 7, 7], 1)
computeScore([10, 8, 9, 10, 9, 8, 8, 9, 10, 7], 1, 2, 1)