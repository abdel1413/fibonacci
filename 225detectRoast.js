function coffeeRoast(str) {
  let total = 0;

  for (let ch of str) {
    if (ch === "'") total += 1;
    else if (ch === "-") total += 2;
    else if (ch === ".") total += 3;
  }

  let avg = total / str.length;

  if (avg < 1.75) return "Light";
  if (avg <= 2.5) return "Medium";
  return "Dark";
}

//2nd solution
const coffeeRoast = s => {
  let avg = s
    .replace(/'/g, "1")
    .replace(/-/g, "2")
    .replace(/\./g, "3")
    .split("")
    .reduce((a, b) => a + +b, 0) / s.length;

  return avg < 1.75 ? "Light" : avg <= 2.5 ? "Medium" : "Dark";
};
