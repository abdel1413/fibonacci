function count(str) {
   let regex = /\w+/
  let vowCount = 0;
  let consCount = 0;
    let stringArray = [...str]
  
   let filtered = stringArray.filter(ch =>regex.test(ch))
  
   for(let i = 0; i< filtered.length;i++){
     if(filtered[i] == "a"||filtered[i]=="e"||filtered[i]=='i'||filtered[i]=='o'||filtered[i]=='u'){
      
       vowCount++

     }else{

      consCount++
     }
   }
 
    
  
    console.log(vowCount, consCount)
  return [vowCount, consCount];
}




// 2end example
  //1 loop thru each character in the string
  //2 check if the character is a letter
    //3 if its a letter check if its a vowel or consonant
    //4 keep track of the counts of vowels and consonants
 function  vowconsCount(str){
    let vowCount = 0;
    let consCount = 0;
    for(let char of str.tolowerCase()){
        if(/a=z/.test(char)){
            if(/[aeoiu]/.test(char)){
                vowCount++
            }else{
                consCount++ ;
            }
        }
        return [vowCount, consCount];
 }

 }

count("Hello, World!") //[3,7]