const wordCounter = (str) => {
    let words = str.trim().split(/\s+/);
    let wordCount = {};
  
    for (let word of words) {
      word = word.toLowerCase();
      wordCount[word] = (wordCount[word] || 0) + 1;
    }
  
    return wordCount;
  }

  wordCounter("Hello world hello")