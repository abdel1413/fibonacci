function calculateParkingFee(parkTime, pickupTime) {
//
let fees = 3;
let overnight = false;
 let [ph, pm] = parkTime.split(":").map(Number)
 let [eh, em]= pickupTime.split(":").map(Number)
 
 let start = ph *60 + pm;
 let end = eh *60 + em;

  
  console.log(fees)
   if(end < start){
     end +=24 *60 ; //next day
     overnight = true;
   }

 let totalMin = end -start
 console.log(totalMin)
 const hours =Math.ceil(totalMin /60)
 console.log(hours)
 
  let cost  = hours<2? 5 : fees *hours


  
  if(overnight) cost +=10;
  console.log(cost)
 
  
    
   
 

  console.log(cost)
  return `$${cost}`;
}

calculateParkingFee("18:15", "01:30")
