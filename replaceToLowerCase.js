//input contains either upper case letters or  lowercase letters
// always starts with a lowercase letter
//every upper case letter represents the start of new word
// convert all to lowercase and separate each word with an underscore(_)

// PLAN:
//1: use regex to find all upper case letters in the string
//2: for each upper case letter found, replace it with an underscore followed by the lower case version of the letter
//3: return the modified string

function toSnake(camel) {
 return camel.replace(/([A-Z])/g, `_$1`).toLowerCase()
 

}

// toSnake("helloWorld")
toSnake("myVariableName")