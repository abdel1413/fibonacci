function getAverageGrade(scores) {
  let result;

   let sum =  scores.reduce((sum, next) => sum+next,0)
   console.log(sum)
   let av = sum/scores.length;
   console.log(av)

  switch(true){
       case av >=97:
       result ="A+"
       break;
       case av >=93:
       result ="A"
       break;
       case av >=90:
       result = "A-"
       break;
       case av >=87:
       result = "B+"
       break;
       case av >=83:
       result = "B";
       break; 
       case av>=80:
       result ="B-"
       break;
       case av >=77:
       result ="C+"
       break;
       case av >=73:
       result ="C"
       break;
       case av >=70:
       result ="C-"
       break;
       case av >=67:
       result ="D+"
       break;
       case av >=63:
       result ="D"
       break;
       case av>=60:
       result ="D-"
       break;
       default:
       result = "F"
      

  }

 console.log(result)
  return result;
}

getAverageGrade([92, 91, 90, 94, 89, 93])
getAverageGrade([84, 89, 85, 100, 91, 88, 79])