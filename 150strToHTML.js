function parseUnorderedList(markdown) {
  const items = markdown.split("\n");

  const listItems = items.map(line => {
    // remove "- " (dash + at least one space)
    const text = line.replace(/^-\s+/, "");
    return `<li>${text}</li>`;
  });

  return `<ul>${listItems.join("")}</ul>`;
}
// Example usage:
console.log(parseUnorderedList("- Apple\n- Banana\n- Cherry"));
// should return "<ul><li>Apple</li><li>Banana</li><li>Cherry</li>"