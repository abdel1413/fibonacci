function capitalize(paragraph) {
//^\s*[a-z] → matches the first letter of the paragraph

//[.!?]+\s*[a-z] → matches sentence endings followed by a //letter
//Only the matched portion is uppercased, preserving ///everything else
 let match = paragraph.replace((/(^\s*[a-z])|([.?!]+\s*[a-z])/g), m => m.toUpperCase())
 console.log(match)
  return match;

}



capitalize("this is a simple sentence.") // should return "This is a simple sentence."
capitalize("i did today's coding challenge... it was fun!!")// should return "I did today's coding challenge... It was fun!!"
capitalize("what time is it? it's coding time.") // should return "What time is it? It's coding time."
capitalize("hello world! welcome to javascript.") // should return "Hello world! Welcome to javascript."
capitalize("javaScript is great. isn't it? yes, it is!") // should return "JavaScript is great. Isn't it? Yes, it is!"