function verify(message, key, signature) {
  console.log(computeSum(message), computeSum(key))
   let total = computeSum(message) + computeSum(key)

 console.log(total)
   return total === signature
        
          
 }
 
 const validator = (char)=>{
     console.log(char >= "a")
   if(char >="a" &&  char <='z'){
     return char.charCodeAt(0) - "a".charCodeAt(0)+1;
   }else if(char >= "A" && char <= 'Z'){
     return char.charCodeAt(0) - "A".charCodeAt(0)+ 27
   }else{
     return 0
   }
 }


    const computeSum = (str)=>{
        let sum = 0;
      for(let s of str){
         sum+= validator(s)
      }
     
      return sum
    }
   // console.log(accumilator)
 


verify("foo", "bar", 57)