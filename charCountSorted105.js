function countCharacters(sentence) {

//copy the arg
// convert everything to lower
// delete empty spaces, ponctuation and numberes
//use object 
//loop thru the string 
//check if the char is alphabetic letter
// assign each char and its occurence as property
// convert the obj into arr containing key/value as sub array
// then  convert subarray into string
let copy = sentence
.slice()
.toLowerCase()
.split(" ")
.join("")

let valuedString = copy
const resultObject = {}

let regex = /[a-z]/
  for(let i=0; i< valuedString.length;i++){
    if(regex.test(valuedString[i])){
       resultObject[valuedString[i]] = (resultObject[valuedString[i]]||0) + 1
    }
  }
 
  let sorted  = Object.entries(resultObject).map(([key,value]) => [key, value].join(" "))
 console.log(sorted.sort())
  return sorted.sort();
}


//2nd approach
function charCount(sentence) {
  const counts = {};

  for (const char of sentence.toLowerCase()) {
    if (char >= 'a' && char <= 'z') {
      counts[char] = (counts[char] || 0) + 1;
    }
  }

  return Object.keys(counts)
    .sort()
    .map(letter => `${letter} ${counts[letter]}`);
}


// Example usage:   
countCharacters("hello world")
 countCharacters("I love coding challenges!")