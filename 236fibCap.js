function fibCap(str) {
  // Step 1: generate Fibonacci indices
  let fib = new Set([0, 1]);
  let a = 0, b = 1;

  while (b < str.length) {
    let next = a + b;
    fib.add(next);
    a = b;
    b = next;
  }

  // Step 2: build result
  let result = "";

  for (let i = 0; i < str.length; i++) {
    let ch = str[i];

    if (/[a-z]/i.test(ch)) {
      if (fib.has(i)) {
        result += ch.toUpperCase();
      } else {
        result += ch.toLowerCase();
      }
    } else {
      result += ch; // keep non-letters unchanged
    }
  }

  return result;
}

//2nd version
const fibCap = s => {
  let f = new Set([0,1]), a=0,b=1;
  while(b<s.length)[a,b]=[b,a+b],f.add(b);

  return [...s].map((c,i)=>
    /[a-z]/i.test(c)
      ? f.has(i)?c.toUpperCase():c.toLowerCase()
      : c
  ).join("");
};