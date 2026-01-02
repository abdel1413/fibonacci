function getHeadings(csv) {
console.log(csv.split(","))
  return csv.split(",").map(h => h.trim());
}


getHeadings("name,age,city") // should return ['name', 'age', 'city']
getHeadings("  product , price , quantity ") // should return ['product', 'price', 'quantity']
getHeadings("id , first_name , last_name , email ") // should return ['id', 'first_name', 'last_name', 'email']
getHeadings(" country , capital , population , area ") // should return ['country', 'capital', 'population', 'area']
getHeadings(" username , password , email , date_joined ") // should return ['username', 'password', 'email', 'date_joined']
getHeadings(" title , author , genre , published_year ") // should return ['title', 'author', 'genre', 'published_year']
getHeadings(" make , model , year , mileage ") // should return ['make', 'model', 'year', 'mileage']
getHeadings(" course_name , instructor , duration , level ") // should return ['course_name', 'instructor', 'duration', 'level']
getHeadings(" department , employee_id , salary , hire_date ") // should return ['department', 'employee_id', 'salary', 'hire_date']
getHeadings(" project_name , start_date , end_date , status ") // should return ['project_name', 'start_date', 'end_date', 'status']