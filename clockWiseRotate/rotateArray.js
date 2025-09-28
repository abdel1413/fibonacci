//rotate an array 90 clockwise
// PLAN:
//1 : transpose the array( convert rows into columns)
//  a) loop thru each sub array
 // b) insid the loop, create an empty array where to push each el from sub array 
// 2: reverse each row of transposed matrix
  //a) loop thru the outter (entire) array  backwardly
  // b) access each elt base of the sub array index 
  // push into an empty array created earlier
  // finaly push the reversed array into new empty array and return it;

   const rotate = (matrix)=>{
   const rotatedArray = []
  for(let i = 0; i< matrix[0].length; i++){
    const  transposeArray = []
    for(let j = matrix.length-1; j>=0; j--){
        transposeArray.push(matrix[j][i])
    }
     rotatedArray.push(transposeArray)
}

return rotatedArray;

 }


 rotate([[1,2],[3,4]]) //[[3, 1], [4, 2]]
rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]]) //[[7, 4, 1], [8, 5, 2], [9, 6, 3]]