function resolutionStreak(days) {
// loop thru days
//at each index check: 
//create a tracker to track each subarray
// chech if the first item is more the 10,000 
// check also if second item is 120 
// check if read 5pages.
// return successuf day 
let result = ''
let tracker =0

 for(let i = 0; i< days.length ;i++){

   if(days[i][0] >= 10000 && days[i][1] <= 120 && days[i][2] >= 5){
     tracker +=1
   }else{
   
     console.log(`Resolution failed on day ${i+1}: ${tracker} day streak.`)
     return  `Resolution failed on day ${i+1}: ${tracker} day streak.`
   }
 }
 console.log('r',result)
 console.log(`Resolution on track: ${tracker} day streak.`)
return `Resolution on track: ${tracker} day streak.`
}


resolutionStreak([[10500, 75, 15], [11000, 90, 10], [10650, 100, 9]])  //   should return "Resolution on track: 3 day streak."

resolutionStreak([[10000, 120, 5], [10950, 121, 11]]) //   should return "Resolution failed on day 2: 1 day streak."

resolutionStreak([[9500, 110, 7], [12000, 100, 5]]) //   should return "Resolution failed on day 1: 0 day streak."

resolutionStreak([[15000, 80, 20], [13000, 90, 15], [14000, 110, 10], [16000, 100, 12]]) //   should return "Resolution on track: 4 day streak."