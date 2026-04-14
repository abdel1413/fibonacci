function isCorrectEquation(eq) {
  let [left, right] = eq.split(" = ");
  let tokens = left.split(" ");

  // Step 1: resolve * and /
  let stack = [Number(tokens[0])];

  for (let i = 1; i < tokens.length; i += 2) {
    let op = tokens[i];
    let num = Number(tokens[i + 1]);

    if (op === "*") {
      stack.push(stack.pop() * num);
    } else if (op === "/") {
      stack.push(stack.pop() / num);
    } else {
      stack.push(op, num);
    }
  }

  // Step 2: resolve + and -
  let result = stack[0];

  for (let i = 1; i < stack.length; i += 2) {
    let op = stack[i];
    let num = stack[i + 1];

    if (op === "+") result += num;
    else result -= num;
  }

  return result === Number(right);
}

//2nd version
// note lass safe but much shorter
const isCorrectEquation = s => {
  let [l, r] = s.split(" = ");
  return Function("return " + l)() === +r;
};

//3rd version
// using parser approach, more robust and handles multi-digit numbers

function isCorrectEquation(eq) {
  let i = 0;
  let stack = [];
  let num = 0;
  let op = "+";

  function applyOp(n) {
    if (op === "+") stack.push(n);
    else if (op === "-") stack.push(-n);
    else if (op === "*") stack.push(stack.pop() * n);
    else if (op === "/") stack.push(stack.pop() / n);
  }

  // Parse LEFT side until "="
  while (i < eq.length && eq[i] !== "=") {
    let ch = eq[i];

    if (ch >= "0" && ch <= "9") {
      num = num * 10 + Number(ch); // build number
    }

    // operator OR end of left side
    if (
      ch === "+" || ch === "-" ||
      ch === "*" || ch === "/" ||
      eq[i + 1] === "="
    ) {
      applyOp(num);
      op = ch;
      num = 0;
    }

    i++;
  }

  // compute left result
  let leftResult = stack.reduce((a, b) => a + b, 0);

  // move past "=" and space
  i += 2;

  // parse right side number
  let right = 0;
  while (i < eq.length) {
    right = right * 10 + Number(eq[i]);
    i++;
  }

  return leftResult === right;
}