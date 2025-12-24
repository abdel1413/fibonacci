function favoriteSongs(playlist) {
  
  let sorted = [...playlist].sort((a,b)=>(b.plays -a.plays))

  const twoMax = sorted.slice(0,2).map(song => song.title)
   console.log(twoMax)
  return twoMax;
}

 favoriteSongs([
   {"title": "Sync or Swim", "plays": 3},
    {"title": "Byte Me", "plays": 1}, 
 {"title": "Earbud Blues", "plays": 2} ]) // should return ["Sync or Swim", "Earbud Blues"]

 favoriteSongs([
   {"title": "Hello World", "plays": 5},
   {"title": "Code Monkey", "plays": 10},
   {"title": "Debugging Blues", "plays": 7} ]) // should return ["Code Monkey", "Debugging Blues"]

 favoriteSongs([
   {"title": "Loop It Up", "plays": 0},
   {"title": "Infinite Recursion", "plays": 0},
   {"title": "Segmentation Fault", "plays": 0} ]) // should return ["Loop It Up", "Infinite Recursion"]