function stripTags(html) {
    // Use a regular expression to remove HTML tags
     
  return html.replace(/<[^>]*>/g, "");
  /**
   * The regular expression <[^>]*> matches:
< start of a tag
any characters except >
> end of a tag
This removes:
opening tags
closing tags
attributes
Nested tags are handled automatically
   */
}
// Example usage:
console.log(stripTags("<div>Hello <b>World</b></div>")); // should return "Hello World"
console.log(stripTags("<p>This is a <a href='#'>link</a></p>")); // should return "This is a link"
console.log(stripTags("<span>Sample <i>text</i> with <u>tags</u></span>")); // should return "Sample text with tags"
console.log(stripTags("No tags here!")); // should return "No tags here!"
console.log(stripTags("<h1>Title</h1><p>Paragraph</p>")); // should return "TitleParagraph"