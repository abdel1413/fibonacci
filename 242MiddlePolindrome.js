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

//3rd version
function getPalindromeMiddle(str) {
  // Step 1: check palindrome
  let reversed = str.split("").reverse().join("");
  if (str !== reversed) return "none";

  // Step 2: find middle
  let len = str.length;
  let mid = Math.floor(len / 2);

  if (len % 2 === 0) {
    return str[mid - 1] + str[mid];
  } else {
    return str[mid];
  }
}

palindromeLocator("racecar")
palindromeLocator("11100111")
palindromeLocator("freecodecamp")