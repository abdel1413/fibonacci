function isCorrectEquation(str) {
  let [left, right] = str.split(" = ");
  let tokens = left.split(" ");

  // Step 1: handle * and /
  let stack = [Number(tokens[0])];

  for (let i = 1; i < tokens.length; i += 2) {
    let op = tokens[i];
    let num = Number(tokens[i + 1]);

    if (op === "*") {
      stack.push(stack.pop() * num);
    } else if (op === "/") {
      stack.push(stack.pop() / num);
    } else {
      stack.push(op);
      stack.push(num);
    }
  }

  // Step 2: handle + and -
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
const isCorrectEquation = s => {
  let [l,r]=s.split(" = "), t=l.split(" ");
  let st=[+t[0]];

  for(let i=1;i<t.length;i+=2){
    let op=t[i], n=+t[i+1];
    if(op=="*") st.push(st.pop()*n);
    else if(op=="/") st.push(st.pop()/n);
    else st.push(op,n);
  }

  let res=st[0];
  for(let i=1;i<st.length;i+=2)
    res = st[i]=="+" ? res+st[i+1] : res-st[i+1];

  return res==+r;
};