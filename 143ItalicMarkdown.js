function parseItalics(markdown) {
    // Replace *italic* and _italic_ with <i>italic</i> HTML tags
    // Ensure that the asterisks or underscores are not adjacent to spaces
    // to avoid matching leading or trailing spaces within the markers
    // Example: "*This is italic*" -> "<i>This is italic</i>"
    // Example: "_Another italic text_" -> "<i>Another italic text</i>"

    ///\*([^\s][^\*]*[^\s])\*/g,"<i>$1</i>" =>
      //   \*   =>opening *
 //([^\s]  =>first character is NOT a space
//[^*]*   => any characters except *
//[^\s]) =>last character is NOT a space
//\*  =>closing *
     
  return markdown
  .replace(/\*([^\s][^\*]*[^\s])\*/g,"<i>$1</i>")
  .replace(/_([^\s][^\*]*[^\s])_/g,"<i>$1</i>")
 
  
}
parseItalics("*This is italic*") // should return "<i>This is italic</i>"
parseItalics("_Another italic text_") // should return "<i>Another italic text</i>"
parseItalics("This is *italic* and this is _also italic_") // should return "This is <i>italic</i> and this is <i>also italic</i>"
parseItalics("Mixing *both _styles_* in one line") // should return "Mixing <i>both <i>styles</i></i> in one line"
parseItalics("No italics here") // should return "No italics here"
parseItalics("* Leading space*") // should return "* Leading space*"
parseItalics("_Trailing space _") // should return "_Trailing space _"
parseItalics("**Not italic**") // should return "**Not italic**"
parseItalics("__Also not italic__") // should return "__Also not italic__"