function getShadow(time) {
   //convert to 24h format
   //if it greather than 12? 
  
   let [h, m] = time.split(":").map(Number)
   //convert to decimal hours
    let decimalHours = h + (m ===30 ? .5: 0)

    //check for no shadow
    if(decimalHours < 6 || decimalHours >=18 || decimalHours ===12) return "No shadow"
    //calculate the diffence
   let difference = Math.abs(12 - decimalHours)
   console.log('d',difference)
    //calculate the distance;
    let distance = Math.pow(difference, 3)
    console.log(distance)
    let direction = decimalHours < 12? "west": 'east'
    console.log(direction)
   console.log(`${distance}ft ${direction}`)

  return `${distance}ft ${direction}`;
}


getShadow("10:00")
getShadow("17:30")