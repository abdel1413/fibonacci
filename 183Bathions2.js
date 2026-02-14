function calculatePenaltyDistance(rounds) {


  return rounds.reduce((tot, hits)=>{
    let missed = 5- hits;
    return tot + missed *150
  },0);
}
