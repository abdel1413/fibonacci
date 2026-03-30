function noConsecutiveRepeat(str) {
   for(let i = 0; i < str.length -1; i++){
     if(str[i] === str[i+1]) return false
   }
   return true
}

//2nd solution
const noConsecutiveRepeat = s => !/(.)\1/.test(s)


//3rd solution
function noConsecutiveRepeat(str) {
    let flag = false
  for(let i = 0; i < str.length -1; i++){
    if(str[i] === str[i+1]) 
        flag = true
  }
  return !flag
}

noConsecutiveRepeat("hello world")  // false
noConsecutiveRepeat("abcde")  // true
noConsecutiveRepeat("aabbcc")  // false
noConsecutiveRepeat("12345")  // true
noConsecutiveRepeat("112233")  // false