function isInCrossword(char) {
    const grid = [
        [0,1,0,0,0,0,0,1],
        [0,1,1,0,1,1,1,1],
        [0,1,0,0,0,1,0,0],
        [0,1,1,0,0,1,0,1],
        [0,1,0,1,0,0,1,0],
        [0,1,0,1,0,1,0,0],
        [0,1,1,0,1,0,0,0],
        [1,0,1,0,1,1,1,0]
    ];

    // Convert character to 8-bit binary
    const binary = char
        .charCodeAt(0)
        .toString(2)
        .padStart(8, "0");

    // Check rows
    for (let row of grid) {
        const rowString = row.join("");
        const reversed = rowString.split("").reverse().join("");

        if (rowString === binary || reversed === binary) {
            return true;
        }
    }

    // Check columns
    for (let col = 0; col < 8; col++) {
        let columnString = "";

        for (let row = 0; row < 8; row++) {
            columnString += grid[row][col];
        }

        const reversed = columnString.split("").reverse().join("");

        if (columnString === binary || reversed === binary) {
            return true;
        }
    }

    return false;
}

// Example usage:
console.log(isInCrossword('A')); // true
console.log(isInCrossword('B')); // false
console.log(isInCrossword('C'));