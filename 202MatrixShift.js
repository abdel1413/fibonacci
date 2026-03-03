const matrixShift = (matrix,shift) => { 
    //length of matrix
    const rows = matrix.length
    //length of each row
    const cols = matrix[0].length 

     //flatten the matrix
     const flatMatrix = matrix.flat()
     const totalElements = flatMatrix.length

     //normalize the shift to handle negative and large shifts
     const normalizedShift = ((shift % totalElements) + totalElements) % totalElements

     //rotate the flat matrix
        const rotated = flatMatrix.slice(-normalizedShift).concat(flatMatrix.slice(0, -normalizedShift))

        //reconstruct the matrix    
        const result = []
        for(let r = 0; r < rows; r++){
            const start = r * cols
            const end = start + cols
            result.push(rotated.slice(start,end))
        }
        console.log(result)
        return result;

}
