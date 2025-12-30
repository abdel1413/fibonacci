function stringSum(str) {
 //loop thru strl
 //check if a char is digit 
 // if it is add to sum
 let numbers = str.match(/\d+/g)
 console.log(numbers)
 return numbers? numbers.reduce((sum ,next) => sum+Number(next), 0 ): 0
}


 
stringSum("125344") // should return 125344
stringSum("abc123xyz") // should return 123
stringSum("7 apples and 3 oranges") // should return 10
stringSum("no numbers here") // should return 0

stringSum("10cats5dogs2birds") // should return 17