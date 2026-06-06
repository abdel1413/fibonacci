function findOutOfPlace(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            // Decide whether arr[i] or arr[i+1] is wrong
            if (i === 0 || arr[i + 1] >= arr[i - 1]) {
                return i;
            }
            return i + 1;
        }
    }

    return -1;
}