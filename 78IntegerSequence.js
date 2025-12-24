function sequence(n) {
  let result = ""
  for(let i =1; i<= n ; i++){
    result +=i
  }
  console.log(result)
  return result;
}

sequence(5)  // should return "12345"   
sequence(10) // should return "12345678910"  
sequence(3)  // should return "123"    
sequence(7)  // should return "1234567" 
sequence(1)  // should return "1"   