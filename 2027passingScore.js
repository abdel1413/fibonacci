function passingCount(scores, passingScore) {
   let tracker = 0;
   for(let i = 0; i< scores.length; i++){
     if(scores[i] >= passingScore) tracker++
   }
   console.log(tracker)
  return tracker;
}

//2nd solution
function passingCount(scores, passingScore) {
    return scores.filter(s => s >=passingScore).length
}