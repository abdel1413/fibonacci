function truncateText(text) {
  let truncked ;
  let rest ;
     truncked = text.substring(0,18)
     rest = text.substring(18,text.length-1)
     let result
  if(text.length > 20){
   result =  truncked + text.replace(rest, "...")
  }
  console.log(result)
  console.log(truncked)
  return result;
}

truncateText("This is a long text that needs to be truncated.") // should return "This is a long te..."
truncateText("Short text") // should return "Short text"
truncateText("Exactly twenty chars") // should return "Exactly twenty chars"
truncateText("This text is exactly 20 characters.") // should return "This text is exactly..."