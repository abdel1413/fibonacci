function getFlagEmoji(code) {
  return code
    .toUpperCase()
    .split('')
    .map(letter => String.fromCodePoint(127397 + letter.charCodeAt()))
    .join('');
}
