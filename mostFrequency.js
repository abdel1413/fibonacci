function mostFrequent(arr) {
    const frequencyMap = {};
    let maxFreq = 0;
    let mostFreqElement = null;

    for (const item of arr) {
        frequencyMap[item] = (frequencyMap[item] || 0) + 1;

        if (frequencyMap[item] > maxFreq) {
            maxFreq = frequencyMap[item];
            mostFreqElement = item;
        }
    }

    return mostFreqElement;
}

// Example usage:
const data = [3, 'apple', 2, 'banana', 'apple', 3, 3, 'apple'];
console.log(mostFrequent(data)); // Output: 'apple' 
console.log(mostFrequent([1, 2, 2, 3, 3, 3, 4])); // Output: 3  
console.log(mostFrequent(['cat', 'dog', 'cat', 'cat', 'bird', 'dog'])); // Output: 'cat'

//not this doesn't work when array has true and 
// false mixed with 'true' and 'false' strings