function getElementSize(windowSize, elementVw, elementVh) {
let s = windowSize.split("x")
console.log(s)
const vw = elementVw.slice(0,-2)
const vh = elementVh.slice(0,-2)
const width = (Number(s[0])* Number(vw))/100
const height = (Number(s[1])* Number(vh)/100)
console.log(`${width} x ${height}`)

  
  return `${width} x ${height}`;
}

getElementSize("1200 x 800", "50vw", "50vh")