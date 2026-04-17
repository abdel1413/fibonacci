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

//2nd version
const palindromeLocator = s => {
  let a = [...s], r = [];
  for(let i=a.length;i>=0;i--) r.push(a[i]);
  let m = Math.floor(a.length/2);
  return a.join("") === r.join("")
    ? a.length % 2 ? a[m] : [a[m-1],a[m]].join("")
    : "none";
}

palindromeLocator("racecar")
palindromeLocator("11100111")
palindromeLocator("freecodecamp")