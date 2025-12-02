const infected = (days)=>{
    
    let infectedCount = 1; //day 0;
    for(let day =1; day <=days; day++){
        infectedCount *=2; //double each day

        if(day %3 ===0){
            let recovered = Math.floor(infectedCount * 0.20);
            infectedCount -= recovered; // subtract recovered
    }
}
    return infectedCount;   
}


//infected(1) should return 2
//infected(3) should return 6.
//infected(8) should return 152
//infected(17) should return 39808.