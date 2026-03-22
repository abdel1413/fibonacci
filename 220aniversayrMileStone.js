function getMilestone(years) {
  let result; 
  if(years ===1){
    result = "Paper"
  }else if(years >= 1 && years <=5){
    result = "Paper"
  }else if(years >5 && years <10){
    result = "Wood"
  }else if(years >=10 && years <=25){
    result = "Tin"
  
  }else if(years >25 && years <=40){
    result = "Silver"
  
  }else if(years >40 && years <50){
    result = "Ruby"
  
  }else if(years >=50 && years <=60){
    result = "Gold"
  
  }else if(years >60 && years <=70){
    result = "Diamond"
  
  }
  else if(years >70){
    result = "Platinum"
  }else{
    result = "Newlyweds"
  }
  console.log(result)
  return result;
}

//2nd solution
function anniversaryMilestone(years) {
  if (years >= 70) return "Platinum";
  if (years >= 60) return "Diamond";
  if (years >= 50) return "Gold";
  if (years >= 40) return "Ruby";
  if (years >= 25) return "Silver";
  if (years >= 10) return "Tin";
  if (years >= 5) return "Wood";
  if (years >= 1) return "Paper";
  return "Newlyweds";
}

getMilestone(50)