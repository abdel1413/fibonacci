function shiftArray(arr, n) {
  // get the arr length;
  // if n is  greater than the length; get the remainder
  // now check if n > 0 copy array up to n then append the rest
  //of the array from n.
  //if n < 0 copy array up to length + n then append the rest from 
  //length +n
  let length = arr.length;
 
  // normalize the array if n is > the length;
  n = n%length;

  let copy = arr.slice(0, n)
 
if(n > 0){
  console.log(n)
  console.log(arr.slice(n))
  console.log(arr.slice(0, n))
   console.log('arr',arr.slice(n).concat(arr.slice(0,n)))
  return arr.slice(n).concat(copy)
 }else if(n < 0){
  
   return arr.slice(length +n).concat(arr.slice(0,length +n))
 }
  return arr;
}

//shiftArray([1, 2, 3,], 1)

  shiftArray(["alpha", "bravo", "charlie"], 5)