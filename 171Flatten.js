function flatten(arr) {
  
   let result = []

   for(let ar of arr){
     if(Array.isArray(ar)){
       result.push(...flatten(ar))
     }else{
       result.push(ar)
     }
   }
   console.log(result)
   return result
}



 flatten([1, [2, 3], 4])
 flatten(["A", [[[["B"]]]], "C"])