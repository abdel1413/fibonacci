function truncateText(text) {
  let truncated ;

     truncated = text.substring(0,17)
    
     let result
  if(text.length > 20){
   result =  truncated +  "..."
  }else{
    result = text
  }
  
 
  return result;
}

truncateText("This string should get truncated.")
