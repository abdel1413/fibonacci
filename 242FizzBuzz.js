function isFizzBuzz(arr) {
 // 1st loop to find the start num;

   let start
 for(let i = 0; i< arr.length; i++){
   
     if( typeof arr[i] ==="number"){
       start = arr[i] -i
       
       break;
     }

 }
 // 2nd loop to rebuld expected sequence
 for(let i = 0 ; i<arr.length;i++){
   console.log(start)
    let num = start + i;
    console.log('n',num)
    let expected = num %15 ===0? "FizzBuzz"
                                :num %3===0?"Fizz"
                                : num %5===0? "Buzz"
                                            :num
 if(arr[i] !==expected){
   return false;
 }
 }
 
return true;
}

//2nd version
const isFizzBuzz = arr => {
  let start = arr.find((v, i) => typeof v === "number" && (arr.start = v - i));
  
  return arr.every((v, i) => {
    let n = arr.start + i;
    return v === (
      n % 15 === 0 ? "FizzBuzz" :
      n % 3 === 0 ? "Fizz" :
      n % 5 === 0 ? "Buzz" :
      n
    );
  });
};

//3rd version
const isFizzBuzz = arr => {
  let start;

  arr.some((v, i) => {
    if (typeof v === "number") {
      start = v - i;
      return true;
    }
  });

  return arr.every((v, i) => {
    let n = start + i;
    return v === (
      n % 15 === 0 ? "FizzBuzz" :
      n % 3 === 0 ? "Fizz" :
      n % 5 === 0 ? "Buzz" :
      n
    );
  });
};

//isFizzBuzz([1, 2, "Fizz", 4, "Buzz"])
//isFizzBuzz([13, 14, "FizzBuzz", 16, 17])
isFizzBuzz([1, 2, "Fizz", 4, 5])