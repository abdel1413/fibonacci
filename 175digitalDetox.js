function digitalDetox(logs) {

  if(!logs.length) return false

  let times = logs
  .map(log => new Date(log.replace(" ","T")).getTime()).sort((a,b)=> a-b)


   let fourHours = 4* 60*60*1000;
   for(let i =1; i<times.length;i++){
     if(times[i] - times[i-1]<= fourHours){
       return false;
     }

   }
   let perDay = {};
   for(let log of logs){
     console.log(log)
     let day = log.split(" ")[0]
     
     perDay[day] =(perDay[day]||0)+1

   console.log(perDay)
   if(perDay[day] >2){
     return false
   }
   }
  return true;
}



digitalDetox(["2026-02-01 08:00:00", "2026-02-01 12:30:00"]) 