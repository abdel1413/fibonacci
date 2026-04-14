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