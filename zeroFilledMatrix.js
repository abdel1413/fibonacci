function zeroFilledMatrix(rows, cols) {
    const matrix = [];
    for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 0; j < cols; j++) {
            row.push(0);
        }
        matrix.push(row);
    }
    return matrix;
}

zeroFilledMatrix(3, 4); // should return [[0,0,0,0],[0,0,0,0],[0,0,0,0]]    