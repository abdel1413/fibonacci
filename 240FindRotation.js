function getRotation(num) {
  let str = String(num);
  let len = str.length;

  for (let i = 0; i < len; i++) {
    let rotated = Number(str);

    if (rotated % len === 0) {
      return i; // ✅ return index, NOT number
    }

    str = str.slice(1) + str[0];
  }

  return "none";
}

//2nd version
const findRotation = n => {
  let s = String(n), l = s.length;
  for(let i=0;i<l;i++){
    if(+s % l === 0) return +s;
    s = s.slice(1) + s[0];
  }
  return "none";
}