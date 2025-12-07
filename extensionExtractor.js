function extensionExtractor(filename) {
  // Find the last occurrence of the dot character
  const lastDotIndex = filename.lastIndexOf('.')

  // If there's no dot or it's the first character, return an empty string
  if (lastDotIndex === -1 || lastDotIndex === filename.length - 1) {
    return 'None'
    }

  // Extract and return the extension
  return filename.slice(lastDotIndex + 1)
}