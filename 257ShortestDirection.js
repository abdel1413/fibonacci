function getDirection(time1, time2) {

  const toMinutes = time => {
    let [h, m] = time.split(":").map(Number);
    return h * 60 + m;
  };

  let start = toMinutes(time1);
  let end = toMinutes(time2);

  // moving forward around clock
  let forward = (end - start + 1440) % 1440;

  // moving backward around clock
  let backward = (start - end + 1440) % 1440;

  if (forward < backward) {
    return "forward";
  } else if (backward < forward) {
    return "backward";
  } else {
    return "equal";
  }
}
//shortest version
function getDirection(t1, t2) {
  const toMins = t => t.split(":").reduce((a, b) => a * 60 + +b);
  let s = toMins(t1), e = toMins(t2);
  let f = (e - s + 1440) % 1440;
  let b = (s - e + 1440) % 1440;
  return f < b ? "forward" : b < f ? "backward" : "equal";
}