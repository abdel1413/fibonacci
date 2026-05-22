function getGreeting(time) {
    const [h, m] = time.split(":").map(Number);

    const minutes = h * 60 + m;

    if (minutes >= 5 * 60 && minutes <= 11 * 60 + 59) {
        return "Good morning";
    } 
    else if (minutes >= 12 * 60 && minutes <= 17 * 60 + 59) {
        return "Good afternoon";
    } 
    else if (minutes >= 18 * 60 && minutes <= 21 * 60 + 59) {
        return "Good evening";
    } 
    else {
        return "Good night";
    }
}

console.log(getGreeting("06:30"));