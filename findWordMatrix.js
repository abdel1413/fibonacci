function findWordMatrix(matrix, word) {
    const rows = matrix.length;
    const cols = matrix[0].length;

    //find the directions row step and column step
    const directions = [
        [0, 1],  // left ->right
        [0, -1], // right -> left
        [1, 0],  //top -> down
        [-1, 0], // down -> top
        
    ];  

    // Check horizontally
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            //word must start at matrix[r][c]
            if(matrix[r][c] !== word[0]) continue;
            let found = true;

            //try each direction
            for (let [dr,dc] of directions) {
                let rr = r;
                let cc = c;
                
                
                for (let k = 1; k < word.length; k++) {
                    rr += dr;
                    cc += dc;
                    
                    //check out of  bounds
                    if (rr < 0 || rr >= rows || cc < 0 || cc >= cols || matrix[rr][cc] !== word[k]) {
                        found = false;
                        break;
                    }
                    //check mismatch
                    if(matrix[rr][cc] !== word[k]){
                        found = false;
                        break;
                    }   
                }


                //if found  return start and end
                if(found){
                    return[[r,c],[rr,cc]]
                }
            }
            
        }
    }



    return null;
}

// Example usage:
const matrix = [
    ['F', 'A', 'C', 'I'],
    ['O', 'B', 'Q', 'P'],
    ['A', 'N', 'O', 'B'],
    ['M', 'A', 'S', 'S']
];


console.log(findWordMatrix(matrix, "FOAM")); // Output: true
console.log(findWordMatrix(matrix, "MASS"));