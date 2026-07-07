const lastLoad7 = (remaining, history) => {

    const total = history.reduce((acc, curr) => acc + curr, 0);
    const average = total / history.length;
    return Math.floor(remaining / average);

}

// Example usage:
// const remaining = 100;
// const history = [10, 20, 30, 40, 50];
// console.log(lastLoad7(remaining, history)); // Output: 2     
