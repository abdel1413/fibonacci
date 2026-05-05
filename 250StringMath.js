function stringMath(str) {
  let matches = [...str.matchAll(/\d+/g)];

  let result = Number(matches[0][0]);

  for (let i = 1; i < matches.length; i++) {
    let prev = matches[i - 1];
    let curr = matches[i];

    let prevEnd = prev.index + prev[0].length;
    let currStart = curr.index;

    let gapLength = currStart - prevEnd;

    let num = Number(curr[0]);

    if (gapLength % 2 === 0) {
      result += num;
    } else {
      result -= num;
    }
  }

  return result;
}
