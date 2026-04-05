function fixPrankNumber(arr) {
  if (arr.length < 3) return arr;

  // 1. get diffs
  let diffs = [];
  for (let i = 1; i < arr.length; i++) {
    diffs.push(arr[i] - arr[i - 1]);
  }

  // 2. find most common diff (robust)
  let freq = {};
  for (let d of diffs) {
    freq[d] = (freq[d] || 0) + 1;
  }

  let correctDiff = Object.keys(freq)
    .map(Number)
    .reduce((a, b) => freq[a] > freq[b] ? a : b);

  // 3. rebuild forward
  let forward = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    forward.push(forward[i - 1] + correctDiff);
  }

  // 4. check which direction is correct (VERY IMPORTANT)
  let mismatch = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== forward[i]) mismatch++;
  }

  // if too many mismatches → fix starting point
  if (mismatch > 1) {
    let start = arr[arr.length - 1] - correctDiff * (arr.length - 1);
    forward = [start];
    for (let i = 1; i < arr.length; i++) {
      forward.push(forward[i - 1] + correctDiff);
    }
  }

  return forward;
}