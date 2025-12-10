function daysUntilWeekend(dateString) {
// let [year,month,days ] = dateString.split('-')
// const weekDay = ["Monday", "Tuesday","Wednesday","Thursday", "Friday","Saturday", "Sunday"]
// let remainder = days % weekDay.length; 
//  console.log(remainder)
// console.log(days)
let date = new Date(dateString+ "T00:00:00Z")
 console.log(date)
 let day = date.getUTCDay()
 console.log(day) 
 if(day==0 || day === 6){
   return "It's the weekend!"
 }

 const dayLeft = 6-day;
 return  dayLeft ==1
   ? `${dayLeft} day until the weekend.`
   : `${dayLeft} days until the weekend.`


 

  

}
daysUntilWeekend("2025-11-14") // should return "It's the weekend!"
daysUntilWeekend("2023-10-05") // should return "2 days until the weekend."
daysUntilWeekend("2022-12-23") // should return "1 day until the weekend."