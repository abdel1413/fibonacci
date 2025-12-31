function isMirror(str1, str2) {
 
   const str1Cleaned = str1.replace(/[^a-zA-Z]/g, "")
   const str2Cleaned = str2.replace(/[^a-zA-Z]/g, "")


  return  str1Cleaned === str2Cleaned.split("").reverse().join("")
}

isMirror("helloworld", "helloworld") // should return false
isMirror("A man, a plan, a canal: Panama", "amanaP :lanac a ,nalp a ,nam A") // should return true
isMirror("racecar", "racecar") // should return true
isMirror("Hello, World!", "!dlroW ,olleH") // should return true
isMirror("JavaScript", "tpircSavaJ") // should return true
isMirror("Not a mirror", "rorrim a toN") // should return true
isMirror("123abc", "cba321") // should return true
isMirror("Test123!", "!321tseT") // should return true
isMirror("Palindrome", "emordnilaP") // should return true
isMirror("Nope", "Open") // should return false 