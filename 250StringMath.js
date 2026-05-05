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



//2nd version
function stringMath(str) {
  let matches = [...str.matchAll(/\d+/g)];
  console.log('matches',matches)

  let result = Number(matches[0][0]);
  console.log('res',result)

  for (let i = 1; i < matches.length; i++) {
    let prev = matches[i - 1];
    let curr = matches[i];

    console.log('prev', prev, 'curr', curr) 
    let gapLength = curr.index - (prev.index + prev[0].length);
    console.log('gap', gapLength)

    let num = Number(curr[0]);
    console.log('num', num)

    if (gapLength % 2 === 0) {
      result += num;
    } else {
      result -= num;
    }                       
    }

    return result;
}

//3rd version
function stringMath(str) {
  let matches = [...str.matchAll(/\d+/g)];

  let result = Number(matches[0][0]);

  for (let i = 1; i < matches.length; i++) {
    let prev = matches[i - 1];
    let curr = matches[i];

    let gapLength = curr.index - (prev.index + prev[0].length);

    let num = Number(curr[0]);

    result += gapLength % 2 === 0 ? num : -num;
  }

  return result;
}

stringMath("a1bc3d4e") //-6
stringMath("12abc56def7") //-51
stringMath("1234") //-5
stringMath("a1b2c3d4e5f6g7h8i9j0") //-5     
