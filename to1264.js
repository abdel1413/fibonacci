function convertTime(time24) {
  let hours = parseInt(time24.slice(0, 2), 10);
  const minutes = time24.slice(2);
  let period = "AM";

  if (hours >= 12) {
    period = "PM";
  }

  if (hours === 0) {
    hours = 12;
  } else if (hours > 12) {
    hours -= 12;
  }

  return `${hours}:${minutes} ${period}`;
}
// Example usage:
console.log(convertTime("0000"));           
// should return "12:00 AM"
console.log(convertTime("1200"));           
// should return "12:00 PM"
console.log(convertTime("1530"));           
// should return "3:30 PM"
console.log(convertTime("2359"));