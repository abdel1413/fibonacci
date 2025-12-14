function titleCase(title) {
  
 let t =  title
 .toLowerCase()
 .split(" ")
 .map(w => w[0].toUpperCase() + w.slice(1)).join(" ")
 console.log(t)

  return t;
}

//example usage

 titleCase("hello world") 

    titleCase("javaScript is fun")      
    titleCase("DAILY coding CHALLENGE") 
    titleCase("openAI creates AI")      

    