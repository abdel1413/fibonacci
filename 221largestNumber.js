function largestNumber(str) {
  return Math.max(...str.split(/[,!?:;]/).map(Number));
}

largestNumber("4;15:60,26?52!0")