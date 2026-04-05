function alarmCheck(alarmTime, wakeTime) {
  //split alarm to h & m
  // split wake to h&m
  //check if wh is < ah  => early
  // if both ah & wh are same and wm and am are same || wm -am < 10 => on time
  //if both ah and wh are same and wm < am =>early
  //otherwise late
 let [ah , am] = alarmTime.split(":").map(Number);
 let [wh, wm] = wakeTime.split(":").map(Number)
 console.log(ah, am)
 console.log(wh, wm)
if(wh < ah || (wh ===ah && wm < am)) {return 'early'
}else if((ah === wh && wm - am <=10 )){
  return "on time"
}else {
  return "late"
}

}

alarmCheck("07:00", "06:45")
alarmCheck("06:30", "06:30")