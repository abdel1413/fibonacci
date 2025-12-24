function parseImage(markdown) {

    const altText =markdown.substring(2,markdown.indexOf(']'))
    const imageUrl =markdown.substring( markdown.indexOf("(")+1,markdown.indexOf(")"))

  return `<img src="${imageUrl}" alt="${altText}">`;
}

parseImage("![Cute cat](cat.png)") // should return '<img src="cat.png" alt="Cute cat">'
parseImage("![Rocket Ship](https://freecodecamp.org/cdn/rocket-ship.jpg)") // should return '<img src="https://freecodecamp.org/cdn/rocket-ship.jpg" alt="Rocket Ship">'
parseImage("![Cute cats!](https://freecodecamp.org/cats.jpeg)") //

//2nd way
function parseImage(markdown) {

    const altText = markdown.match(/!\[(.*?)\]/)[1];
    const imageUrl = markdown.match(/\((.*?)\)/)[1];

  return `<img src="${imageUrl}" alt="${altText}">`;
}

// Example usage:
console.log(parseImage("![Cute cat](cat.png)")); 
// should return '<img src="cat.png" alt="Cute cat">'

console.log(parseImage("![Rocket Ship](https://freecodecamp.org/cdn/rocket-ship.jpg)")); 
// should return '<img src="https://freecodecamp.org/cdn/rocket-ship.jpg" alt="Rocket Ship">'

console.log(parseImage("![Cute cats!](https://freecodecamp.org/cats.jpeg)")); 
// should return '<img src="https://freecodecamp.org/cats.jpeg" alt="Cute cats!">'

console.log(parseImage("![Mountain View](https://example.com/mountain.jpg)")); 
// should return '<img src="https://example.com/mountain.jpg" alt="Mountain View">'

console.log(parseImage("![Sunset](sunset.png)")); 
// should return '<img src="sunset.png" alt="Sunset">'  

//3rd way
function markdownToHTML(markdown) {
  const match = markdown.match(/!\[(.*?)\]\((.*?)\)/);
  return `<img src="${match[2]}" alt="${match[1]}">`;
}
// Example usage:
console.log(markdownToHTML("![Cute cat](cat.png)")); 
// should return '<img src="cat.png" alt="Cute cat">'

console.log(markdownToHTML("![Rocket Ship](https://freecodecamp.org/cdn/rocket-ship.jpg)")); 
// should return '<img src="https://freecodecamp.org/cdn/rocket-ship.jpg" alt="Rocket Ship">'

console.log(markdownToHTML("![Cute cats!](https://freecodecamp.org/cats.jpeg)")); 
// should return '<img src="https://freecodecamp.org/cats.jpeg" alt="Cute cats!">'