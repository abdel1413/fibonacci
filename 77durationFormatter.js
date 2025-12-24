function format(seconds) {
  const hrs = Math.floor(seconds / 3600);
  console.log(hrs)
  const mins = Math.floor((seconds % 3600) / 60);
  console.log(mins)
  const secs = seconds % 60;
  console.log(secs)

  const ss = String(secs).padStart(2, "0");
 console.log(ss)
  if (hrs > 0) {
    return `${hrs}:${String(mins).padStart(2, "0")}:${ss}`;
  }

  return `${mins}:${ss}`;
}

format(500)  // should return "8:20"    
format(3601) // should return "1:00:01"  
format(59)   // should return "0:59"    
format(3665) // should return "1:01:05" 
format(7322) // should return "2:02:02"