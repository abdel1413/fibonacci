function getMovieNightCost(day, showtime, numberOfTickets) {
  let [time, period] = [showtime.slice(0, -2), showtime.slice(-2)];
  let [hour, minute] =  time.split(":").map(Number);

  // convert to 24-hour format
  if (period === "pm" && hour !== 12) hour += 12;
  if (period === "am" && hour === 12) hour = 0;

  let isMatinee = hour < 17; // before 5pm

  let price;

  if (day === "Tuesday") {
    price = 5;
  } else if (["Friday", "Saturday", "Sunday"].includes(day)) {
    price = 12;
    if (isMatinee) price -= 2;
  } else {
    price = 10;
    if (isMatinee) price -= 2;
  }

  let total = price * numberOfTickets;

  return `$${total.toFixed(2)}`;
}


// 2nd solution 
function getMovieNightCost(day, showtime, numberOfTickets) {

//get hours 
let hours = +showtime.split(":")[0]
console.log(hours)  

//check if it is pm
const isPm = showtime.includes("pm")
console.log(isPm)

// add 12 to hours if it is pm and hours 
//is not 12 otherwise add nothing
if(isPm && hours !==12) hours +=12;
if(!isPm && hours ===12) hours +=0;

//check for the promotion
let matinee = hours <17 //  5+12 => 5pm
console.log(hours)
 let price = day === "Tuesday"
 ?5
 :["Friday", "Saturday", "Sunday"].includes(day)
      ? 12 - (matinee? 2: 0)
      : 10 - (matinee? 2: 0)  

       console.log("$"+(price * numberOfTickets).toFixed(2))    
  return `$${(price * numberOfTickets).toFixed(2)}`;
}

//getMovieNightCost("Saturday", "10:00pm", 1)
 // getMovieNightCost("Tuesday", "7:20pm", 2)
 getMovieNightCost("Friday", "4:30pm", 5)

getMovieNightCost("Saturday", "10:00pm", 1)
 getMovieNightCost("Sunday", "10:00am", 1)
//  getMovieNightCost("Tuesday", "7:20pm", 2)
//  getMovieNightCost("Wednesday", "5:40pm", 3)


function practice(day, showtime , tickets){
  let hours = +showtime.split(":")[0]
  let isPm= showtime.includes("pm");
  if(isPm && hours !==12)hours+=12;
  if(!isPm && hours ===12)hours +=0;

  let isMatinee =hours < 17;

  let price = day ==="Tuesday"
  ? 5
  :["Friday", "Saturday", "Sunday"].includes(day)
      ? 12 -(isMatinee? 2: 0)
      :10- (isMatinee? 2: 0)
      

  return `$${(price * tickets).toFixed(2)}`;
}