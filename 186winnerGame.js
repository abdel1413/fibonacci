function getRelativeResults(results) {

  //function that convert results into secondes
   const toSecond = (t)=>{
     let [h, m, s] = t.split(":").map(Number)
     return h*3600 + m*60+ s
   }
   // function to convert to +MM:SS
   const toGap  = (sec)=>{
     const m = Math.floor(sec/60)
     const s = sec % 60;
     return `+${m}:${s.toString().padStart(2,"0")}`
   }
   let first = toSecond(results[0])
   
  return results.map((time, index)=>{
    if(index === 0) return "0";
    const diff = toSecond(time) - first
    console.log(diff)
    return toGap(diff)
  });

}


  
console.log(getRelativeResults(["1:25:32", "1:26:10", "1:27:05"]))
