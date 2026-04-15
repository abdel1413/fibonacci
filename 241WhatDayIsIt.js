function getDayOfWeek(timestamp) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  const date = new Date(timestamp);
  return days[date.getUTCDay()];
}


//2nd version
const getDayOfWeek = t => {
  const d = new Date(t);
  return ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][d.getUTCDay()];
}   

//3rd version 
 const getDayOfWeek = t =>
  ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
  [new Date(t).getUTCDay()];