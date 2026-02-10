function oddOrEvenDay(timestamp) {
 let date = new Date(timestamp).getUTCDate()

 console.log( date)
 

  return date%2 === 0? "even": "odd";
}



oddOrEvenDay(1769472000000)