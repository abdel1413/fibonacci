function validate(obj) {
  return (
    obj !== null &&
    typeof obj === "object" &&
    typeof obj.username === "string"
  );
}