function tooMuchScreenTime(week) {
    // for a day 10+ => too much;
    //for 3 consecutive days 8+ => too much;
    //for a week 6+ => too much;

   if(week.some(hours => hours >=10)) return true;

   for(let i=0; i<= week.length -3; i++){
    if(week[i] >=8 && week[i+1] >=8 && week[i+2] >=8) return true;
   }

   const total = week.reduce((sum, hours) => sum + hours, 0);
   const average = total / week.length;
   if(average >=6) return true;

   return false;
}

//2ned solution
function tooMuchScreenTime(week) {
  // Rule 1: any single day >= 10 hours
  if (week.some(hours => hours >= 10)) {
    return true;
  }

  // Rule 2: any 3 consecutive days average >= 8
  for (let i = 0; i <= week.length - 3; i++) {
    const avg3 =
      (week[i] + week[i + 1] + week[i + 2]) / 3;

    if (avg3 >= 8) {
      return true;
    }
  }

  // Rule 3: 7-day average >= 6
  const weeklyAvg =
    week.reduce((sum, hours) => sum + hours, 0) / 7;

  if (weeklyAvg >= 6) {
    return true;
  }

  return false;
}


// Example usage:
console.log(tooMuchScreenTime([2, 3, 4, 5, 6, 7, 8])); // should return false
console.log(tooMuchScreenTime([10, 2, 3, 4, 5, 6, 7])); // should return true
console.log(tooMuchScreenTime([2, 8, 9, 10, 3, 4, 5])); // should return true
console.log(tooMuchScreenTime([5, 6, 7, 8, 9, 10, 11])); // should return true
console.log(tooMuchScreenTime([1, 2, 3, 4, 5, 6, 7])); // should return false
console.log(tooMuchScreenTime([6, 6, 6, 6, 6, 6, 6])); // should return true