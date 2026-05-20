function getWordScore(word) {
    let score = 0;

    for (let char of word.toLowerCase()) {
        // 'a' has char code 97
        score += char.charCodeAt(0) - 96;
    }

    return score;
}