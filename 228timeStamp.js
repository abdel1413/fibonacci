function canRetake(finishTime, currentTime) {
    //convert to date objects
     let finish  = new Date(finishTime)
     let curr = new Date(currentTime)
   //calculate the difference in milliseconds
    let diff = curr -finish;
   
    //convert to hours
    //1s = 1000ms, 1m = 60s, 1h = 60m
    console.log('ms', diff)
    console.log("min", diff/(1000 * 60))
    console.log("hours", diff/(1000 * 60 * 60))
    console.log("days", diff/(1000 * 60 * 60 * 24))

    const hours= diff/(1000 * 60 * 60);
    console.log("hours", hours)
    return hours>=48

}

 canRetake("2026-03-23T08:00:00", "2026-03-25T14:00:00")

 canRetake("2026-03-24T14:00:00", "2026-03-25T10:00:00")