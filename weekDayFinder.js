const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
function weekdayFinder(dateString) {
  const date = new Date(dateString);
  const dayIndex = date.getDay();
  return daysOfWeek[dayIndex];
}


//using local date string to find the day of the week
function weekdayFinder(dateString) {
    const [year, month, day] = dateString.split('-')
 //using local date string to find the day of the week
    const date = new Date(year, month - 1, day);
    return daysOfWeek[date.getDay()];


}

// Example usage:
console.log(weekdayFinder("2023-10-05")); // Output: Thursday
console.log(weekdayFinder("2022-12-25")); // Output: Sunday