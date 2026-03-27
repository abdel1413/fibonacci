function invertedMatrix (matrix){
  // Given a 2D matrix, return the transpose of the matrix.
  //  The transpose of a matrix is the matrix flipped over its diagonal. 
  // For example, given the following matrix:
  // [[1, 2, 3],
  //  [4, 5, 6],
  //  [7, 8, 9]]
  
  // Return:
  
  // [[1, 4, 7],
  //  [2, 5, 8],
  //  [3, 6, 9]]
  
    const result = [];
    for(let c =0; c < matrix[0].length; c++){
      const row = []
      for(let r =0; r < matrix.length; r++){
        row.push(matrix[r][c])
      }
      result.push(row)
    }
    return result
  }

  //2nd solution;
 function invertedMatrix(matrix) {
        //flatten the matrix and get unique values
        let [a,b] = [...new Set(matrix.flat())];

        //loop through the matrix and replace values
        return matrix.map(row => row.map(value => value === a ? b : a)) 
    }

    // 3rd solution
    function invertedMatrix(matrix) {
        let [a,b] = [...new Set(matrix.flat())];
        for(let r =0; r< matrix.length;r++){
            for(let c = 0; c< matrix[r].length;c++){
                matrix[r][c] = matrix[r][c] === a ? b : a   
            }
        }
        return matrix
    }


