const invertedMatrix = (matrix) => {
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