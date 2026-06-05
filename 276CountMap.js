function getFrequency(str) {
    const counts = {};

    for (const char of str) {
        counts[char] = (counts[char] || 0) + 1;
    }

    return counts;
}