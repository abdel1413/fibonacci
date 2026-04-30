function getInitials(name) {
   const f = name.split(" ").map(c =>(c[0].toUpperCase()))
 console.log(f.join("."),)
  return `${f.join(".")}.`;
}

getInitials("Tommy Millwood")
getInitials("Frances Cowell Conrad")