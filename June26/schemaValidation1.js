function isValidSchema(obj) {
  if(typeof obj.username === "string"){
    return true
  }
  return false;
}

// isValidSchema({username: "JohnDoe"}); // true
// isValidSchema({username: 123}); // false