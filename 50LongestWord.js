function getLongestWord(sentence) {

  //remove . char
   //split
   // count each word 
   //return the longest word
   let removed = sentence.replace(/\./g," ")
 let s =  removed.split(" ")
   let longest = '';
 for(let i = 0; i< s.length;i++){
  
  if(s[i].length > longest.length ){
   
    longest = s[i];
    
  }
 }

  return longest;
}

// getLongestWord("coding is fun") 
getLongestWord("Coding challenges are fun and educational.") // should return "educational"