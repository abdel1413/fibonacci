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

getMilestone(50)