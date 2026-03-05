function addPunctuation(sentences) {

  return sentences.replace(/ (?=[A-Z])/g,". ")+".";
}

addPunctuation("Hello world It's nice today")