function getMovieNightCost(day, showtime, numberOfTickets) {
  let [time, period] = [showtime.slice(0, -2), showtime.slice(-2)];
  let [hour, minute] = time.split(":").map(Number);

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


getMovieNightCost("Saturday", "10:00pm", 1)
 getMovieNightCost("Sunday", "10:00am", 1)
//  getMovieNightCost("Tuesday", "7:20pm", 2)
//  getMovieNightCost("Wednesday", "5:40pm", 3)