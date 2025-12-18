function createBoard(dimensions) {
  console.log(dimensions)
  let matrix = []
  for(let r = 0 ; r< dimensions[0]; r++){
    const row = [];
    for(let c = 0; c < dimensions[1]; c++){
      row.push((r+c)%2===0? "X": "O")
      console.log(row)

    }
    matrix.push(row)
  }
  console.log(matrix)
  return matrix;
}


// Example usage: 

createBoard([3, 3])   
// should return
// [ ['X', 'O', 'X'],
//   ['O', 'X', 'O'],
//   ['X', 'O', 'X'] ]

createBoard([4, 5])   
// should return
// [ ['X', 'O', 'X', 'O', 'X'],
//   ['O', 'X', 'O', 'X', 'O'],
//   ['X', 'O', 'X', 'O', 'X'],
//   ['O', 'X', 'O', 'X', 'O'] ]

createBoard([2, 2])   
// should return
// [ ['X', 'O'],
//   ['O', 'X'] ]

createBoard([1, 1])   
// should return
// [ ['X'] ]

createBoard([5, 4])   
// should return
// [ ['X', 'O', 'X', 'O'],
//   ['O', 'X', 'O', 'X'],
//   ['X', 'O', 'X', 'O'],
//   ['O', 'X', 'O', 'X'],
//   ['X', 'O', 'X', 'O'] ] 