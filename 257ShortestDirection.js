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