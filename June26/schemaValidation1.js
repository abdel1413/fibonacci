function isValidSchema(obj) {
  if(typeof obj.username === "string"){
    return true
  }
  return false;
}