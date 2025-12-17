function hasConsonantCount(text, target) {
   let regex = 'aeiou'
   let count = 0;
   text = text.trim().toLowerCase()
   console.log(text)
  for(let i of text){
    if(i >='a'&& i <= 'z'){

    console.log(i)
    if(!regex.includes(i)){

   count++
 
    }
    }
   
  }
  
  return count ===target;
}

// Example usage:
console.log(hasConsonantCount("Hello, World!", 7)) // should return true
console.log(hasConsonantCount("This is a test.", 7)) // should return false
console.log(hasConsonantCount("JavaScript is fun!", 10)) // should return true
console.log(hasConsonantCount("AEIOU are vowels.", 7)) // should return false


hasConsonantCount("Th3 Qu!ck Br0wn F0x Jump5 0ver Th3 L@zy D0g.", 23)
