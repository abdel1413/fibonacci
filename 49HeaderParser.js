function getHeadings(csv) {
console.log(csv.split(","))
  return csv.split(",").map(h => h.trim());
}


getHeadings("name,age,city") // should return ['name', 'age', 'city']
getHeadings("  product , price , quantity ") // should return ['product', 'price', 'quantity']
getHeadings("id , first_name , last_name , email ") // should return ['id', 'first_name', 'last_name', 'email']
