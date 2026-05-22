function groupAnagrams(words) {

const grp = {}
// Iterate through each word in the input array
for(let w of words){
    // Sort the characters of the word to create a key
 let key = w.split("").sort().join("")
  
 // If the key doesn't exist in the group object, initialize it with an empty array
  if(!grp[key]){
    grp[key] = [];
  }
  // Push the original word into the corresponding group based on the sorted key
    grp[key].push(w)
  
 
}
// Return the values of the group object, which are arrays of anagrams
  return Object.values(grp)
}

groupAnagrams(["listen", "silent", "hello", "enlist", "world"])