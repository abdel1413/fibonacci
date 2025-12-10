function gcd(x, y) {
 x = Math.abs(x)
 y = Math.abs(y)
   console.log(x, y)
  while(y!== 0){
  let temp = y;
    y = x%y;
    x = temp
    console.log('x',x)

  }
  return x;
}

gcd(4, 6)
gcd(20, 15)
gcd(7, 3)