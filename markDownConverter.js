function convertListItem(markdown) {
  //check if the first char is not space or a number and second isn't period, return invalid

  //else return 'list'
  let regex = /^\s*\d+\.\s+(.+)$/
  let matched= markdown.match(regex)
  console.log(matched)
  if(!matched){
    return "Invalid format"
  }

  
  return  `<li>${matched[1]}</li>`;
  }



convertListItem("2. list item text") // should return '<li>list item text</li>'
convertListItem("  10. another list item") // should return '<li>another list item</li>'
convertListItem("not a list item") // should return 'Invalid format'
convertListItem("3 list item without period") // should return 'Invalid format'