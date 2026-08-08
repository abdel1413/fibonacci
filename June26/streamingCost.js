function getStreamingBill(cart, subscription) {

 //totol
 //check the. subscription
 // check the the cart format 
 // check the cart type
 const converter = (dollars) =>{

return  dollars *100
 }
 let totalCents = 0;
const lookup ={
  hd: {rent: converter(3.99), buy: converter(12.99)},
  "4k": {rent: converter(5.99), buy: converter(19.99)}
} 
 const discounts = {
  none:0,
  basic: 0.10,
  premium: 0.25,
 }

 for(let  movie of cart){
  const format = movie.format.toLowerCase();
  const type = movie.type.toLowerCase()

   totalCents = lookup[format][type]
   console.log(totalCents)
 }

 const discount = discounts[subscription]

  const finalTotal = totalCents * (1- discount)
 
  return  `$${(finalTotal/100).toFixed(2)}`;
}

getStreamingBill([{ format: "HD", type: "rent" }], "none")

getStreamingBill([{ format: "HD", type: "rent" }, { format: "HD", type: "rent" }, { format: "HD", type: "buy" }], "basic") 