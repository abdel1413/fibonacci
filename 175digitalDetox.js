function digitalDetox(logs) {

   //1 check if the logs is empty
   //2 convert grab date and convert into time in seconds
   //3 calculate the hours
   //4 loop thru hours and check if the difference from
   // the first and second log is less than the total hours
   // 5 check if the same logs occurred more than 2 in a day
   
   if(!logs.length) return true;
    let times = logs
    .map(log => new Date(log.replace(" ", "T")).getTime())
    .sort((a,b)=> a-b)

    console.log(times)

     const fourHourPeriod = 4*60*60*1000;
    
     for(let i = 1; i< times.length;i++){
       if(times[i] - times[i-1]<= fourHourPeriod){
         return false;
       }
     }

     let logPerDay = {};
     for(let log of logs){
     
       let day = log.split(" ")[0]
       console.log(day)
       logPerDay[day] = (logPerDay[day]||0)+1;
       
       if(logPerDay[day] >2){
         return false
       }
     }
     console.log(logPerDay)
     return true;

}

digitalDetox(["2026-02-05 10:00:00", "2026-02-01 09:00:00", "2026-02-03 22:15:00", "2026-02-02 12:10:00", "2026-02-02 07:15:00", "2026-02-04 09:45:00", "2026-02-01 16:50:00", "2026-02-03 09:30:00"])