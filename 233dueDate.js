function getDueDate(dateStr) {
//let [year, month, day] = dateStr.split("-")
   
   //get months
  let date = (new Date(dateStr))
 
  let year = date.getFullYear()
  console.log(year)
  let months  = (date.getMonth()+1)
  let day = date.getDate()+1
  let dueMonths = months +9;

  if(dueMonths > 12){
    year +=1
    dueMonths = dueMonths -12
  }
  if(dueMonths ===2 && day >28 ){
    day = 28;

  }
  
dueMonths = dueMonths< 10? "0"+dueMonths: dueMonths
 console.log('d',day)
  console.log(year, dueMonths,day)
  return `${year}-${dueMonths}-${day}`;
}


//2nd version
function getDueDate(dateStr) {
  const date = new Date(dateStr);
  date.setMonth(date.getMonth() + 9);
  
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  
  return `${year}-${month}-${day}`;
}

//3rd version
function addNineMonths(dateStr) {
  let [year, month, day] = dateStr.split("-").map(Number);

  // create date at 1st of target month
  // months are 0-indexed in JS Date, so subtract 1 from month
  // add 9 months
  // if month exceeds 12, it will automatically roll over to the next year
  // we set day to 1 to avoid issues with months having different number of days
  //(and also each has 1st day so we can compare with the original day later and 
  // take the min of the two)
  // we will adjust the day later
  let newDate = new Date(year, month - 1 + 9, 1);

  // get last day of that month
  let lastDay = new Date(
    newDate.getFullYear(),
    newDate.getMonth() + 1,
    0
  ).getDate();

  // use original day or last day (whichever is smaller)
  newDate.setDate(Math.min(day, lastDay));

  return newDate.toISOString().slice(0, 10);
}






getDueDate("2025-03-30")
getDueDate("2025-05-29")
getDueDate("2024-01-30")