function transpose(matrix) {
   
  return matrix[0].map((_, colIndex)=>matrix.map(row => row[colIndex]));
}
transpose([[1, 2, 3], [4, 5, 6]])