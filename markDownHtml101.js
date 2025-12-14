function convert(markdown) {
  const match = markdown.match(/^\s*(#{1,6})\s+(.+)$/);

  if (!match) {
    return "Invalid format";
  }

  const level = match[1].length;
  const text = match[2].trim();

  return `<h${level}>${text}</h${level}>`;
}
convert("# Heading 1") // should return '<h1>Heading 1</h1>'
convert("   ##   Heading 2   ") // should return '<h2>Heading 2</h2>'
convert("###Heading 3") // should return 'Invalid format'
convert("####### Heading 7") // should return 'Invalid format'
convert("No heading here") // should return 'Invalid format'