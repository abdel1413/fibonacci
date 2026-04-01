function getMovieNightCost(day, showtime, numberOfTickets) {

  // monday :10
  // tuesday :5
  // wednesday:10
  //thursday :10
  

  //friday =12
  //saturday =12
  //sunday =12

  //bf 5pm -2
  //convert time into sec
  
  let total ;

  let time = showtime.slice(0,-2).split(":").map(Number)
   console.log(time)
  let seconds=    time.reduce((acc, next )=>acc+(next*60),0)
  console.log(seconds)
  switch(day){
    case "Monday":
    case "Wednesday":
    case "Thursday":
     if(time < seconds ){
      total =   8 * numberOfTickets
     }else {
       total = 10 * numberOfTickets
     }
     break;
     case "Tuesday":
     total = 5* numberOfTickets;
     break;
     case "Friday":
     case "Saturday":
     case "Sunday":
     if(time < seconds){
       total = 10 * numberOfTickets
     }else {
       total = 12 * numberOfTickets 
     }
  }
 console.log(`$${total}:00`)
  return `$${total}:00`;
}

getMovieNightCost("Saturday", "10:00pm", 1)
 getMovieNightCost("Sunday", "10:00am", 1)
//  getMovieNightCost("Tuesday", "7:20pm", 2)
//  getMovieNightCost("Wednesday", "5:40pm", 3)