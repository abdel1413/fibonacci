function calculateParkingFee(parkTime, pickupTime) {
//
let fees = 3;
let overnight = false;
 let startHours = parkTime.split(":").map(Number)
 let endHours = pickupTime.split(":").map(Number)
 console.log(startHours)
 let start = (startHours[0])
  if((startHours[1]) > 0)
  start + 1;
  let end = endHours[0]
  if(endHours[1]>0){
    end +1;
  }
  console.log(end)
  console.log(start)
  console.log(fees)
   if(end < start){
     end +=24; //next day
     console.log(end)
     overnight = true;
   }
  if(overnight) fees +=10;
 
   let totalHours = end -start
   let cost = 0;
   if(totalHours < 2) {
     fees = 5;
   }else {
       
     fees *= totalHours;
     
   }
   
 

  console.log(fees)
  return `$${fees}`;
}

calculateParkingFee("18:15", "01:30")
