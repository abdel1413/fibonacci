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

//isFizzBuzz([1, 2, "Fizz", 4, "Buzz"])
//isFizzBuzz([13, 14, "FizzBuzz", 16, 17])
isFizzBuzz([1, 2, "Fizz", 4, 5])