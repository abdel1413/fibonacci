function countBusinessDays(start, end) {
  let current = helper(start);

  const last = helper(end);
  let count = 0;

  while (current <= last) {
    const day = current.getDay();

    if (day !== 0 && day !== 6) {
      count++; // Mon–Fri
    }

    current.setDate(current.getDate() + 1);
  }

  return count;
}

function helper(str){
  let [y,m,d]= str.split("-").map(Number)
  console.log(y, m, d)
  console.log(new Date(y,m-1, d))
  return new Date(y, m-1, d)
}

countBusinessDays("2026-02-24", "2026-02-26")