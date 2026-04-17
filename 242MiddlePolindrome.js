function palindromeLocator(str) {
  const arr = [...str]
   const rev = [];
   for(let i = arr.length; i >= 0; i--){
    
     rev.push(arr[i])
   }
    console.log(arr)
    let av = Math.floor(arr.length/2)
      console.log((av))
  if(arr.join("") === rev.join("")){
  
    if(arr.length %2 === 1){
       console.log(arr[av])
       return arr[av]
    }else{
      console.log(arr[av-1], arr[av])
      return [arr[av-1], arr[av]].join("")
      
    }
  }else{
    return "none"
  }

 
}

palindromeLocator("racecar")
palindromeLocator("11100111")
palindromeLocator("freecodecamp")