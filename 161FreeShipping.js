function getsFreeShipping(cart, minimum) {
 const prices = {
    shirt: 34.25,
    jeans: 48.5,
    shoes: 75.0,
    hat: 19.95,
    socks: 15.0,
    jacket: 109.95
  };
   const totalPrice = cart.reduce((acc,item) => {
      return acc + prices[item]
   },0)

   return  totalPrice >= minimum
}

getsFreeShipping(["shoes"], 50) // should return true
 getsFreeShipping(["shirt", "shirt", "jeans", "socks"], 100) // should return true
 getsFreeShipping(["hat", "socks"], 40) // should return false
 getsFreeShipping(["jacket"], 150) // should return false