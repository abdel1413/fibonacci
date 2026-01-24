function getBingoLetter(n) {
   switch(true){
     case n <=15:
     return "B"
     case n<=30:
     return "I"
     case n<=45:
     return "N"
     case n<=60:
     return "G";
     case n<=75:
     default: 
     return "O"
   }
 
}

 getBingoLetter(75)