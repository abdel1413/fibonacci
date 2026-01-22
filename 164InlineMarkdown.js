function parseInlineCode(markdown) {
let mark = markdown.replace(/`([^`]+)`/g,"<code>$1</code>")
console.log('',mark)
  return mark ;
}


parseInlineCode("Use `let` to declare the variable.")