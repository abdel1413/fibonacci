function compressString(sentence) {
    //split the sentence into words
  const words =sentence.split(" ")
    //initialize current word to the first word
  let currentWord = words[0]
  //initialize result array to store compressed words
  const result = []
  // track consecutive occurrences
  let count= 1
  

    //loop through the words starting from the second word
    for(let i =1; i< words.length;i++){
       
        //check if the current word is the same as the previous word
      if(currentWord === words[i]){
       
        count++
        
      }else{
        //push the current word and its count to the result array
        result.push(count>1? `${currentWord}(${count})`: currentWord)
       
        //update current word to the new word
        currentWord = words[i]
      
        count =1;
        
      }


      }

     result.push(count>1? `${currentWord}(${count})`: currentWord)

    console.log(result.join(" "))
     return result.join(" ")
}



 compressString("route route route route route route tee tee tee tee tee tee")
 