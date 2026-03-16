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


function calculateParkingFee(parkTime, pickupTime) {
//
 let fees = 3; 
 let overnight = false;
 //convert the parktime to ph and pm
 let [ph, pm] = parkTime.split(":").map(Number)
 let [eh, em] = pickupTime.split(":").map(Number)

 //convert ph and eh to min
 let startTime = ph*60 +pm;
 let endTime = eh *60 + em;

 //check if it is overnight;
   if(endTime < startTime){
      endTime += 24 *60;
      overnight = !overnight;
   }
//time that past since the car entered the 
//parking lot
   const spentTime = endTime -startTime
   console.log(spentTime)

   // convert back to hours
   const hours = Math.ceil(spentTime/60);
   console.log(hours)

   // ouput the cost 
let cost = hours <2? 5 : fees * hours
   console.log(cost)

     if(overnight) cost +=10
   return  `$${cost}`

}

calculateParkingFee("18:15", "01:30")


// 2nd solution

function calculateParkingFee(parkTime, pickupTime) {

  const [ph, pm] = parkTime.split(":").map(Number);
  const [eh, em] = pickupTime.split(":").map(Number);

  let start = ph * 60 + pm;
  let end = eh * 60 + em;

  let overnight = false;

  if (end < start) {
    end += 24 * 60; // next day
    overnight = true;
  }

  let totalMinutes = end - start;

  let hours = Math.ceil(totalMinutes / 60);

  let cost = hours * 3;

  if (overnight) cost += 10;

  if (cost < 5) cost = 5;

  return `$${cost}`;
}

// short solution
const calculateParkingFee = (park, pick) => {
  const [ph, pm] = park.split(":").map(Number);
  const [eh, em] = pick.split(":").map(Number);

  let start = ph * 60 + pm, end = eh * 60 + em;
  if (end < start) end += 1440;

  let cost = Math.ceil((end - start) / 60) * 3 + (end - start >= 1440 ? 10 : (pick < park ? 10 : 0));
  return `$${Math.max(5, cost)}`;
};

//cleaner 
const calculateParkingFee = (a,b) => {
  let [h1,m1] = a.split(':').map(Number),
      [h2,m2] = b.split(':').map(Number),
      s = h1*60+m1, e = h2*60+m2;

  if(e<s) e+=1440;

  let cost = Math.ceil((e-s)/60)*3 + (b<a?10:0);
  return `$${Math.max(5,cost)}`;
};


calculateParkingFee("18:15", "01:30")
