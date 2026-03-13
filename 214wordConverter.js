function convertWords(str) {
  let arr = str.split(" ")
  console.log(arr)
  let result =[]
  arr.map(s => result.push(s.length))
  console.log(result.join(" "))

 return result.join(" ")

}

convertWords("hello world")