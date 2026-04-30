function getLastLetter(str) {
 let max = ""
 for(let char of str){
   
    //check if the character is a letter using a regular expression
   if(/[a-z]/i.test(char)){
    

    // compare the current character with the max character found so far, ignoring case
    //convert both characters to lowercase for comparison
     if(max ===""|| char.toLowerCase()> max.toLowerCase()){
       max = char
     }
   }
 }
 console.log(max)
 return max;
}

//getLastLetter("world")
getLastLetter("Hello World") // should return "W" because "W" is the last letter in the alphabet among the letters in the string.