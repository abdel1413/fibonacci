function generateSlug(str) {
 
    // convert to lowercase, 
    // remove special characters, 
    // replace spaces with %20
  return str.toLowerCase().replace(/[^a-z0-9 ]/g,"").trim().replace(/\s+/g, "%20")
}