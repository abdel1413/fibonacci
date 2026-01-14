function parseLink(markdown) {
let regex = /[a-z]/

let index = markdown.indexOf("]")
console.log(index)
 let alt= markdown.slice(1, index)
 let href = markdown.slice(index +2, -1)
  return`<a href="${href}">${alt}</a>`;
}


 parseLink("[freeCodeCamp](https://freecodecamp.org/)") // should return '<a href="https://freecodecamp.org/">freeCodeCamp</a>'
 parseLink("[Google](https://google.com)") // should return '<a href="https://google.com">Google</a>'
 parseLink("[GitHub](https://github.com)") // should return '<a href="https://github.com">GitHub</a>'