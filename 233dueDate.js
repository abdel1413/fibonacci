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
getDueDate("2025-05-29")
getDueDate("2024-01-30")