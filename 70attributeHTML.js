function extractAttributes(html) {
  const regex = /(\w+)="([^"]*)"/g;
  const result = [];
  let match;

  while ((match = regex.exec(html)) !== null) {
    result.push(`${match[1]}, ${match[2]}`);
  }

  return result;
}
// Example usage:
console.log(extractAttributes('<div class="container" id="main" data-value="123">'));
// should return ['class, container', 'id, main', 'data-value, 123']

console.log(extractAttributes('<input type="text" name="username" placeholder="Enter your name">'));
// should return ['type, text', 'name, username', 'placeholder, Enter your name']

console.log(extractAttributes('<a href="https://example.com" target="_blank" rel="noopener">'));
// should return ['href, https://example.com', 'target, _blank', 'rel, noopener']