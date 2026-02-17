function largestDifference(skater1, skater2) {
    // maxDiff
    let maxDiff = -1;
    let lap = 0;
    for(let i= 0; i< skater1.length; i++){
   let diff = Math.abs(skater1[i] -skater2[i])
    if(diff > maxDiff){
      maxDiff = diff;
      lap = i+1;
    }
    }
    console.log(lap)
  return lap;
}

largestDifference([26.11, 25.80, 25.92, 26.23, 26.07], [25.93, 25.74, 26.53, 26.11, 26.30])