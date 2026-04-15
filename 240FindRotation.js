function findRotation(num) {
  let str = String(num);
  let len = str.length;

  for (let i = 0; i < len; i++) {
    let rotated = Number(str);

    if (rotated % len === 0) {
      return rotated;
    }

    // rotate: move first char to end
    str = str.slice(1) + str[0];
  }

  return "none";
}